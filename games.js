/* ============================================================
 * THE VILLAGE — THE GAMES SHELF  (games.js)
 *
 * A shelf of small learning games, built by the family, played by
 * the family. Each game is tagged to a curriculum base (the ones
 * Colorado asks you to cover) or to an extracurricular the kids
 * want for themselves — typing, cursive, sign language, and so on.
 *
 * FIRST GAME: NUMBER FORGE (math)
 *
 *   - Ten skills in a ladder: counting -> addition -> subtraction ->
 *     multiplication -> division -> fractions -> decimals -> negatives
 *     -> order of operations -> pre-algebra.
 *   - Ten levels inside every skill. The game watches how you do and
 *     moves you up when you are ready and down when you need a hand.
 *     Nobody gets stuck: two misses and the game teaches.
 *   - Green light when you are right. When you are wrong it shows the
 *     answer AND the method — the trick that makes it easy.
 *   - Every skill carries NUGGETS: the teaching assets. You collect
 *     them by struggling with something and then learning it. That is
 *     the whole point — the asset is earned, not handed out.
 *   - Two point types, kept separate on purpose:
 *       📖 TEACHING points — earned by meeting the method (a miss,
 *          reading the trick, collecting a nugget). Learning.
 *       ✨ EXPRESSION points — earned by mastery (right answers,
 *          streaks, level-ups). Showing what you have learned.
 *
 * HONESTY RULE (same as the rest of the Village): the numbers are
 * real. Progress is stored on this device only, and it is what the
 * kid actually did.
 * ============================================================ */

/* ---------- tiny helpers ---------- */
function gEsc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function gRi(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function gPick(a){ return a[Math.floor(Math.random()*a.length)]; }
function gShuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
// normalize hard: unicode minus/en/em dashes all compare as a plain hyphen,
// so "−5" (typed from a choice button) matches "-5" (a computed answer).
function gNorm(v){ return String(v==null?'':v).trim().toLowerCase().replace(/\s+/g,'').replace(/[\u2212\u2013\u2014]/g,'-'); }
function gSame(a,b){
  const x=gNorm(a), y=gNorm(b);
  if(x===y) return true;
  const nx=Number(x), ny=Number(y);
  if(!isNaN(nx) && !isNaN(ny)) return Math.abs(nx-ny) < 1e-9;
  return false;
}

/* ---------- question builders ---------- */
function numQ(prompt, answer, hint, nugget){
  return { prompt:prompt, answer:String(answer), mode:'numeric', hint:hint, nugget:nugget||null };
}
function choiceQ(prompt, answer, choices, hint, nugget){
  return { prompt:prompt, answer:String(answer), mode:'choice', choices:choices.map(String), hint:hint, nugget:nugget||null };
}

/* ============================================================
 * NUGGETS — the teaching assets
 * Earned by meeting the method, never handed out for free.
 * ============================================================ */
const NUGGETS = {
  'count-count':   { title:'Count one at a time', text:'Touch each thing as you say its number. The last number you say is how many there are. Do not count faster than you can point.' },
  'count-compare': { title:'More means further right', text:'On the number line, the number further to the right is always more. 9 is further right than 4, so 9 is more.' },
  'count-next':    { title:'After means count up one', text:'"What comes after 7?" is just 7 + 1 = 8. "Before" is 7 − 1 = 6.' },
  'count-skip':    { title:'Skip counting is adding the same number', text:'2, 4, 6, 8 is just adding 2 each time. Once you hear the pattern, you can keep it going forever.' },
  'count-teens':   { title:'Count in fives, then the rest', text:'Five, ten, then count the leftovers. 5 + 5 = 10, then 11, 12, 13.' },
  'count-before':  { title:'Before means count down one', text:'"What comes before 30?" is 30 − 1 = 29.' },
  'count-place':   { title:'Place value reads right to left', text:'The rightmost digit is the ones. The next one left is the tens. In 47, the 7 is ones and the 4 is tens — so 47 is 4 tens and 7 ones.' },

  'add-make10':    { title:'Make ten first', text:'8 + 5 is hard. 8 + 2 = 10 is easy. So take 2 from the 5, leaving 3: 10 + 3 = 13. Making ten turns a hard sum into an easy one.' },
  'add-split':     { title:'Split by place value', text:'43 + 5: split 43 into 40 + 3. Do 3 + 5 = 8, then 40 + 8 = 48. Add the small parts first.' },
  'add-carry':     { title:'Carry the ten', text:'28 + 7: 8 + 7 = 15. That is 1 ten and 5 ones. Write the 5, carry the 1 into the tens: 20 + 10 = 30, so 35.' },
  'add-double':    { title:'Doubles and near-doubles', text:'7 + 7 = 14 (a double you know). 7 + 8 is one more, so 15. Near-doubles are just doubles plus one.' },
  'add-columns':   { title:'Line up the columns', text:'Write the numbers one above the other so ones sit under ones and tens under tens. Add the ones column first, then the tens.' },

  'sub-count':     { title:'Subtraction is counting back', text:'9 − 4: start at 9 and count back four — 8, 7, 6, 5. You land on 5.' },
  'sub-up':        { title:'Count up to find the difference', text:'15 − 8: instead of counting back, count UP from 8 to 15 — 9, 10, 11, 12, 13, 14, 15. That is 7 steps, so the answer is 7.' },
  'sub-borrow':    { title:'Borrow a ten', text:'42 − 7: you cannot take 7 from 2, so borrow one ten from the 40. Now you have 12 − 7 = 5, and the tens left are 30. Answer: 35.' },
  'sub-missing':   { title:'Missing addend: think addition', text:'7 + ? = 15 is the same as 15 − 7. Subtraction undoes addition — use whichever one is easier.' },

  'mul-groups':    { title:'Multiplication is equal groups', text:'4 × 3 means four groups of three: 3 + 3 + 3 + 3 = 12. When the groups are equal, adding them up is multiplying.' },
  'mul-double':    { title:'Doubling: the ×2, ×4, ×8 ladder', text:'To multiply by 4, double twice: 6 × 2 = 12, 12 × 2 = 24, so 6 × 4 = 24. To multiply by 8, double three times. Doubling is the easiest move there is.' },
  'mul-nine':      { title:'The ×9 trick', text:'9 × 7: do 10 × 7 = 70, then take one 7 away — 63. Multiplying by 9 is multiplying by 10 and stepping back once.' },
  'mul-five':      { title:'The ×5 trick', text:'5 × 8: multiply by 10 (80) and halve it (40). Fives are half of tens.' },
  'mul-split':     { title:'Split the big number', text:'23 × 4: split 23 into 20 + 3. 20 × 4 = 80, 3 × 4 = 12, then 80 + 12 = 92. Break big numbers into place values.' },
  'mul-commute':   { title:'Order does not matter', text:'3 × 8 = 8 × 3. If one direction is easier, turn it around. 6 × 9 is harder than 9 × 6 only if you do not know your nines.' },

  'div-backwards': { title:'Division is backwards multiplication', text:'56 ÷ 8 asks: what times 8 makes 56? If you know 7 × 8 = 56, then 56 ÷ 8 = 7. Every division fact is a multiplication fact turned around.' },
  'div-groups':    { title:'Division shares into equal groups', text:'12 ÷ 3 asks: how many groups of 3 fit in 12? Four. Sharing equally is dividing.' },
  'div-remainder': { title:'Remainders are what is left over', text:'17 ÷ 5: five goes into 17 three times (15), and 2 is left over. So the answer is 3 remainder 2.' },
  'div-halve':     { title:'Halving twice is dividing by four', text:'Divide by 4 by halving twice: 80 ÷ 2 = 40, 40 ÷ 2 = 20. Divide by 8 by halving three times.' },

  'frac-meaning':  { title:'A fraction is a piece of a whole', text:'The bottom number says how many equal pieces the whole was cut into. The top says how many you have. 3/4 means the whole was cut into 4 and you have 3.' },
  'frac-bigger':   { title:'More pieces means smaller pieces', text:'1/2 is bigger than 1/4. Cutting the same pizza into more slices makes each slice smaller. With the same top number, the smaller bottom number is the bigger fraction.' },
  'frac-same':     { title:'Same bottom? Just add the tops', text:'2/7 + 3/7 = 5/7. The pieces are the same size, so you are only counting them. Never add the bottom numbers.' },
  'frac-equiv':    { title:'Multiplying top and bottom by the same number changes nothing', text:'1/2 = 2/4 = 3/6 = 50/100. You are cutting every piece in half and taking twice as many — the amount is the same.' },
  'frac-simplify': { title:'Simplify by dividing both by the same number', text:'4/8: divide top and bottom by 4 and you get 1/2. Same amount, simpler name.' },
  'frac-of':       { title:'A fraction of a number: divide, then multiply', text:'3/4 of 20: divide 20 by 4 (the bottom) to get 5, then multiply by 3 (the top) to get 15. Bottom first, then top.' },

  'dec-point':     { title:'Decimals are fractions in disguise', text:'0.5 is 5/10, which is 1/2. 0.25 is 25/100, which is 1/4. The digits after the point count tenths, hundredths, thousandths.' },
  'dec-lineup':    { title:'Line up the decimal points', text:'When adding decimals, put the points directly under each other so tenths sit under tenths. Then add like normal and bring the point straight down.' },
  'dec-money':     { title:'Money is decimals you already know', text:'$3.50 + $2.25: 50 + 25 = 75 cents, 3 + 2 = 5 dollars. $5.75. Cents are hundredths, and you have been doing this your whole life.' },
  'dec-round':     { title:'Rounding: look at the next digit', text:'To round to the nearest tenth, look at the hundredths digit. 5 or more rounds up, 4 or less stays. 3.47 rounds to 3.5.' },
  'dec-percent':   { title:'Percent means out of a hundred', text:'10% is 10/100, so it is one tenth — divide by 10. 50% is half. 25% is a quarter. Percent of a number is just a fraction of a number.' },

  'neg-line':      { title:'Negatives live left of zero', text:'On the number line, zero is the middle. −7 is further left than −3, so −7 is smaller (colder, deeper, lower). "Bigger number" and "bigger value" are not the same thing below zero.' },
  'neg-add':       { title:'Adding moves you right', text:'−5 + 3: start at −5 and walk three steps right. −4, −3, −2. You land on −2.' },
  'neg-sub':       { title:'Subtracting moves you left', text:'5 − 9: start at 5 and walk nine steps left. You cross zero and land on −4.' },
  'neg-mul':       { title:'Two negatives make a positive', text:'−4 × −3 = 12. Multiplying or dividing two numbers with the SAME sign gives a positive; different signs give a negative.' },

  'order-pemdas':  { title:'Multiply before you add', text:'2 + 3 × 4 is not 20. Do 3 × 4 = 12 first, then 2 + 12 = 14. Multiplication is stronger than addition, so it happens first.' },
  'order-parens':  { title:'Parentheses go first', text:'(2 + 3) × 4: the brackets say "do this first". 2 + 3 = 5, then 5 × 4 = 20. Brackets let you overrule the normal order.' },
  'order-order':   { title:'The order: brackets, powers, × ÷, then + −', text:'Brackets, then exponents (powers), then multiply and divide left to right, then add and subtract left to right. Same-strength operations go left to right.' },

  'prealg-balance':{ title:'A balance scale', text:'x + 5 = 12 is a balance. Whatever you do to one side, do to the other. Take 5 off both sides and x = 7. That is all algebra is.' },
  'prealg-undo':   { title:'Undo the operation', text:'2x = 14: x is multiplied by 2, so undo it by dividing both sides by 2. x = 7. To solve, do the opposite of what was done.' },
  'prealg-both':   { title:'Get the x\'s on one side', text:'2x + 3 = x + 7: take one x off each side and you get x + 3 = 7, so x = 4. Collect the x\'s together first, then undo the rest.' }
};

/* ============================================================
 * THE SKILL LADDER — ten skills, ten levels each
 * ============================================================ */
const GAME_SKILLS = [
{
  id:'count', name:'Counting & Number Sense', icon:'🔢', ages:'5–8',
  blurb:'Count things, compare, skip-count, place value.',
  gen(lv){
    const E=['🍎','🌰','🐛','🪨','🌻','🥕','🐝','🍄','⭐','🐞'];
    if(lv<=2){
      const n=(lv===1?gRi(1,5):gRi(4,9)), e=gPick(E);
      return numQ('<div class="gq-emojis">'+e.repeat(n)+'</div><div class="gq-ask">How many?</div>', n,
        'Count them one at a time: '+Array.from({length:n},(_,i)=>i+1).join(' → ')+'. There are <b>'+n+'</b>.', 'count-count');
    }
    if(lv===3){
      let a=gRi(2,9), b=gRi(2,9); if(a===b) b=a+1;
      return choiceQ('Which is more: <b>'+a+'</b> or <b>'+b+'</b>?', Math.max(a,b), [a,b],
        'The bigger number is further along the number line. '+Math.max(a,b)+' comes after '+Math.min(a,b)+'.', 'count-compare');
    }
    if(lv===4){ const n=gRi(1,19); return numQ('What comes <b>after</b> '+n+'?', n+1, 'Count up one: '+n+' → <b>'+(n+1)+'</b>.', 'count-next'); }
    if(lv===5){
      const s=gRi(2,5), k=gRi(2,5), seq=[]; for(let i=0;i<k;i++) seq.push(s*(i+1));
      return numQ('Skip count by '+s+': '+seq.join(', ')+', <b>?</b>', s*(k+1), 'Add '+s+' each time: '+seq[k-1]+' + '+s+' = <b>'+(s*(k+1))+'</b>.', 'count-skip');
    }
    if(lv===6){
      const n=gRi(10,15), e=gPick(E);
      return numQ('<div class="gq-emojis">'+e.repeat(n)+'</div><div class="gq-ask">How many?</div>', n,
        'Count in fives, then the rest: 5, 10, then keep going. There are <b>'+n+'</b>.', 'count-teens');
    }
    if(lv===7){ const n=gRi(11,40); return numQ('What comes <b>before</b> '+n+'?', n-1, 'Count down one: '+n+' → <b>'+(n-1)+'</b>.', 'count-before'); }
    if(lv===8){
      const s=gPick([5,10]), k=gRi(2,6), seq=[]; for(let i=0;i<k;i++) seq.push(s*(i+1));
      return numQ('Skip count by '+s+': '+seq.join(', ')+', <b>?</b>', s*(k+1), 'Add '+s+' each time: '+seq[k-1]+' + '+s+' = <b>'+(s*(k+1))+'</b>.', 'count-skip');
    }
    if(lv===9){
      const t=gRi(1,9), o=gRi(0,9), n=t*10+o;
      return numQ('In <b>'+n+'</b>, which digit is in the <b>tens</b> place?', t,
        'Place values read right to left: ones, then tens. In '+n+' the ones digit is '+o+', so the tens digit is <b>'+t+'</b>.', 'count-place');
    }
    const start=gRi(1,9), k=gRi(2,5), seq=[]; for(let i=0;i<k;i++) seq.push(start+10*i);
    return numQ('Skip count by 10: '+seq.join(', ')+', <b>?</b>', start+10*k,
      'Add 10 each time — only the tens digit changes: '+seq[k-1]+' + 10 = <b>'+(start+10*k)+'</b>.', 'count-skip');
  }
},
{
  id:'add', name:'Addition', icon:'➕', ages:'6–10',
  blurb:'From single digits up to four-digit sums.',
  gen(lv){
    if(lv===1){ const a=gRi(1,5), b=gRi(1,10-a); return numQ(a+' + '+b+' = ?', a+b, 'Start at '+a+' and count on '+b+': '+Array.from({length:b},(_,i)=>a+i+1).join(', ')+'. So '+a+' + '+b+' = <b>'+(a+b)+'</b>.', 'add-make10'); }
    if(lv===2){ const a=gRi(2,9), b=gRi(2,20-a); return numQ(a+' + '+b+' = ?', a+b, 'Make ten first: '+a+' needs '+(10-a)+' to reach 10, leaving '+(b-(10-a))+'. 10 + '+(b-(10-a))+' = <b>'+(a+b)+'</b>.', 'add-make10'); }
    if(lv===3){ const t=gRi(1,8)*10, o=gRi(1,8), b=gRi(1,9-o); return numQ((t+o)+' + '+b+' = ?', t+o+b, 'Split '+(t+o)+' into '+t+' + '+o+'. '+o+' + '+b+' = '+(o+b)+', then '+t+' + '+(o+b)+' = <b>'+(t+o+b)+'</b>.', 'add-split'); }
    if(lv===4){ const t=gRi(1,8)*10, o=gRi(3,9), b=gRi(10-o,9); return numQ((t+o)+' + '+b+' = ?', t+o+b, (o+b)+' is more than ten, so it makes 1 ten and '+(o+b-10)+' ones. Carry the ten: '+(t+10)+' + '+(o+b-10)+' = <b>'+(t+o+b)+'</b>.', 'add-carry'); }
    if(lv===5){ const a=gRi(1,4)*10+gRi(1,8), b=gRi(1,4)*10+gRi(1,9-a%10); return numQ(a+' + '+b+' = ?', a+b, 'Add the ones: '+(a%10)+' + '+(b%10)+' = '+(a%10+b%10)+'. Add the tens: '+Math.floor(a/10)*10+' + '+Math.floor(b/10)*10+' = '+(Math.floor(a/10)*10+Math.floor(b/10)*10)+'. Total <b>'+(a+b)+'</b>.', 'add-columns'); }
    if(lv===6){ const a=gRi(1,6)*10+gRi(4,9), b=gRi(1,6)*10+gRi(10-a%10,9); return numQ(a+' + '+b+' = ?', a+b, 'Ones first: '+(a%10)+' + '+(b%10)+' = '+(a%10+b%10)+' — that is 1 ten and '+(a%10+b%10-10)+' ones. Carry it, then add the tens. Answer <b>'+(a+b)+'</b>.', 'add-carry'); }
    if(lv===7){ const a=gRi(1,9)*100+gRi(1,9)*10+gRi(1,9), b=gRi(1,9)*10+gRi(1,9); return numQ(a+' + '+b+' = ?', a+b, 'Line up the columns and add from the right: ones, then tens, then hundreds. Answer <b>'+(a+b)+'</b>.', 'add-columns'); }
    if(lv===8){ const a=gRi(1,8)*100+gRi(1,9)*10+gRi(1,9), b=gRi(1,8)*100+gRi(1,9)*10+gRi(1,9); return numQ(a+' + '+b+' = ?', a+b, 'Add column by column from the right, carrying any ten into the next column. Answer <b>'+(a+b)+'</b>.', 'add-columns'); }
    if(lv===9){ const a=gRi(1,8)*1000+gRi(1,9)*100+gRi(1,9)*10+gRi(1,9), b=gRi(1,8)*100+gRi(1,9)*10+gRi(1,9); return numQ(a+' + '+b+' = ?', a+b, 'Same as always — ones, tens, hundreds, thousands, carrying as you go. Answer <b>'+(a+b)+'</b>.', 'add-columns'); }
    const a=gRi(10,60), b=gRi(10,60), c=gRi(10,60);
    return numQ(a+' + '+b+' + '+c+' = ?', a+b+c, 'Add the first two, then add the third: '+a+' + '+b+' = '+(a+b)+', then '+(a+b)+' + '+c+' = <b>'+(a+b+c)+'</b>. Adding in any order gives the same total.', 'add-columns');
  }
},
{
  id:'sub', name:'Subtraction', icon:'➖', ages:'6–10',
  blurb:'Taking away, borrowing, and finding the difference.',
  gen(lv){
    if(lv===1){ const a=gRi(4,10), b=gRi(1,a-1); return numQ(a+' − '+b+' = ?', a-b, 'Start at '+a+' and count back '+b+': '+Array.from({length:b},(_,i)=>a-i-1).join(', ')+'. You land on <b>'+(a-b)+'</b>.', 'sub-count'); }
    if(lv===2){ const a=gRi(11,20), b=gRi(2,9); return numQ(a+' − '+b+' = ?', a-b, 'Count UP from '+b+' to '+a+': that is '+(a-b)+' steps, so the answer is <b>'+(a-b)+'</b>. Counting up is often easier than counting back.', 'sub-up'); }
    if(lv===3){ const t=gRi(2,9)*10, o=gRi(2,9), b=gRi(1,o); return numQ((t+o)+' − '+b+' = ?', t+o-b, 'Split '+(t+o)+' into '+t+' + '+o+'. '+o+' − '+b+' = '+(o-b)+', so the answer is '+t+' + '+(o-b)+' = <b>'+(t+o-b)+'</b>.', 'sub-count'); }
    if(lv===4){ const t=gRi(2,9)*10, o=gRi(1,5), b=gRi(o+1,9); return numQ((t+o)+' − '+b+' = ?', t+o-b, 'You cannot take '+b+' from '+o+', so borrow a ten: '+(o+10)+' − '+b+' = '+(o+10-b)+'. The tens left are '+(t-10)+'. Answer <b>'+(t+o-b)+'</b>.', 'sub-borrow'); }
    if(lv===5){ const a=gRi(3,9)*10+gRi(2,9), b=gRi(1,2)*10+gRi(1,9); if(b>=a) return this.gen(5); return numQ(a+' − '+b+' = ?', a-b, 'Ones: '+(a%10)+' − '+(b%10)+' = '+(a%10-b%10)+'. Tens: '+(Math.floor(a/10)*10)+' − '+(Math.floor(b/10)*10)+' = '+(Math.floor(a/10)*10-Math.floor(b/10)*10)+'. Answer <b>'+(a-b)+'</b>.', 'sub-count'); }
    if(lv===6){ const a=gRi(3,9)*10+gRi(1,5), b=gRi(1,2)*10+gRi(6,9); if(b>=a) return this.gen(6); return numQ(a+' − '+b+' = ?', a-b, 'Borrow a ten for the ones column, then subtract the tens. Answer <b>'+(a-b)+'</b>.', 'sub-borrow'); }
    if(lv===7){ const a=gRi(2,9)*100+gRi(1,9)*10+gRi(1,9), b=gRi(1,9)*10+gRi(1,9); return numQ(a+' − '+b+' = ?', a-b, 'Line up the columns and subtract from the right, borrowing where you need to. Answer <b>'+(a-b)+'</b>.', 'sub-borrow'); }
    if(lv===8){ const a=gRi(3,9)*100+gRi(1,9)*10+gRi(1,9), b=gRi(1,2)*100+gRi(1,9)*10+gRi(1,9); if(b>=a) return this.gen(8); return numQ(a+' − '+b+' = ?', a-b, 'Column by column from the right, borrowing when the top digit is smaller. Answer <b>'+(a-b)+'</b>.', 'sub-borrow'); }
    if(lv===9){ const a=gRi(2,9)*1000+gRi(1,9)*100+gRi(1,9)*10+gRi(1,9), b=gRi(1,8)*100+gRi(1,9)*10+gRi(1,9); return numQ(a+' − '+b+' = ?', a-b, 'Same method, bigger numbers: subtract from the right, borrow as needed. Answer <b>'+(a-b)+'</b>.', 'sub-borrow'); }
    const s=gRi(11,20), b=gRi(3,9);
    return numQ('? + '+b+' = '+s+'   — what is the missing number?', s-b, 'A missing addend is just subtraction: '+s+' − '+b+' = <b>'+(s-b)+'</b>. Subtraction undoes addition.', 'sub-missing');
  }
},
{
  id:'mul', name:'Multiplication', icon:'✖️', ages:'7–11',
  blurb:'Equal groups, times tables, and the doubling tricks.',
  gen(lv){
    if(lv===1){ const a=gPick([2,5,10]), b=gRi(1,10); return numQ(a+' × '+b+' = ?', a*b, a+' × '+b+' means '+b+' groups of '+a+'. '+(a===10?'Multiplying by 10 just adds a zero.':a===5?'Fives are half of tens: 10 × '+b+' = '+(10*b)+', halve it.':'Doubles are easy: keep doubling.'), a===5?'mul-five':a===10?'mul-five':'mul-double'); }
    if(lv===2){ const a=gRi(2,5), b=gRi(2,10); return numQ(a+' × '+b+' = ?', a*b, a+' × '+b+' is '+b+' groups of '+a+': '+Array.from({length:b},()=>a).join(' + ')+' = <b>'+(a*b)+'</b>.', 'mul-groups'); }
    if(lv===3){ const a=gRi(6,10), b=gRi(2,5); return numQ(a+' × '+b+' = ?', a*b, 'Turn it around: '+b+' × '+a+' is '+a+' groups of '+b+'. Or split: '+a+' × '+b+' = ('+a+' × '+(b-1)+') + '+a+' = '+((a*(b-1)))+' + '+a+' = <b>'+(a*b)+'</b>.', 'mul-commute'); }
    if(lv===4){ const a=gRi(6,9), b=gRi(6,9); const nug = a===9||b===9?'mul-nine':'mul-commute'; return numQ(a+' × '+b+' = ?', a*b, (a===9||b===9)?'The ×9 trick: 10 × '+(a===9?b:a)+' = '+(10*(a===9?b:a))+', then take one '+(a===9?b:a)+' away → <b>'+(a*b)+'</b>.':'Split the bigger number: '+(a*b)+' comes from '+a+' × '+b+'. If you know '+a+' × '+(b-1)+' = '+(a*(b-1))+', add one more '+a+' → <b>'+(a*b)+'</b>.', nug); }
    if(lv===5){ const a=gRi(11,25), b=gPick([2,3,4,5]); return numQ(a+' × '+b+' = ?', a*b, 'Split '+a+' into '+Math.floor(a/10)*10+' + '+(a%10)+'. '+Math.floor(a/10)*10+' × '+b+' = '+(Math.floor(a/10)*10*b)+', '+(a%10)+' × '+b+' = '+(a%10*b)+'. Add them: <b>'+(a*b)+'</b>.', 'mul-split'); }
    if(lv===6){ const a=gRi(12,49), b=gRi(3,9); return numQ(a+' × '+b+' = ?', a*b, 'Split '+a+' into tens and ones, multiply each by '+b+', then add the two answers. Answer <b>'+(a*b)+'</b>.', 'mul-split'); }
    if(lv===7){ const a=gRi(11,25), b=gRi(11,25); return numQ(a+' × '+b+' = ?', a*b, 'Split both: '+a+' = '+Math.floor(a/10)*10+' + '+(a%10)+', '+b+' = '+Math.floor(b/10)*10+' + '+(b%10)+'. Multiply all four parts and add. Answer <b>'+(a*b)+'</b>.', 'mul-split'); }
    if(lv===8){ const a=gRi(101,499), b=gRi(3,9); return numQ(a+' × '+b+' = ?', a*b, 'Split '+a+' by place value (hundreds, tens, ones), multiply each by '+b+', then add. Answer <b>'+(a*b)+'</b>.', 'mul-split'); }
    if(lv===9){ const a=gRi(21,60), b=gRi(21,60); return numQ(a+' × '+b+' = ?', a*b, 'Break each number into tens and ones, multiply the four pieces, and add them together. Answer <b>'+(a*b)+'</b>.', 'mul-split'); }
    const a=gRi(101,399), b=gRi(21,49);
    return numQ(a+' × '+b+' = ?', a*b, 'Break '+b+' into tens and ones: '+a+' × '+Math.floor(b/10)*10+' = '+(a*Math.floor(b/10)*10)+', '+a+' × '+(b%10)+' = '+(a*(b%10))+'. Add: <b>'+(a*b)+'</b>.', 'mul-split');
  }
},
{
  id:'div', name:'Division', icon:'➗', ages:'8–11',
  blurb:'Sharing equally, remainders, and backwards times tables.',
  gen(lv){
    if(lv===1){ const b=gPick([2,5,10]), a=gRi(2,10); return numQ((a*b)+' ÷ '+b+' = ?', a, (a*b)+' ÷ '+b+' asks: what times '+b+' makes '+(a*b)+'? '+a+' × '+b+' = '+(a*b)+', so the answer is <b>'+a+'</b>.', 'div-backwards'); }
    if(lv===2){ const b=gRi(2,5), a=gRi(2,9); return numQ((a*b)+' ÷ '+b+' = ?', a, 'Share '+(a*b)+' into groups of '+b+'. How many groups fit? <b>'+a+'</b>. Check: '+a+' × '+b+' = '+(a*b)+'.', 'div-groups'); }
    if(lv===3){ const b=gRi(2,10), a=gRi(2,10); return numQ((a*b)+' ÷ '+b+' = ?', a, 'Turn it into a times-table fact: '+b+' × ? = '+(a*b)+'. The answer is <b>'+a+'</b>.', 'div-backwards'); }
    if(lv===4){ const b=gRi(3,9), a=gRi(3,12); return numQ((a*b)+' ÷ '+b+' = ?', a, 'What times '+b+' gives '+(a*b)+'? Count up in '+b+'s: '+Array.from({length:a},(_,i)=>b*(i+1)).join(', ')+'. That is '+a+' steps → <b>'+a+'</b>.', 'div-backwards'); }
    if(lv===5){ const b=gRi(3,9), a=gRi(11,30); return numQ((a*b)+' ÷ '+b+' = ?', a, 'Split '+(a*b)+' into easy parts. '+b+' × 10 = '+(b*10)+', and there is '+(a*b-b*10)+' left, which is '+b+' × '+(a-10)+'. So 10 + '+(a-10)+' = <b>'+a+'</b>.', 'div-backwards'); }
    if(lv===6){ const b=gRi(3,9), a=gRi(4,12), r=gRi(1,b-1); return numQ((a*b+r)+' ÷ '+b+' = ? <span class="gq-note">(answer as "q r remainder")</span>', a+' r '+r, b+' goes into '+(a*b+r)+' '+a+' times ('+(a*b)+'), and '+(a*b+r-a*b)+' is left over. Answer: <b>'+a+' remainder '+r+'</b>.', 'div-remainder'); }
    if(lv===7){ const b=gRi(3,9), a=gRi(31,120); return numQ((a*b)+' ÷ '+b+' = ?', a, 'Long division: how many '+b+'s fit in '+(a*b)+'? Break it into hundreds, tens and ones and divide each. Answer <b>'+a+'</b>.', 'div-backwards'); }
    if(lv===8){ const b=gRi(4,9), a=gRi(21,60), r=gRi(1,b-1); return numQ((a*b+r)+' ÷ '+b+' = ? <span class="gq-note">(answer as "q r remainder")</span>', a+' r '+r, b+' × '+a+' = '+(a*b)+', and '+(a*b+r)+' − '+(a*b)+' = '+(a*b+r-a*b)+'. Answer: <b>'+a+' remainder '+r+'</b>.', 'div-remainder'); }
    if(lv===9){ const b=gRi(11,25), a=gRi(4,20); return numQ((a*b)+' ÷ '+b+' = ?', a, 'Estimate first: '+b+' is about '+Math.round(b/10)*10+', so the answer is near '+(a*b)+' ÷ '+(Math.round(b/10)*10)+'. Then check by multiplying back. Answer <b>'+a+'</b>.', 'div-backwards'); }
    const b=gRi(3,9), a=gRi(4,12);
    return numQ('? × '+b+' = '+(a*b)+'   — what is the missing factor?', a, 'A missing factor is just division: '+(a*b)+' ÷ '+b+' = <b>'+a+'</b>. Multiplication and division undo each other.', 'div-backwards');
  }
},
{
  id:'frac', name:'Fractions', icon:'🍕', ages:'8–12',
  blurb:'Parts of a whole, comparing, adding, simplifying.',
  gen(lv){
    if(lv===1){ const d=gPick([2,4,8]); const d2=d*2; return choiceQ('Which is bigger: <b>1/'+d+'</b> or <b>1/'+d2+'</b>?', '1/'+d, ['1/'+d,'1/'+d2], 'More slices means smaller slices. Cutting the same pizza into '+d2+' pieces instead of '+d+' makes each piece smaller, so 1/'+d+' is bigger.', 'frac-bigger'); }
    if(lv===2){ const d=gRi(3,9), n=gRi(1,d-1); return numQ('In the fraction <b>'+n+'/'+d+'</b>, what is the <b>bottom</b> number?', d, 'The bottom number tells you how many equal pieces the whole was cut into. Here it is <b>'+d+'</b>.', 'frac-meaning'); }
    if(lv===3){ const d=gRi(4,10), a=gRi(1,d-2), b=gRi(1,d-a); return numQ(a+'/'+d+' + '+b+'/'+d+' = ? <span class="gq-note">(like "3/7")</span>', (a+b)+'/'+d, 'The pieces are the same size, so just add the tops: '+a+' + '+b+' = '+(a+b)+'. The bottom stays '+d+'. Answer <b>'+(a+b)+'/'+d+'</b>.', 'frac-same'); }
    if(lv===4){ const d=gRi(4,10), a=gRi(3,d-1), b=gRi(1,a-1); return numQ(a+'/'+d+' − '+b+'/'+d+' = ? <span class="gq-note">(like "3/7")</span>', (a-b)+'/'+d, 'Same size pieces, so subtract the tops: '+a+' − '+b+' = '+(a-b)+'. The bottom stays '+d+'. Answer <b>'+(a-b)+'/'+d+'</b>.', 'frac-same'); }
    if(lv===5){ const k=gRi(2,5), d=gRi(2,6), n=gRi(1,d-1); return numQ('Simplify <b>'+(n*k)+'/'+(d*k)+'</b> <span class="gq-note">(like "3/4")</span>', n+'/'+d, 'Divide top and bottom by the same number ('+k+'): '+(n*k)+' ÷ '+k+' = '+n+', '+(d*k)+' ÷ '+k+' = '+d+'. So <b>'+n+'/'+d+'</b>.', 'frac-simplify'); }
    if(lv===6){ const d=gRi(2,6), k=gRi(2,5), n=gRi(1,d-1); return numQ('1/'+d+' = ?/'+(d*k)+'   — what is the missing top number?', n===1?k:k, 'Multiply top and bottom by '+k+': 1 × '+k+' = '+k+', '+d+' × '+k+' = '+(d*k)+'. So <b>'+k+'/'+(d*k)+'</b>.', 'frac-equiv'); }
    if(lv===7){ const d=gRi(2,5), d2=d*2, a=gRi(1,d-1), b=gRi(1,Math.max(1,d2-a*2)); const num=a*2+b, den=d2; return numQ(a+'/'+d+' + '+b+'/'+d2+' = ? <span class="gq-note">(like "5/8")</span>', num+'/'+den, 'Make the bottoms match: '+a+'/'+d+' = '+(a*2)+'/'+d2+' (top and bottom both times '+2+'). Now the pieces are the same size, so add the tops: '+(a*2)+' + '+b+' = '+num+'. Answer <b>'+num+'/'+den+'</b>.', 'frac-equiv'); }
    if(lv===8){ const d=gRi(5,9); let a=gRi(1,4), b=gRi(1,4); if(a===b) b=(b%4)+1; return choiceQ('Which is bigger: <b>'+a+'/'+d+'</b> or <b>'+b+'/'+d+'</b>?', Math.max(a,b)+'/'+d, [a+'/'+d, b+'/'+d], 'Same bottom number means the pieces are the same size — so the one with more pieces is bigger. '+Math.max(a,b)+'/'+d+' has more pieces.', 'frac-same'); }
    if(lv===9){ const d1=gPick([2,3,4]), d2=gPick([5,6,8]); const num=1*d2+1*d1, den=d1*d2; return numQ('1/'+d1+' + 1/'+d2+' = ? <span class="gq-note">(like "5/8")</span>', num+'/'+den, 'Find a common bottom by multiplying them: '+d1+' × '+d2+' = '+den+'. 1/'+d1+' = '+d2+'/'+den+', 1/'+d2+' = '+d1+'/'+den+'. Add the tops: <b>'+num+'/'+den+'</b>.', 'frac-equiv'); }
    const d=gPick([2,3,4,5]), n=gRi(1,d-1), whole=gRi(2,6)*d;
    return numQ(n+'/'+d+' of '+whole+' = ?', n*whole/d, 'Bottom first, then top: '+whole+' ÷ '+d+' = '+(whole/d)+', then × '+n+' = <b>'+(n*whole/d)+'</b>.', 'frac-of');
  }
},
{
  id:'dec', name:'Decimals & Money', icon:'💵', ages:'9–12',
  blurb:'Tenths, hundredths, money, rounding, percent.',
  gen(lv){
    if(lv===1){
      const cents=gRi(105,989), tot=cents+100;
      const show='$'+Math.floor(cents/100)+'.'+String(cents%100).padStart(2,'0');
      return numQ(show+' + $1.00 = ? <span class="gq-note">(answer in dollars, like "12.30")</span>', (tot/100).toFixed(2),
        'Cents are hundredths. Add the dollars: '+Math.floor(cents/100)+' + 1 = '+(Math.floor(cents/100)+1)+'. Keep the cents ('+String(cents%100).padStart(2,'0')+'). Total <b>$'+(tot/100).toFixed(2)+'</b>.', 'dec-money');
    }
    if(lv===2){ const d=gPick([2,4,5,10]); return choiceQ('Which fraction equals <b>0.'+(d===2?'5':d===4?'25':d===5?'2':'1')+'</b>?', '1/'+d, ['1/'+d,'1/'+(d+1),'1/'+(d*2)], '0.'+(d===2?'5':d===4?'25':d===5?'2':'1')+' is a decimal, which is a fraction in disguise. '+(d===2?'0.5 = 5/10 = 1/2':d===4?'0.25 = 25/100 = 1/4':d===5?'0.2 = 2/10 = 1/5':'0.1 = 1/10'), 'dec-point'); }
    if(lv===3){ const a=gRi(1,9)/10, b=gRi(1,9)/100; return choiceQ('Which is bigger: <b>'+a.toFixed(1)+'</b> or <b>'+b.toFixed(2)+'</b>?', a.toFixed(1), [a.toFixed(1), b.toFixed(2)], 'Line them up by place value. '+a.toFixed(1)+' is '+(a*10)+' hundredths; '+b.toFixed(2)+' is '+(b*100)+' hundredths. '+(a>b?a.toFixed(1):b.toFixed(2))+' is bigger.', 'dec-point'); }
    if(lv===4){ const a=gRi(1,9)/10, b=gRi(1,9)/10; const s=Math.round((a+b)*100)/100; return numQ(a.toFixed(1)+' + '+b.toFixed(1)+' = ?', s.toFixed(1), 'Line up the decimal points and add: '+(a*10)+' tenths + '+(b*10)+' tenths = '+((a*10)+(b*10))+' tenths = <b>'+s.toFixed(1)+'</b>.', 'dec-lineup'); }
    if(lv===5){ const a=gRi(2,9)/10, b=gRi(1,9)/100; const s=Math.round((a-b)*100)/100; return numQ(a.toFixed(1)+' − '+b.toFixed(2)+' = ?', s.toFixed(2), 'Give them the same number of places: '+a.toFixed(1)+' = '+a.toFixed(2)+'. Then subtract: '+a.toFixed(2)+' − '+b.toFixed(2)+' = <b>'+s.toFixed(2)+'</b>.', 'dec-lineup'); }
    if(lv===6){ const p=gRi(1,9)*10+gRi(1,9), q=gRi(1,9)*10+gRi(1,9); const tot=(p+q)/100; return numQ('You buy two things: $'+(p/100).toFixed(2)+' and $'+(q/100).toFixed(2)+'. What is the total? <span class="gq-note">(like "12.30")</span>', tot.toFixed(2), 'Add the cents: '+(p%100)+' + '+(q%100)+' = '+(p%100+q%100)+' cents. Add the dollars: '+Math.floor(p/100)+' + '+Math.floor(q/100)+'. Total <b>$'+tot.toFixed(2)+'</b>.', 'dec-money'); }
    if(lv===7){ const a=gRi(11,99)/10, b=gRi(2,9); const s=Math.round(a*b*10)/10; return numQ(a.toFixed(1)+' × '+b+' = ?', s.toFixed(1), 'Ignore the point first: '+(a*10)+' × '+b+' = '+((a*10)*b)+'. Now put the point back one place (because '+a.toFixed(1)+' has one decimal place): <b>'+s.toFixed(1)+'</b>.', 'dec-point'); }
    if(lv===8){ const a=gRi(1,9)/10, b=gRi(1,9)/100; const n=Math.round((a+b)*10)/10; return numQ('Round '+((a+b)).toFixed(2)+' to the nearest <b>tenth</b>.', n.toFixed(1), 'Look at the hundredths digit: '+((a+b)).toFixed(2)+'. If it is 5 or more, round the tenth up. Answer <b>'+n.toFixed(1)+'</b>.', 'dec-round'); }
    if(lv===9){ const p=gPick([10,25,50]), n=gPick([20,40,60,80,100,200]); return numQ(p+'% of '+n+' = ?', p*n/100, 'Percent means out of a hundred. '+p+'% is '+p+'/100. '+(p===10?'Divide by 10.':p===25?'Divide by 4.':p===50?'Halve it.':'')+' '+n+' → <b>'+(p*n/100)+'</b>.', 'dec-percent'); }
    const p=gPick([5,15,20,30,40,60,75]), n=gPick([20,40,60,80,120,200]);
    return numQ(p+'% of '+n+' = ?', p*n/100, 'Turn the percent into a fraction of a hundred: '+p+'/100 × '+n+'. Divide '+n+' by 100 first, then multiply by '+p+': '+(n/100)+' × '+p+' = <b>'+(p*n/100)+'</b>.', 'dec-percent');
  }
},
{
  id:'neg', name:'Negative Numbers', icon:'🌡️', ages:'10–13',
  blurb:'Below zero: temperature, depth, debt, the number line.',
  gen(lv){
    if(lv===1){ const a=gRi(2,9), b=gRi(2,9); if(a===b) return this.gen(1); return choiceQ('Which is colder: <b>−'+a+'°</b> or <b>−'+b+'°</b>?', '-'+Math.max(a,b)+'°', ['-'+a+'°','-'+b+'°'], 'Below zero, further from zero is colder. −'+Math.max(a,b)+' is further left on the number line, so it is colder.', 'neg-line'); }
    if(lv===2){ const a=gRi(2,5), b=gRi(6,12); return choiceQ('Which is <b>smaller</b>: <b>−'+b+'</b> or <b>−'+a+'</b>?', '-'+b, ['-'+b,'-'+a], 'Smaller means further left. −'+b+' is further left than −'+a+', so −'+b+' is smaller.', 'neg-line'); }
    if(lv===3){ const a=gRi(2,9), b=gRi(1,9); return numQ('−'+a+' + '+b+' = ?', b-a, 'Start at −'+a+' and walk '+b+' steps right: '+Array.from({length:b},(_,i)=>-a+i+1).join(', ')+'. You land on <b>'+(b-a)+'</b>.', 'neg-add'); }
    if(lv===4){ const a=gRi(1,6), b=gRi(a+1,9); return numQ(a+' − '+b+' = ?', a-b, 'Start at '+a+' and walk '+b+' steps left. You cross zero and land on <b>'+(a-b)+'</b>.', 'neg-sub'); }
    if(lv===5){ const a=gRi(3,9), b=gRi(1,a-1); return numQ('−'+a+' + '+b+' = ?', b-a, 'Walk right from −'+a+' by '+b+' steps. Answer <b>'+(b-a)+'</b>.', 'neg-add'); }
    if(lv===6){ const a=gRi(3,12), b=gRi(a+1,20); return numQ('−'+a+' + '+b+' = ?', b-a, 'You are '+a+' below zero and adding '+b+'. You pass zero and end up '+(b-a)+' above it. Answer <b>'+(b-a)+'</b>.', 'neg-add'); }
    if(lv===7){ const a=gRi(1,9), b=gRi(a+1,15); return numQ(a+' − '+b+' = ?', a-b, 'Start at '+a+', walk left '+b+' steps. '+a+' − '+a+' = 0, then '+(b-a)+' more steps left → <b>'+(a-b)+'</b>.', 'neg-sub'); }
    if(lv===8){ const a=gRi(2,9), b=gRi(2,9); return numQ('−'+a+' × '+b+' = ?', -(a*b), 'A negative times a positive is negative: '+(a*b)+' with a minus sign → <b>−'+(a*b)+'</b>. Different signs give a negative answer.', 'neg-mul'); }
    if(lv===9){ const a=gRi(2,9), b=gRi(2,9); return numQ('−'+a+' × −'+b+' = ?', a*b, 'Two negatives make a positive: −'+a+' × −'+b+' = <b>'+(a*b)+'</b>. Same signs give a positive answer.', 'neg-mul'); }
    const a=gRi(2,9), b=gRi(2,9);
    return numQ('−'+(a*b)+' ÷ '+b+' = ?', -a, 'Divide the numbers first: '+(a*b)+' ÷ '+b+' = '+a+'. Now the sign: negative ÷ positive = negative → <b>−'+a+'</b>.', 'neg-mul');
  }
},
{
  id:'order', name:'Order of Operations', icon:'🧮', ages:'10–13',
  blurb:'Which operation goes first, and why it matters.',
  gen(lv){
    if(lv===1){ const a=gRi(2,9), b=gRi(2,5), c=gRi(2,5); return numQ(a+' + '+b+' × '+c+' = ?', a+b*c, 'Multiply first: '+b+' × '+c+' = '+(b*c)+'. Then add: '+a+' + '+(b*c)+' = <b>'+(a+b*c)+'</b>. Multiplication is stronger than addition.', 'order-pemdas'); }
    if(lv===2){ const a=gRi(2,5), b=gRi(2,5), c=gRi(2,9); return numQ(a+' × '+b+' + '+c+' = ?', a*b+c, 'Multiply first: '+a+' × '+b+' = '+(a*b)+'. Then add '+c+': <b>'+(a*b+c)+'</b>.', 'order-pemdas'); }
    if(lv===3){ const a=gRi(2,9), b=gRi(2,9), c=gRi(2,5); return numQ('('+a+' + '+b+') × '+c+' = ?', (a+b)*c, 'Brackets first: '+a+' + '+b+' = '+(a+b)+'. Then multiply: '+(a+b)+' × '+c+' = <b>'+((a+b)*c)+'</b>.', 'order-parens'); }
    if(lv===4){ const a=gRi(2,9), b=gRi(2,5), c=gRi(2,5), d=gRi(1,5); return numQ(a+' + '+b+' × '+c+' − '+d+' = ?', a+b*c-d, 'Multiply first ('+b+' × '+c+' = '+(b*c)+'), then work left to right: '+a+' + '+(b*c)+' = '+(a+b*c)+', then − '+d+' = <b>'+(a+b*c-d)+'</b>.', 'order-pemdas'); }
    if(lv===5){ const a=gRi(2,6), b=gRi(2,9), c=gRi(2,9); return numQ(a+' × ('+b+' + '+c+') = ?', a*(b+c), 'Brackets first: '+b+' + '+c+' = '+(b+c)+'. Then multiply: '+a+' × '+(b+c)+' = <b>'+(a*(b+c))+'</b>.', 'order-parens'); }
    if(lv===6){ const b=gRi(2,9), c=gRi(2,9), a=gRi(2,6); return numQ((b*c)+' ÷ '+b+' + '+a+' = ?', c+a, 'Divide first: '+(b*c)+' ÷ '+b+' = '+c+'. Then add '+a+': <b>'+(c+a)+'</b>.', 'order-pemdas'); }
    if(lv===7){ const c=gRi(2,5), k=gRi(2,5), b=c*k, a=gRi(2,9), d=gRi(2,5); return numQ(a+' + '+b+' ÷ '+c+' × '+d+' = ?', a+k*d, 'Divide and multiply left to right first: '+b+' ÷ '+c+' = '+k+', then × '+d+' = '+(k*d)+'. Then add '+a+': <b>'+(a+k*d)+'</b>.', 'order-order'); }
    if(lv===8){ const c=gRi(2,6), k=gRi(2,9), sum=c*k, a=gRi(1,sum-1), b=sum-a; return numQ('('+a+' + '+b+') ÷ '+c+' = ?', k, 'Brackets first: '+a+' + '+b+' = '+sum+'. Then divide by '+c+': '+sum+' ÷ '+c+' = <b>'+k+'</b>.', 'order-parens'); }
    if(lv===9){ const a=gRi(2,9), b=gRi(2,9); return numQ(a+'² + '+b+' = ?', a*a+b, 'The exponent goes before the addition: '+a+'² means '+a+' × '+a+' = '+(a*a)+'. Then add '+b+': <b>'+(a*a+b)+'</b>.', 'order-order'); }
    const a=gRi(2,5), b=gRi(2,5), c=gRi(2,9), d=gRi(2,5);
    return numQ('('+a+' + '+b+') × '+c+' − '+d+'² = ?', (a+b)*c-d*d, 'Brackets: '+a+' + '+b+' = '+(a+b)+'. Exponent: '+d+'² = '+(d*d)+'. Multiply: '+(a+b)+' × '+c+' = '+((a+b)*c)+'. Subtract: '+((a+b)*c)+' − '+(d*d)+' = <b>'+((a+b)*c-d*d)+'</b>.', 'order-order');
  }
},
{
  id:'prealg', name:'Pre-Algebra', icon:'🔤', ages:'11–14',
  blurb:'Solve for x. A balance scale with a letter on it.',
  gen(lv){
    if(lv===1){ const x=gRi(2,12), a=gRi(2,9); return numQ('x + '+a+' = '+(x+a)+'   — what is x?', x, 'Take '+a+' off both sides to keep the balance: x = '+(x+a)+' − '+a+' = <b>'+x+'</b>.', 'prealg-balance'); }
    if(lv===2){ const x=gRi(3,15), a=gRi(2,9); return numQ('x − '+a+' = '+(x-a)+'   — what is x?', x, 'Add '+a+' to both sides: x = '+(x-a)+' + '+a+' = <b>'+x+'</b>.', 'prealg-balance'); }
    if(lv===3){ const a=gRi(2,9), x=gRi(2,12); return numQ(a+'x = '+(a*x)+'   — what is x?', x, 'x is multiplied by '+a+', so divide both sides by '+a+': x = '+(a*x)+' ÷ '+a+' = <b>'+x+'</b>.', 'prealg-undo'); }
    if(lv===4){ const a=gRi(2,9), x=gRi(2,12); return numQ('x ÷ '+a+' = '+x+'   — what is x?', a*x, 'x was divided by '+a+', so multiply both sides by '+a+': x = '+x+' × '+a+' = <b>'+(a*x)+'</b>.', 'prealg-undo'); }
    if(lv===5){ const x=gRi(3,12), a=gRi(2,9), c=gRi(1,9); return numQ('x + '+a+' = '+c+' + '+(x+a-c)+'   — what is x?', x, 'First add the right side: '+c+' + '+(x+a-c)+' = '+(x+a)+'. Now it is x + '+a+' = '+(x+a)+', so x = <b>'+x+'</b>.', 'prealg-balance'); }
    if(lv===6){ const a=gRi(2,9), x=gRi(2,15); return numQ(a+'x = '+(a*x)+'   — what is x?', x, 'Divide both sides by '+a+': '+(a*x)+' ÷ '+a+' = <b>'+x+'</b>.', 'prealg-undo'); }
    if(lv===7){ const a=gRi(2,9), b=gRi(2,9), x=gRi(2,12); return numQ(a+'x + '+b+' = '+(a*x+b)+'   — what is x?', x, 'Undo the addition first: '+(a*x+b)+' − '+b+' = '+(a*x)+'. Then divide by '+a+': '+(a*x)+' ÷ '+a+' = <b>'+x+'</b>.', 'prealg-undo'); }
    if(lv===8){ const a=gRi(2,9), b=gRi(2,9), x=gRi(3,12); return numQ(a+'x − '+b+' = '+(a*x-b)+'   — what is x?', x, 'Add '+b+' to both sides: '+(a*x-b)+' + '+b+' = '+(a*x)+'. Then divide by '+a+': <b>'+x+'</b>.', 'prealg-undo'); }
    if(lv===9){ const a=gRi(2,5), b=gRi(1,9), x=gRi(2,12); return numQ('x/'+a+' + '+b+' = '+(x/a+b)+'   — what is x?', x, 'Subtract '+b+' from both sides: '+(x/a+b)+' − '+b+' = '+(x/a)+'. Then multiply by '+a+': '+(x/a)+' × '+a+' = <b>'+x+'</b>.', 'prealg-undo'); }
    const x=gRi(2,10), a=gRi(2,5), b=gRi(1,9);
    return numQ(a+'x + '+b+' = x + '+(x*(a-1)+b)+'   — what is x?', x, 'Collect the x terms on one side: '+a+'x − x = '+(a-1)+'x. So '+(a-1)+'x + '+b+' = '+(x*(a-1)+b)+'. Take '+b+' off both sides: '+(a-1)+'x = '+(x*(a-1))+'. Divide by '+(a-1)+': x = <b>'+x+'</b>.', 'prealg-both');
  }
}
];
const GAME_SKILLS_BY_ID = {};
GAME_SKILLS.forEach(function(s){ GAME_SKILLS_BY_ID[s.id] = s; });

/* ============================================================
 * THE SHELF — every game, tagged to a curriculum base
 * status: 'play' = built and playable, 'soon' = on the bench
 * ============================================================ */
const GAMES = [
  { id:'number-forge', title:'Number Forge', icon:'⚒️', subject:'Math', curriculum:'Colorado Math',
    ages:'5–14', builtBy:'built with the family', status:'play', skillIds:['count','add','sub','mul','div','frac','dec','neg','order','prealg'],
    blurb:'Ten skills, ten levels each. The game watches how you do and moves you up when you are ready. Miss twice and it teaches you the trick — then you try again. Collect the nuggets.' },

  { id:'word-anvil', title:'Word Anvil', icon:'📖', subject:'Reading & Spelling', curriculum:'Colorado Reading, Writing & Communicating',
    ages:'5–12', builtBy:'on the bench', status:'soon',
    blurb:'Sight words, phonics, spelling patterns, and reading comprehension — built from the family\'s own word lists.' },
  { id:'cursive-trail', title:'Cursive Trail', icon:'✍️', subject:'Handwriting', curriculum:'Extracurricular',
    ages:'6–12', builtBy:'on the bench', status:'soon',
    blurb:'Letter formation, joins, and fluency — the cursive hand, taught stroke by stroke.' },
  { id:'key-quest', title:'Key Quest', icon:'⌨️', subject:'Typing', curriculum:'Extracurricular',
    ages:'7–14', builtBy:'on the bench', status:'soon',
    blurb:'Home-row to full touch typing: speed, accuracy, and no looking down.' },
  { id:'sign-circle', title:'Sign Circle', icon:'🤟', subject:'Sign Language', curriculum:'Extracurricular',
    ages:'5–99', builtBy:'on the bench', status:'soon',
    blurb:'The manual alphabet and everyday signs, learned by matching and recall.' },
  { id:'world-map', title:'World Map', icon:'🗺️', subject:'Geography', curriculum:'Colorado Social Studies',
    ages:'6–13', builtBy:'on the bench', status:'soon',
    blurb:'Continents, countries, capitals, and the places the archive keeps pointing at.' },
  { id:'field-guide', title:'Field Guide', icon:'🌿', subject:'Science & Nature', curriculum:'Colorado Science',
    ages:'6–14', builtBy:'on the bench', status:'soon',
    blurb:'Plants, birds, tracks, and constellations — identification from the family\'s own sit spot.' },
  { id:'hearth-math', title:'Hearth Math', icon:'🍞', subject:'Life Skills', curriculum:'Extracurricular',
    ages:'8–14', builtBy:'on the bench', status:'soon',
    blurb:'Doubling a recipe, measuring, budgeting, and change-making — the math of running a house.' }
];

/* ============================================================
 * PROGRESS — stored on this device, per player
 * ============================================================ */
/* NOTE: this file loads in <head>, BEFORE the inline script that defines
 * safeGet/safeSet. So nothing here may call them at load time — the state
 * is hydrated lazily on first use instead. (Getting this wrong aborts the
 * whole module and leaves every `let` below in the temporal dead zone.) */
const GAME_KEY = 'rpg_games';
let gameState = { who:null, players:{} };
let gameLoaded = false;
function gLoad(){
  if (gameLoaded) return;
  gameLoaded = true;
  try {
    if (typeof safeGet !== 'function') return;
    const raw = safeGet(GAME_KEY, null);
    if (raw && typeof raw === 'object') {
      gameState = raw;
      if (!gameState.players) gameState.players = {};
    }
  } catch(e) {}
}
function gSave(){
  try { if (typeof safeSet === 'function') safeSet(GAME_KEY, gameState); } catch(e) {}
}
function gProfile(who){
  gLoad();
  const name = who || gameState.who || 'Family';
  if (!gameState.players[name]) {
    gameState.players[name] = { skills:{}, teaching:0, expression:0, nuggets:[], rounds:0, answered:0, correct:0, bestStreak:0 };
  }
  const p = gameState.players[name];
  if (!p.skills) p.skills = {};
  if (!p.nuggets) p.nuggets = [];
  return p;
}
function gSkillRec(p, skillId){
  if (!p.skills[skillId]) p.skills[skillId] = { level:1, best:1, correct:0, wrong:0 };
  return p.skills[skillId];
}
function gWho(){ gLoad(); return gameState.who || 'Family'; }
function gPlayerNames(){
  gLoad();
  const names = [];
  try { if (typeof players !== 'undefined' && players && players.length) players.forEach(function(p){ if (p && p.name) names.push(p.name); }); } catch(e) {}
  if (!names.length) names.push('Family');
  // keep whoever is currently playing in the list, even if the roster changed
  if (gameState.who && names.indexOf(gameState.who) < 0) names.push(gameState.who);
  return names;
}

/* ============================================================
 * VIEW STATE
 * ============================================================ */
let gameView = 'shelf';      // shelf | play | summary
let gameSubject = 'all';
let session = null;

const ROUND_LEN = 10;
const UP_STREAK = 4;         // right answers in a row to move up a level

/* ============================================================
 * RENDER — the screen
 * ============================================================ */
function renderGames(){
  gLoad();
  const el = document.getElementById('screen-games');
  if (!el) return;
  if (gameView === 'play') { el.innerHTML = gPlayHTML(); return; }
  if (gameView === 'summary') { el.innerHTML = gSummaryHTML(); return; }
  el.innerHTML = gShelfHTML();
}

function gPointsBar(){
  const p = gProfile();
  return '<div class="gs-points">' +
    '<span class="gs-pt teach">📖 <b>'+p.teaching+'</b> teaching</span>' +
    '<span class="gs-pt expr">✨ <b>'+p.expression+'</b> expression</span>' +
    '<span class="gs-pt nug">🪙 <b>'+p.nuggets.length+'</b> nuggets</span>' +
  '</div>';
}

function gShelfHTML(){
  const p = gProfile();
  // who is playing
  const names = gPlayerNames();
  const whoRow = '<div class="gs-who">' +
    '<span class="gs-who-label">Playing as</span>' +
    names.map(function(n){
      return '<button class="gs-chip'+(n===gWho()?' active':'')+'" onclick="gameSetWho(\''+gEsc(n).replace(/'/g,"\\'")+'\')">'+gEsc(n)+'</button>';
    }).join('') +
  '</div>';

  // subject filter
  const subjects = ['all'];
  GAMES.forEach(function(g){ if (subjects.indexOf(g.subject) < 0) subjects.push(g.subject); });
  const filterRow = '<div class="gs-filter">' + subjects.map(function(s){
    return '<button class="gs-chip'+(s===gameSubject?' active':'')+'" onclick="gameSetSubject(\''+gEsc(s).replace(/'/g,"\\'")+'\')">'+(s==='all'?'All':gEsc(s))+'</button>';
  }).join('') + '</div>';

  const list = GAMES.filter(function(g){ return gameSubject==='all' || g.subject===gameSubject; });
  const cards = list.map(function(g){
    const soon = g.status !== 'play';
    // mastery line for playable games
    let mastery = '';
    if (!soon && g.skillIds) {
      let lv = 0, max = g.skillIds.length * 10;
      g.skillIds.forEach(function(sid){ const r = p.skills[sid]; lv += r ? r.best : 1; });
      const pct = Math.round((lv- g.skillIds.length) / (max - g.skillIds.length) * 100);
      mastery = '<div class="gs-mastery"><div class="gs-bar"><i style="width:'+Math.max(2,pct)+'%"></i></div>' +
        '<span>'+pct+'% mastered · '+(g.skillIds.length)+' skills</span></div>';
    }
    return '<div class="gs-card'+(soon?' soon':'')+'">' +
      '<div class="gs-card-top"><span class="gs-card-icon">'+g.icon+'</span>' +
        '<div><div class="gs-card-title">'+gEsc(g.title)+'</div>' +
        '<div class="gs-card-meta">'+gEsc(g.subject)+' · ages '+gEsc(g.ages)+'</div></div>' +
        (soon?'<span class="gs-soon-tag">on the bench</span>':'') +
      '</div>' +
      '<div class="gs-card-blurb">'+gEsc(g.blurb)+'</div>' +
      '<div class="gs-card-base">📋 '+gEsc(g.curriculum)+' · <em>'+gEsc(g.builtBy)+'</em></div>' +
      mastery +
      (soon ? '<button class="gs-btn ghost" disabled>Coming soon</button>'
            : '<button class="gs-btn" onclick="gameOpen(\''+g.id+'\')">▶ Play</button>') +
    '</div>';
  }).join('');

  const nugShelf = p.nuggets.length ? gNuggetShelfHTML(p) : '';

  return '<h2 class="gs-title">🎮 The Games Shelf</h2>' +
    '<p class="gs-intro">Small learning games, built by the family. Every game is tagged to a curriculum base — the ones Colorado asks you to cover, and the extras the kids want for themselves. Play them as you grow.</p>' +
    whoRow + gPointsBar() + filterRow +
    '<div class="gs-grid">' + cards + '</div>' +
    nugShelf;
}

function gNuggetShelfHTML(p){
  const owned = Object.keys(NUGGETS).filter(function(k){ return p.nuggets.indexOf(k) >= 0; });
  if (!owned.length) return '';
  return '<div class="gs-nugwrap"><h3 class="gs-sub">🪙 Your Nugget Shelf <span class="gs-dim">('+owned.length+' of '+Object.keys(NUGGETS).length+')</span></h3>' +
    '<p class="gs-dim" style="font-size:0.78rem;margin:0 0 0.5rem;">Teaching assets you earned by meeting a method head-on. Tap one to read it again.</p>' +
    '<div class="gs-nuggrid">' + owned.map(function(k){
      return '<button class="gs-nug" onclick="gameShowNugget(\''+k+'\')">🪙 '+gEsc(NUGGETS[k].title)+'</button>';
    }).join('') + '</div></div>';
}

/* ============================================================
 * PLAY
 * ============================================================ */
function gameSetWho(name){
  gLoad();
  gameState.who = name; gSave(); renderGames();
}
function gameSetSubject(s){
  gameSubject = s; renderGames();
}
function gameOpen(id){
  const g = GAMES.filter(function(x){ return x.id===id; })[0];
  if (!g || g.status !== 'play') return;
  // skill picker
  const p = gProfile();
  const rows = g.skillIds.map(function(sid){
    const s = GAME_SKILLS_BY_ID[sid];
    const r = gSkillRec(p, sid);
    return '<button class="gs-skill" onclick="gameStart(\''+sid+'\')">' +
      '<span class="gs-skill-icon">'+s.icon+'</span>' +
      '<span class="gs-skill-name">'+gEsc(s.name)+'</span>' +
      '<span class="gs-skill-meta">Level '+r.level+' / 10 · best '+r.best+'</span>' +
    '</button>';
  }).join('');
  const el = document.getElementById('screen-games');
  el.innerHTML = '<div class="gs-play">' +
    '<button class="gs-back" onclick="gameBack()">← Shelf</button>' +
    '<h2 class="gs-title" style="font-size:1.15rem;">'+g.icon+' '+gEsc(g.title)+'</h2>' +
    '<p class="gs-intro" style="font-size:0.85rem;">'+gEsc(g.blurb)+'</p>' +
    gPointsBar() +
    '<h3 class="gs-sub">Pick a skill</h3>' +
    '<div class="gs-skills">'+rows+'</div>' +
    '<div class="gs-tip">💡 The game moves you up a level after '+UP_STREAK+' right in a row. Miss twice and it slows down and teaches you the trick. You can never get stuck.</div>' +
  '</div>';
}

function gameStart(skillId){
  const p = gProfile();
  const r = gSkillRec(p, skillId);
  session = {
    skillId: skillId,
    level: r.level,
    streak: 0,
    misses: 0,
    round: 0,
    roundCorrect: 0,
    roundTeaching: 0,
    roundExpression: 0,
    newNuggets: [],
    q: null,
    typed: '',
    answered: false,
    wasRight: false,
    showedHint: false,
    leveledUp: false,
    leveledDown: false
  };
  gameView = 'play';
  gNextQuestion();
  renderGames();
}

function gNextQuestion(){
  const s = GAME_SKILLS_BY_ID[session.skillId];
  session.q = s.gen(session.level);
  session.typed = '';
  session.answered = false;
  session.wasRight = false;
  session.showedHint = false;
  session.leveledUp = false;
  session.leveledDown = false;
}

function gPlayHTML(){
  if (!session) { gameView='shelf'; return gShelfHTML(); }
  const s = GAME_SKILLS_BY_ID[session.skillId];
  const p = gProfile();
  const q = session.q;

  let answerArea;
  if (q.mode === 'choice') {
    answerArea = '<div class="gs-choices">' + gShuffle(q.choices).map(function(c){
      return '<button class="gs-choice'+(session.answered && gSame(c,q.answer)?' right':'')+'" onclick="gameChoice(\''+gEsc(c).replace(/'/g,"\\'")+'\')"'+(session.answered?' disabled':'')+'>'+gEsc(c)+'</button>';
    }).join('') + '</div>';
  } else {
    answerArea = '<div class="gs-typed" id="gs-typed">'+(session.typed ? gEsc(session.typed) : '<span class="gs-ph">?</span>')+'</div>' +
      '<div class="gs-pad">' +
        [1,2,3,4,5,6,7,8,9].map(function(d){ return '<button class="gs-key" onclick="gameKey(\''+d+'\')">'+d+'</button>'; }).join('') +
        '<button class="gs-key alt" onclick="gameKey(\'-\')">−</button>' +
        '<button class="gs-key" onclick="gameKey(\'0\')">0</button>' +
        '<button class="gs-key alt" onclick="gameKey(\'del\')">⌫</button>' +
      '</div>' +
      '<button class="gs-btn wide" onclick="gameSubmit()"'+(session.answered?' disabled':'')+'>Check ✓</button>';
  }

  let feedback = '';
  if (session.answered) {
    if (session.wasRight) {
      feedback = '<div class="gs-fb right">' +
        '<div class="gs-fb-head">✓ '+gPick(['Yes!','Right.','That\'s it.','Nailed it.','Correct.'])+'</div>' +
        '<div class="gs-fb-body">'+gEsc(q.answer)+' is right.</div>' +
        (session.leveledUp ? '<div class="gs-fb-up">⬆️ Level up! You are on level '+session.level+' now.</div>' : '') +
      '</div>';
    } else {
      feedback = '<div class="gs-fb wrong">' +
        '<div class="gs-fb-head">Not quite — the answer is '+gEsc(q.answer)+'</div>' +
        '<div class="gs-fb-body">'+q.hint+'</div>' +
        (session.leveledDown ? '<div class="gs-fb-down">⬇️ Let\'s go back to level '+session.level+' for a bit — this is where the good learning happens.</div>' : '') +
      '</div>';
    }
    const nug = q.nugget && NUGGETS[q.nugget] ? NUGGETS[q.nugget] : null;
    if (nug) {
      // judge() already pushed it onto the shelf, so ask the SESSION whether
      // this one is new — checking p.nuggets here would always say "already".
      const isNew = session.newNuggets.indexOf(q.nugget) >= 0;
      feedback += '<div class="gs-nugget'+(isNew?'':' owned')+'">' +
        '<div class="gs-nug-head">🪙 '+(isNew?'New nugget — added to your shelf':'Nugget already on your shelf')+'</div>' +
        '<div class="gs-nug-title">'+gEsc(nug.title)+'</div>' +
        '<div class="gs-nug-text">'+nug.text+'</div>' +
      '</div>';
    }
    feedback += '<button class="gs-btn wide" onclick="gameNext()">'+(session.round+1 >= ROUND_LEN ? 'See how you did →' : 'Next one →')+'</button>';
  } else {
    feedback = '<div class="gs-fb hintline">' +
      (session.showedHint
        ? '<div class="gs-fb-body">'+q.hint+'</div>'
        : '<button class="gs-hintbtn" onclick="gameHint()">🤔 Show me how</button>') +
    '</div>';
  }

  return '<div class="gs-play">' +
    '<button class="gs-back" onclick="gameQuit()">← Quit</button>' +
    '<div class="gs-hud">' +
      '<span class="gs-hud-skill">'+s.icon+' '+gEsc(s.name)+'</span>' +
      '<span class="gs-hud-level">Level '+session.level+'</span>' +
    '</div>' +
    '<div class="gs-prog"><i style="width:'+Math.round(session.round/ROUND_LEN*100)+'%"></i></div>' +
    '<div class="gs-qcard'+(session.answered ? (session.wasRight?' right':' wrong') : '')+'">' +
      '<div class="gs-qprompt">'+q.prompt+'</div>' +
    '</div>' +
    answerArea + feedback +
    '<div class="gs-strip">📖 +'+session.roundTeaching+' · ✨ +'+session.roundExpression+' this round'+(session.streak>=2?' · 🔥 '+session.streak+' in a row':'')+'</div>' +
  '</div>';
}

/* ---------- input ---------- */
function gameKey(k){
  if (!session || session.answered) return;
  if (k === 'del') { session.typed = session.typed.slice(0,-1); }
  else if (k === '-') { if (session.typed.indexOf('-') < 0 && session.typed.length === 0) session.typed = '-'; }
  else { if (session.typed.length < 12) session.typed += k; }
  renderGames();
}
function gameChoice(c){
  if (!session || session.answered) return;
  session.typed = c;
  gameSubmit();
}
function gameHint(){
  if (!session || session.answered || session.showedHint) return;
  session.showedHint = true;
  // reading the method is teaching, not expression
  const p = gProfile();
  p.teaching += 2; session.roundTeaching += 2;
  gSave();
  renderGames();
}
function gameSubmit(){
  if (!session || session.answered) return;
  if (session.typed === '' || session.typed === '-') return;
  gJudge(session.typed);
}

function gJudge(given){
  const p = gProfile();
  const r = gSkillRec(p, session.skillId);
  const q = session.q;
  const right = gSame(given, q.answer);
  session.answered = true;
  session.wasRight = right;
  p.answered += 1;
  session.round += 1;

  if (right) {
    p.correct += 1;
    session.roundCorrect += 1;
    session.streak += 1;
    session.misses = 0;
    if (session.streak > p.bestStreak) p.bestStreak = session.streak;
    r.correct += 1;
    // expression: mastery
    let gain = 2;
    if (session.streak >= 3) gain += 1;
    if (session.streak >= 6) gain += 2;
    p.expression += gain; session.roundExpression += gain;
    // level up
    if (session.streak >= UP_STREAK && session.level < 10) {
      session.level += 1;
      session.streak = 0;
      session.leveledUp = true;
      p.expression += 5; session.roundExpression += 5;
      if (session.level > r.best) r.best = session.level;
      r.level = session.level;
    } else if (session.level > r.best) {
      r.best = session.level; r.level = session.level;
    }
  } else {
    session.streak = 0;
    session.misses += 1;
    r.wrong += 1;
    // teaching: meeting the method
    p.teaching += 3; session.roundTeaching += 3;
    // collect the nugget
    if (q.nugget && p.nuggets.indexOf(q.nugget) < 0) {
      p.nuggets.push(q.nugget);
      p.teaching += 5; session.roundTeaching += 5;
      session.newNuggets.push(q.nugget);
    }
    // never stuck: two misses drops a level
    if (session.misses >= 2 && session.level > 1) {
      session.level -= 1;
      session.misses = 0;
      session.leveledDown = true;
      r.level = session.level;
    }
  }
  gSave();
  renderGames();
}

function gameNext(){
  if (!session) return;
  if (session.round >= ROUND_LEN) { gameView = 'summary'; renderGames(); return; }
  gNextQuestion();
  renderGames();
}

function gameQuit(){
  session = null; gameView = 'shelf'; renderGames();
}
function gameBack(){
  session = null; gameView = 'shelf'; renderGames();
}

/* ---------- summary ---------- */
function gSummaryHTML(){
  if (!session) { gameView='shelf'; return gShelfHTML(); }
  const s = GAME_SKILLS_BY_ID[session.skillId];
  const p = gProfile();
  const r = gSkillRec(p, session.skillId);
  const pct = Math.round(session.roundCorrect / ROUND_LEN * 100);
  const verdict = pct >= 90 ? 'Forged it. 🔥' : pct >= 70 ? 'Strong round. 💪' : pct >= 50 ? 'Good work — this is where learning happens. 🌱' : 'Tough one. That is fine — you met the method, and that counts. 🌱';
  const nugList = session.newNuggets.length
    ? '<div class="gs-nugwrap"><h3 class="gs-sub">🪙 New on your shelf</h3>' + session.newNuggets.map(function(k){
        return '<div class="gs-nugget owned"><div class="gs-nug-title">'+gEsc(NUGGETS[k].title)+'</div><div class="gs-nug-text">'+NUGGETS[k].text+'</div></div>';
      }).join('') + '</div>'
    : '';
  return '<div class="gs-play">' +
    '<div class="gs-summary">' +
      '<div class="gs-summary-icon">'+s.icon+'</div>' +
      '<h2 class="gs-title" style="font-size:1.2rem;">'+session.roundCorrect+' / '+ROUND_LEN+'</h2>' +
      '<p class="gs-intro">'+verdict+'</p>' +
      '<div class="gs-summary-points">' +
        '<div class="gs-sp teach"><span>📖</span><b>+'+session.roundTeaching+'</b><em>teaching</em></div>' +
        '<div class="gs-sp expr"><span>✨</span><b>+'+session.roundExpression+'</b><em>expression</em></div>' +
      '</div>' +
      '<div class="gs-summary-line">'+gEsc(s.name)+' · now level <b>'+session.level+'</b> · your best is <b>'+r.best+'</b></div>' +
      nugList +
      '<div class="gs-summary-actions">' +
        '<button class="gs-btn" onclick="gameStart(\''+session.skillId+'\')">Play again</button>' +
        '<button class="gs-btn ghost" onclick="gameBack()">Back to the shelf</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

/* ---------- nugget reader ---------- */
function gameShowNugget(k){
  const n = NUGGETS[k];
  if (!n) return;
  const el = document.getElementById('screen-games');
  el.innerHTML = '<div class="gs-play">' +
    '<button class="gs-back" onclick="gameBack()">← Shelf</button>' +
    '<div class="gs-nugget owned" style="margin-top:1rem;">' +
      '<div class="gs-nug-head">🪙 Nugget</div>' +
      '<div class="gs-nug-title">'+gEsc(n.title)+'</div>' +
      '<div class="gs-nug-text">'+n.text+'</div>' +
    '</div>' +
  '</div>';
}
