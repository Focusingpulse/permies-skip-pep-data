/* ============================================================
 * THE VILLAGE — DIGITAL DEFENSE DOMAIN (Survival Mode, 7th)
 *
 * A family's digital preparedness: scams, phishing, voice
 * cloning, credential theft. The attack is trust exploitation
 * at machine speed, so every defense either slows the trust
 * decision down (the family code word, the call-back rule) or
 * removes the need to trust at all (two-factor, credit
 * freezes, least access, backups).
 *
 * Structure follows the house pattern exactly:
 *   - DIGITAL_DEFENSE_QUESTS: a guild in the VILLAGE_QUESTS
 *     shape (type / biomes / name / desc / sand / straw /
 *     wood / iron), pushed into VILLAGE_QUESTS at load.
 *   - SURVIVAL_DIGITAL_GUIDE: practical knowledge cards in the
 *     Water Depot shape (title / body / source).
 *   - SURVIVAL_DIGITAL_DEPOT: free, public knowledge-depot
 *     links (t / u / d).
 *   - survDigitalDepotHTML(): renderer mirroring the Water
 *     Depot cards; appended to the survival panel.
 *
 * Sourcing discipline: guidance follows public consumer and
 * cybersecurity agency practice (FTC, CISA, NIST-style
 * hygiene), written in our own words. General, not legal
 * advice.
 * ============================================================ */

const DIGITAL_DEFENSE_QUESTS = [
  {
    type: "RPG",
    biomes: ["apartment","suburb","rural"],
    name: "Digital Defense",
    desc: "Guard the family's accounts, money, and trust against scams, phishing, and voice cloning.",
    sand: [
      ["Agree on a Family Code Word","Pick a word or phrase only the family knows. Anyone asking for money, help, or secrets while claiming to be family must say it first.",["Writing","Health"],"🔑"],
      ["Test the Family Code Word","Run a practice call: one family member pretends to be in trouble, and the listener asks for the code word before helping.",["PE","Health"],"📞"],
      ["Map the Family's Public Footprint","Search your own family names the way a stranger would and list what they could learn: school, workplace, birthdays, travel dates.",["Science","Geography"],"🔍"],
      ["Spot the Fake Message Round","Collect five suspicious emails or texts and mark the tells together: odd senders, surprise urgency, gift cards, strange links.",["Science","Writing"],"🎣"],
      ["Write a Convincing Fake Phish","Each family member writes one fake urgent message, then the family hunts for its tells. Writing a scam is the fastest way to see through one.",["Writing","Science"],"🪝"],
      ["Adopt the Slow-Down Rule","Agree as a family: any surprise that demands action right now gets a pause and a call-back on a known number first. Post the rule on the fridge.",["Health","Writing"],"🐢"],
      ["Voice-Clone Listening Drill","Listen to an AI voice-clone example together and list the tells. The defense is the code word: the ear can be fooled, the word cannot.",["Science","Health"],"🗣️"],
      ["Count the Family's Important Accounts","List every account the family relies on: email, bank, school portal, utilities. This tally is the map the drills will protect.",["Math","Writing"],"📋"],
      ["Take the Password Reuse Tally","Check which family passwords are short or reused, without shaming anyone. The honest count tells you where to start.",["Math","Science"],"🔢"],
      ["Post the Call-Back Card","Write the family's known-good phone numbers, banks, school, grandparents, on one card and post it where everyone can reach it.",["Writing","Health"],"📇"]
    ],
    straw: [
      ["Passphrase Upgrade Night","Each family member upgrades one important password to a long passphrase of four or more unrelated words, with help from anyone who needs it.",["Math","Writing"],"🔐"],
      ["Set Up the Family Password Manager","Choose one password manager, move the family's important logins into it, and store the recovery kit where the adults agree it lives.",["Engineering","Math"],"🗂️"],
      ["Turn On Two-Factor Everywhere","Every family member turns on two-factor sign-in for their email and school or bank accounts, with a parent's help for kid accounts.",["Engineering","Science"],"📲"],
      ["Add a Hardware Key for the Adults","The adults register a physical security key on email and any work or code accounts, so a stolen password alone opens nothing.",["Engineering","Science"],"🛡️"],
      ["Freeze the Family Credit","Adults place a security freeze at each of the three credit bureaus and write down how to lift one when real credit is needed.",["Economics","Math"],"❄️"],
      ["Run the 3-2-1 Backup","Keep three copies of the family records and photos on two different kinds of media, with one copy stored somewhere else, and test one restore.",["Math","Engineering"],"💾"],
      ["Set Kid Accounts to Least Access","Review kids' devices and accounts: no stored payment methods, app approvals through a parent, and school-only permissions.",["Engineering","Health"],"🔒"],
      ["Write the Recovery Cheat Sheet","One page: where the backups live, where the password manager recovery kit lives, and the credit bureau contacts. The family should be able to find it in the dark.",["Writing","Engineering"],"📝"]
    ],
    wood: [
      ["Run the Monthly Security Drill","Twenty minutes, same day each month: one code-word test, one fake-message round, one backup check. Boring means it works.",["PE","Health"],"🔄"],
      ["Rotate an Exposed Secret","Practice the rotation: if a passphrase or the code word was ever shared or leaked, agree on a new one and tell only the family.",["Health","Writing"],"♻️"],
      ["Host a Scam-Pattern Briefing","Each family member brings one scam they saw this month and teaches the family the tell. Everyone presents, everyone learns.",["Writing","Science"],"🎤"],
      ["Build the Grandparents Scam Shield","The kids teach the grandparents the code word and the slow-down rule, then run one practice call together.",["Health","Writing"],"👵"],
      ["Patch the Family Devices","One evening, apply updates to phones, laptops, and the router, and check that automatic updates are on.",["Engineering","Science"],"🔧"],
      ["Restore From the Offsite Copy","Pull one folder of photos and one record back from the offsite backup. A backup that has never restored is only a rumor.",["Math","Engineering"],"💿"],
      ["Run the Friendly Family Phish","A parent sends one harmless fake message this month. Spotting it earns a point; clicking it picks the next briefing topic.",["Science","PE"],"🐟"],
      ["Help Another Family Start","Share the code-word drill and the slow-down rule with a neighbor or relative family, and help them pick their own word.",["Health","Writing"],"🤝"]
    ],
    iron: [
      ["Run the Everything-Compromised Tabletop","Talk it through: phones, email, and bank accounts all fail at once. Decide as a family who calls first: the banks, the credit bureaus, the FTC.",["Writing","Economics"],"🧯"],
      ["Write the Family Incident Playbook","One page, written before it is needed: freeze credit, call the banks, secure the email account first, then report. Every family member knows where it lives.",["Writing","Health"],"📖"],
      ["Build the Offline Communications Plan","Phones in a drawer for an evening: reach each other with the paper call-back card, a meeting spot, and one out-of-area contact.",["Geography","Writing"],"📴"],
      ["Write the Payment-Change Protocol","For any home business: a request to change payment details gets verified by phone at a known number, never inside the message that asked for the change.",["Economics","Writing"],"🏦"],
      ["Walk Through Account Recovery","Pick one account and walk through its full recovery steps as a drill, so the path is familiar instead of improvised.",["Engineering","Science"],"🛠️"],
      ["Rehearse the Report","File a practice report together at the FTC's fraud-reporting site and read through the identity-theft recovery plan, so reporting feels routine.",["Economics","Writing"],"📮"],
      ["Hold the Annual Great Rotation","Once a year: a fresh code word, a new footprint search, and a full re-run of the drill. The shield stays sharp because the family keeps using it.",["Health","PE"],"🗓️"]
    ]
  }
];

/* Register the guild exactly like the other quest data:
 * one array, one push, guarded against double-loading. */
if (typeof VILLAGE_QUESTS !== 'undefined' &&
    !VILLAGE_QUESTS.some(g => g && g.name === "Digital Defense")) {
  VILLAGE_QUESTS.push(...DIGITAL_DEFENSE_QUESTS);
}

/* ============================================================
 * DIGITAL DEFENSE DEPOT — practical knowledge, honestly sourced
 * (FTC consumer guidance / CISA & NIST-style account hygiene)
 * ============================================================ */
const SURVIVAL_DIGITAL_GUIDE = [
  {
    title: "The code word",
    body: "A word or phrase only your family knows. Anyone who calls, texts, or emails claiming to be family, or claiming to speak for one, says it first. No word, no deal: hang up and call back on a number you already have.",
    source: "FTC: verify the caller"
  },
  {
    title: "Slow down",
    body: "Surprise urgency is the scammer's favorite tool. Real emergencies survive a call back; fake ones fall apart. House rule: if it insists on right now, it can wait ten minutes.",
    source: "FTC: imposter scams"
  },
  {
    title: "The voice is not the person",
    body: "A short clip of someone's voice is enough to copy it, and copied voices sound real. Trust the code word, not the sound of a voice.",
    source: "FTC: AI voice-cloning alerts"
  },
  {
    title: "Passphrases",
    body: "Length beats cleverness. Four or more unrelated words, a different one for each account, kept in a password manager instead of a notebook or a reused favorite.",
    source: "CISA / NIST: password guidance"
  },
  {
    title: "The second key",
    body: "Turn on two-factor sign-in for email first, because email is the key that resets everything else. A code from an app or a physical key means a stolen password alone opens nothing.",
    source: "CISA: multifactor authentication"
  },
  {
    title: "The credit freeze",
    body: "Free at all three national credit bureaus, a freeze stops anyone opening new credit in your name. Lift it when you need credit, then put it back the same day.",
    source: "FTC: credit freezes"
  },
  {
    title: "3-2-1 backups",
    body: "Three copies of the family records and photos, two kinds of media, one kept somewhere else. Restore a file now and then: a backup you have never tested is a rumor.",
    source: "CISA: data backup guidance"
  },
  {
    title: "When it happens anyway",
    body: "Freeze credit, call the banks, and secure the email account first. Then report it: the FTC's fraud site takes scam reports, and its identity-theft site builds a step-by-step recovery plan.",
    source: "FTC: report and recover"
  }
];

const SURVIVAL_DIGITAL_DEPOT = [
  { t: "FTC Consumer Advice — scams and imposters", u: "https://consumer.ftc.gov/scams", d: "Official consumer guidance on imposter, emergency, and phishing scams." },
  { t: "CISA — Secure Our World", u: "https://www.cisa.gov/secure-our-world", d: "Four free habits that stop most account takeovers: strong passwords, two-factor, updates, spotting phishing." },
  { t: "FTC — report fraud", u: "https://reportfraud.ftc.gov", d: "Where the family reports scams; every report helps stop the next one." },
  { t: "FTC — identity theft recovery plan", u: "https://www.identitytheft.gov", d: "A step-by-step recovery plan if identity is stolen." },
  { t: "Annual Credit Report", u: "https://www.annualcreditreport.com", d: "The official free credit report site; freezes are placed at each bureau directly." },
  { t: "NIST — digital identity guidelines", u: "https://pages.nist.gov/800-63-4/sp800-63b.html", d: "The public standard behind modern password rules: length over tricks." }
];

/* ============================================================
 * RENDERER — mirrors the Water Depot cards, bilingual en / es
 * (fr falls back to en, like the house pattern). Appended to
 * the survival panel by survWaterDepotHTML().
 * ============================================================ */
function survDigitalDepotHTML() {
  const isEs = (typeof lang !== 'undefined' && lang === 'es');
  const escF = (typeof survEsc === 'function') ? survEsc : function (s) { return String(s); };

  const guide = SURVIVAL_DIGITAL_GUIDE.map(g => `<div class="curr-card" style="margin-bottom:0.5rem;">
    <div class="sci-head"><div class="sci-name">🛡️ ${escF(g.title)}</div><span class="math-tag">${escF(g.source)}</span></div>
    <div class="sci-row">${escF(g.body)}</div>
  </div>`).join('');

  const depot = `<div>${SURVIVAL_DIGITAL_DEPOT.map(l => `<div class="curr-box" style="margin-bottom:0.4rem;"><b><a href="${l.u}" target="_blank" style="color:var(--accent-green);">${l.t}</a></b><span style="font-size:0.82em;">${l.d}</span></div>`).join('')}</div>`;

  return `<div class="sec-title" style="margin-top:1rem;"><h2 style="font-size:1.05rem;">🛡️ ${isEs ? 'El Depósito de Defensa Digital' : 'The Digital Defense Depot'}</h2>
    <span class="sub" style="font-size:0.75rem;color:var(--text-dim);">${isEs ? 'Conocimiento práctico para la defensa digital familiar — sigue la práctica de FTC / CISA, orientativo, no consejo legal.' : 'Practical knowledge for family digital defense. Guidance follows FTC / CISA practice — general, not legal advice.'}</span></div>
    ${guide}
    ${depot}`;
}

/* ---- public API ---- */
try { window.DIGITAL_DEFENSE_QUESTS = DIGITAL_DEFENSE_QUESTS; } catch (e) {}
try { window.SURVIVAL_DIGITAL_GUIDE = SURVIVAL_DIGITAL_GUIDE; } catch (e) {}
try { window.SURVIVAL_DIGITAL_DEPOT = SURVIVAL_DIGITAL_DEPOT; } catch (e) {}
try { window.survDigitalDepotHTML = survDigitalDepotHTML; } catch (e) {}
