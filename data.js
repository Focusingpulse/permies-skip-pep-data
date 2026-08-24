const VILLAGE_QUESTS = [
  {
    type: "PEP",
    biomes: ["suburb","rural"],
    name: "Gardening",
    desc: "Grow food, save seeds, and build resilient garden systems.",
    sand: [
      ["Build a Hugelkultur Bed","Build a small hugelkultur mound with mulch, seeds, and nitrogen-fixing support plants.",["Science","Math"],"🌱"],
      ["Chop and Drop","Cut back plants and leave the material in place as mulch over a garden area.",["Science","PE"],"✂️"],
      ["Ruth Stout Composting","Set up thick-mulch garden spots using organic layers and kitchen scraps.",["Science","Health"],"🪱"]
    ],
    straw: [
      ["Seed Saving","Harvest, dry, and store seed from four different plant species.",["Science","Math"],"🫘"],
      ["Build a 12 Foot Hugelkultur","Extend a hugelkultur bed to about 12 feet with logs, mulch, and soil.",["Science","Math"],"🏞️"],
      ["Encourage Volunteer Plants","Identify and protect five self-sown plants in the garden.",["Science","Geography"],"🌼"],
      ["Direct Seed Perennials","Sow perennial crops in the ground and track what comes up.",["Science","Math"],"🌿"],
      ["Make a 100 Sq Ft Polyculture Garden","Design and plant a mixed-species garden with at least 12 species.",["Science","Art"],"🧩"]
    ],
    wood: [
      ["Build a 7 x 24 Hugelkultur","Create a larger hugelkultur bed with logs, mulch, and soil.",["Science","Math"],"🛖"],
      ["Grow and Harvest 1M Calories","Plan, plant, and harvest a garden system that produces a million calories.",["Math","Science"],"🔢"],
      ["Build a Quarter Acre Food Forest","Lay out and establish a diverse food forest with multiple layers.",["Science","Geography"],"🌳"],
      ["Direct Seed 50 Each of 10 Perennial Species","Plant large seed runs for ten perennial species and track germination.",["Science","Math"],"🌾"]
    ],
    iron: [
      ["Grow and Harvest 4M Calories","Scale up a food-growing system to produce millions of calories.",["Math","Science"],"🏆"],
      ["Build a 7 x 150 Hugelkultur","Create a huge hugelkultur system with multiple beds and heavy mulch.",["Science","Math"],"🛠️"],
      ["Harvest Fruit from 12 Seed-Grown Trees","Raise and harvest fruit from a dozen trees grown from seed.",["Science","Math"],"🍎"],
      ["Build a 1 Acre Food Forest","Establish a full-acre food forest with layered plantings.",["Science","Geography"],"🌲"],
      ["Landrace Seed Saving","Save seed from 12 species over 3 generations and keep traits strong.",["Science","Math"],"🧬"]
    ]
  },
  {
    type: "PEP",
    biomes: ["suburb","rural"],
    name: "Natural Building",
    desc: "Use clay, straw, wood, and stone to build healthy shelter and finishes.",
    sand: [
      ["Make 12 Adobe Bricks","Mix, mold, and dry a small batch of adobe bricks.",["Science","Math"],"🧱"],
      ["Make Clay Paint","Mix and apply a simple clay paint finish.",["Art","Science"],"🎨"],
      ["Level a Skiddable Structure with Rocks","Use rocks to level a structure that can move on skids.",["Math","Science"],"🪨"],
      ["Make a 25 Sq Ft Shake Roof","Put together a small shake roof section.",["Math","Science"],"🏚️"],
      ["Make Whitewash","Mix and apply a whitewash finish.",["Art","Science"],"⚪"]
    ],
    straw: [
      ["Assess Clay Mixes","Test several clay, sand, and straw mixes and compare the results.",["Science","Math"],"🧪"],
      ["Build a Tiny Shed on Skids","Frame and finish a small shed that can move on skids.",["Math","Science"],"🏠"],
      ["Make a Cob Sink","Shape and finish a cob sink basin for a home or outdoor kitchen.",["Art","Science"],"🚰"],
      ["Make a Tree Stand","Build a small natural-material stand or support for a tree or sign.",["Art","Science"],"🌳"]
    ],
    wood: [
      ["Operating Window from Scratch","Build a functioning window frame and sash from scratch.",["Math","Science"],"🪟"],
      ["Straw Bale Wall of a Wofati","Create a straw bale wall section for a wofati-style structure.",["Science","Math"],"🏡"],
      ["Wattle and Daub Wall","Weave a wattle panel and daub it with clay plaster.",["Art","Science"],"🧱"],
      ["Cob Bench with Round Pole Roof","Build a bench and weather cover from natural materials.",["Art","Science"],"🪑"]
    ],
    iron: [
      ["Build a Wofati and Live in It for a Winter","Create a wofati home and live in it through winter conditions.",["Science","Math"],"🏆"]
    ]
  },
  {
    type: "PEP",
    biomes: ["rural"],
    name: "Woodland Care",
    desc: "Care for forests, firewood, fences, fungi, and living wood systems.",
    sand: [
      ["Drop a 6-8 Inch Dead Standing Tree with a Bow Saw","Safely fell a small dead standing tree using a bow saw.",["Science","PE"],"🪚"],
      ["Drop a 6-8 Inch Dead Standing Tree with a Chainsaw","Safely fell a small dead standing tree using a chainsaw with supervision.",["Science","PE"],"🪚"],
      ["Drop a 6-8 Inch Live Tree with a Bow Saw","Safely fell a small live tree using a bow saw.",["Science","PE"],"🌲"],
      ["Drop a 6-8 Inch Live Tree with a Chainsaw","Safely fell a small live tree using a chainsaw with supervision.",["Science","PE"],"🌲"],
      ["Limb 4 Trees","Remove limbs from four trees and stack the brush neatly.",["Science","PE"],"🌿"],
      ["Peel 2 Live Trees and Put Them Up to Dry","Peel two live trees and store them off the ground so they can dry.",["Science","Math"],"🪵"],
      ["Split and Stack Dead Standing Wood as Firewood","Turn dead standing wood into stacked firewood.",["Science","Math"],"🔥"],
      ["Prep 10 Junkpoles","Prepare ten straight poles for building or fencing.",["Science","Math"],"🪵"],
      ["Cleave 6 Shakes with a Froe","Split six roof shakes from straight-grained wood.",["Science","Math"],"🏚️"],
      ["Build 12 Feet of Junkpole Fence or Repair 24 Feet","Construct or repair a junkpole fence section.",["Science","Math"],"🪢"]
    ],
    straw: [
      ["Drop at Least 12 Trees 8 Inches or Larger","Safely drop a dozen medium trees.",["Science","PE"],"🌲"],
      ["One Cord of Firewood Cut and Stacked Under a Roof","Cut and stack a cord of firewood where it stays dry.",["Science","Math"],"🔥"],
      ["Make Lumber: a Dozen 2x4s, 1x4s, and 3/8x4s","Mill or plane a starter batch of lumber.",["Science","Math"],"📏"],
      ["Twig Construction: 5 Foot Tomato Cage and 8 Foot Pole Bean Trellis","Build useful plant supports from twigs and poles.",["Science","Art"],"🍅"],
      ["36 Feet of Junkpole Fence plus Gate with Latch","Build a longer junkpole fence with a working gate.",["Science","Math"],"🚪"],
      ["Plant Tree Seeds for 100 Feet of Living Fence","Sow tree seeds for a future living fence and track sprouting.",["Science","Geography"],"🌱"]
    ],
    wood: [
      ["Put Up Three Cords of Firewood","Cut, split, and stack three cords of firewood.",["Science","Math"],"🪵"],
      ["More Lumber: 8 Dozen 2x4s, 1x4s, and 3/8x4s","Produce a big batch of dimensional lumber.",["Science","Math"],"📐"],
      ["Build Six Rock Jacks from Split Logs","Make sturdy rock jacks for lifting or support.",["Science","Math"],"🪨"],
      ["120 Feet of Junkpole Fence with Good Gate and Latch","Build a long junkpole fence with a solid gate.",["Science","Math"],"🚪"],
      ["Plant 300 Black Locust Seeds","Sow black locust seed at scale and track germination.",["Science","Math"],"🌰"],
      ["Plant 300 Cleavers","Start a patch of cleavers and watch how it spreads.",["Science","Science"],"🌿"],
      ["Plant 300 Nettles","Start a patch of nettles and manage it safely.",["Science","Health"],"🍃"],
      ["Plant 60 Willows","Grow willows for future feed, fence, and basket material.",["Science","Geography"],"🌾"],
      ["Plant 40 Sweet Sap Silver Maples","Establish trees that can provide sap and shade.",["Science","Geography"],"🍁"],
      ["Plant 10 Cedar Trees","Establish a line of cedar trees for future shelter and habitat.",["Science","Geography"],"🌲"],
      ["Twig Construction: Six 5 Foot Tomato Cages and Three 8 Foot Trellises","Build a full set of garden supports from poles and twigs.",["Science","Art"],"🍅"],
      ["Plant Tree Seeds for 800 Feet of Living Fence","Sow seeds for a long future living fence.",["Science","Geography"],"🌱"],
      ["Lay 50 Feet of Living Hedge","Build a living hedge and keep it protected until established.",["Science","Geography"],"🌿"],
      ["Berm Shed 8x8x8 with 5 Foot Eave","Build a berm shed that fits the given dimensions.",["Math","Science"],"🏚️"],
      ["Gin Pole: Lift a 10 Foot Log 15 Feet Off the Ground","Use a gin pole to raise a log safely.",["Science","Math"],"🏗️"],
      ["Outdoor Mushrooms: 1 lb Each Oyster and Shiitake","Grow outdoor oyster and shiitake mushrooms.",["Science","Health"],"🍄"]
    ],
    iron: [
      ["Put Up Six Cords of Firewood","Produce and stack six cords of firewood.",["Science","Math"],"🔥"],
      ["200 2x4s, 1x4s, and 3/8x4s Lumber","Make a very large pile of dimensional lumber.",["Science","Math"],"📏"],
      ["Build 24 Rock Jacks from Split Logs","Make a heavy-duty set of rock jacks.",["Science","Math"],"🪨"],
      ["Plant Seeds to Restore Creek Bed","Seed and stabilize a large creek-bed restoration area.",["Science","Geography"],"💧"],
      ["Berm Shed: 3 Cells, 12x12x12 Each, 5 Foot Eaves","Build a multi-cell berm shed on a large scale.",["Math","Science"],"🏗️"],
      ["Build Two Skiddable Structures","Create two structures that can move on skids.",["Math","Science"],"🛷"],
      ["Gin Pole: Lift a 20 Foot Log 20 Feet Off the Ground","Lift a large log with a gin pole system.",["Science","Math"],"🏗️"],
      ["Produce 10 lbs Each Oyster and Shiitake Mushrooms","Grow a major harvest of outdoor mushrooms.",["Science","Health"],"🍄"]
    ]
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Round Wood Woodworking",
    desc: "Build useful things from logs, sticks, and branches with minimal glue and metal.",
    sand: [
      ["Carve a Spoon","Shape a usable wooden spoon from a branch or scrap wood.",["Art","Science"],"🥄"],
      ["Make a Wooden Mallet","Turn a round stick or branch into a simple mallet.",["Art","Math"],"🔨"],
      ["Build a Simple Roundwood Bench","Make a sturdy little bench from round wood and lashings.",["Art","Math"],"🪑"],
      ["Make Coat Hooks from Sticks","Create a set of hooks from sticks or small branches.",["Art","Science"],"🪝"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Tool Care",
    desc: "Keep tools sharp, clean, oiled, and repaired so they last longer.",
    sand: [
      ["Sharpen a Knife","Sharpen a kitchen or pocket knife safely.",["Science","Health"],"🔪"],
      ["Sharpen a Shovel or Hoe","Restore the edge on a digging tool.",["Science","PE"],"🪏"],
      ["Oil a Tool","Clean and oil a hand tool to prevent rust.",["Science","Health"],"🛢️"],
      ["Repair a Tool","Fix a broken tool handle, fit, or fastener.",["Science","Math"],"🔧"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["rural"],
    name: "Earthworks",
    desc: "Shape land to move water, reduce erosion, and make paths that last.",
    sand: [
      ["Build a Berm","Pile and shape soil into a small berm.",["Science","Math"],"🏞️"],
      ["Dig a Swale","Cut a shallow swale on contour to slow water.",["Science","Math"],"💧"],
      ["Build a Trail","Create a simple trail that holds up to foot traffic.",["Geography","PE"],"🥾"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Dimensional Lumber Woodworking",
    desc: "Use straight lumber and strong joinery to make practical furniture and structures.",
    sand: [
      ["Build a Birdhouse","Make a small birdhouse with clean cuts and solid assembly.",["Art","Science"],"🐦"],
      ["Make a Shelf","Build and hang a simple shelf.",["Math","Art"],"📚"],
      ["Build a Toolbox","Construct a useful toolbox from lumber.",["Math","Science"],"🧰"],
      ["Make a Stool","Build a small stool with sturdy joinery.",["Math","Art"],"🪑"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["suburb","rural"],
    name: "Rocket",
    desc: "Build wood-burning devices that save fuel and use heat very efficiently.",
    sand: [
      ["Cook a Meal on a Rocket Stove","Prepare food on a simple rocket stove or camp setup.",["Science","Health"],"🔥"],
      ["Build a Small Rocket Stove","Assemble a basic rocket stove for cooking.",["Science","Math"],"🚀"],
      ["Make a Rocket Mass Heater Model","Build a small model that shows how a rocket mass heater works.",["Science","Math"],"🌡️"],
      ["Heat Water with a Rocket Heater","Use a rocket system to heat water for a task.",["Science","Health"],"♨️"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Food Prep",
    desc: "Cook, preserve, and store food with practical kitchen skills.",
    sand: [
      ["Cook Grain 4 Ways","Prepare one grain in four different ways.",["Science","Math"],"🍚"],
      ["Preserve One Item","Preserve one food item by freezing, drying, fermenting, or canning.",["Science","Health"],"🫙"],
      ["Bread from Scratch","Bake bread from flour, water, yeast or starter, and salt.",["Math","Science"],"🍞"],
      ["Hay Box Cooking","Cook a meal in a hay box or insulated cooker.",["Science","Health"],"🥘"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Animal Care",
    desc: "Care for farm animals and wildlife habitat with kindness and observation.",
    sand: [
      ["Build a Bird Feeder or Waterer","Make a feeder or water source for birds or pollinators.",["Science","Art"],"🐦"],
      ["Create a Pollinator Habitat Patch","Plant and protect a patch that supports bees and butterflies.",["Science","Geography"],"🐝"],
      ["Clean an Animal Shelter or Coop","Clean and reset a simple animal shelter or coop area.",["Science","Health"],"🧹"],
      ["Build a Wildlife Shelter","Make a small shelter or brush pile for local wildlife.",["Science","PE"],"🪺"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Foraging",
    desc: "Find, harvest, identify, and preserve useful wild foods and medicines.",
    sand: [
      ["Identify 5 Edible Wild Plants","Learn to recognize five edible wild plants in your area.",["Science","Geography"],"🌿"],
      ["Harvest a Wild Food","Gather berries, fruit, nuts, or greens with permission and care.",["Science","Health"],"🍓"],
      ["Make a Wild Tea","Dry or steep a safe wild plant into tea.",["Science","Health"],"🍵"],
      ["Preserve a Wild Harvest","Dry, freeze, or otherwise preserve something foraged.",["Science","Math"],"🫙"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Community Living",
    desc: "Practice shared living skills that help families cooperate, host, and serve neighbors.",
    sand: [
      ["Cook for a Neighbor or Group","Prepare food for someone outside your household.",["Writing","Health"],"🍲"],
      ["Public Art","Create a piece of art meant to brighten a shared space.",["Art","Constitution"],"🎨"],
      ["Host a Workshop or Skill Share","Teach or host a simple class for others.",["Writing","Art"],"🧑‍🏫"],
      ["Organize a Swap","Coordinate a swap of goods, seeds, or skills.",["Economics","Writing"],"🤝"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Textiles",
    desc: "Mend, make, and care for clothing and fabric so it lasts longer.",
    sand: [
      ["Mend a Hole","Repair a hole in fabric using a simple stitch or patch.",["Art","Health"],"🧵"],
      ["Replace a Button","Sew a button back on or replace a missing one.",["Art","Math"],"🪡"],
      ["Hem Clothing","Shorten or finish a hem on clothing.",["Math","Art"],"👖"],
      ["Sew an Item","Make a small sewn item like a pouch, napkin, or bag.",["Art","Writing"],"🧶"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Greywater and Willow Feeders",
    desc: "Use wash water safely and grow plants that love moisture and nutrients.",
    sand: [
      ["Use Greywater-Safe Soap","Choose a soap that is safe for greywater use.",["Science","Health"],"💧"],
      ["Reuse Rinse Water on a Plant Bed","Carry rinse water to a mulch basin or plant bed.",["Science","Math"],"🌱"],
      ["Mulch a Willow Basin","Add mulch around a willow or poplar feeder area.",["Science","Geography"],"🌿"],
      ["Plant a Willow or Poplar Cutting","Start a willow or poplar cutting for future greywater use.",["Science","Geography"],"🌳"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["suburb","rural"],
    name: "Metalworking",
    desc: "Cut, shape, weld, bend, and finish metal for useful objects.",
    sand: [
      ["Hammer and Bend a Metal Hook","Shape a simple hook from flat or round stock.",["Science","Art"],"⚒️"],
      ["File and Smooth a Metal Edge","Use a file to finish and smooth a metal part.",["Science","Math"],"🔩"],
      ["Cut Simple Stock with a Hacksaw","Cut metal safely with hand tools.",["Science","PE"],"🪚"],
      ["Make a Small Bracket or Hanger","Create a useful bracket, hanger, or holder from metal.",["Science","Art"],"🧲"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Plumbing and Hot Water",
    desc: "Keep water moving safely through sinks, drains, toilets, and hot water systems.",
    sand: [
      ["Replace a Faucet Washer","Fix a drip by replacing a faucet washer.",["Science","Math"],"🚰"],
      ["Unclog a Drain","Clear a sink or shower drain with a simple tool or method.",["Science","PE"],"🪠"],
      ["Fix a Dripping Hose Connection","Stop a leak in a hose or outside water connection.",["Science","Math"],"💦"],
      ["Insulate a Hot Water Pipe","Wrap a hot water pipe or line for heat retention.",["Science","Math"],"♨️"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Electricity",
    desc: "Learn safe AC and DC basics, batteries, circuits, and solar systems.",
    sand: [
      ["Build a Battery and Bulb Circuit","Make a simple working circuit with a battery and light.",["Science","Math"],"⚡"],
      ["Replace a Lightbulb Safely","Change a lightbulb and check that the fixture works.",["Science","Health"],"💡"],
      ["Organize and Label Cords","Sort cords and label them so they are easier to use safely.",["Writing","Science"],"🔌"],
      ["Test a Battery and Read Voltage","Measure or compare battery voltage and note the result.",["Science","Math"],"🔋"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Commerce",
    desc: "Earn money, trade value, keep records, and learn how currencies move \u2014 from pocket change to the Gold Nugget vault.",
    sand: [
      ["Sell or Trade Something Homemade","Make something and trade or sell it to someone else.",["Economics","Art"],"💰"],
      ["Track a Simple Budget","Write down income and expenses for a week.",["Math","Writing"],"📒"],
      ["Offer a Service and Track the Earnings","Do a paid or traded job and record what you earned.",["Economics","Math"],"🪙"],
      ["Create a Mini Online Listing","Write a simple listing for something you made or offer.",["Writing","Economics"],"🖥️"],
      ["Meet a Foreign Currency","Discover one currency, its symbol, and the countries that use it.",["Geography","Economics"],"🌍"]
    ],
    straw: [
      ["Run a Family Currency Exchange","Trade a little pretend money between two currencies and find the total together.",["Math","Economics"],"🔄"],
      ["Start a Paper-Trading Journal","Write down one pretend trade: what you expected vs what actually happened.",["Writing","Math"],"📓"],
      ["Compare Buying Power","Ask what one common item costs in dollars, euros, and francs.",["Math","Economics"],"⚖️"],
      ["Save Toward a Tiny Goal","Tuck a little pocket money toward one small goal for a month and track it.",["Math","Economics"],"🐢"]
    ],
    wood: [
      ["Track Exchange Rates for a Week","Watch one currency pair for a week and note up, down, or sideways.",["Math","Economics"],"📈"],
      ["Run a Simulated Trade","Use a free simulator: place one paper trade with a stop-loss and log the outcome.",["Economics","Math"],"🎮"],
      ["Plan a Get-Off-the-Dollar Experiment","Design one small way your family could trade value beyond the dollar.",["Economics","Writing"],"♻️"],
      ["Host the Family Forex Game Night","Bring the family to a free simulator and run a mission night.",["Economics","Math"],"🎲"]
    ],
    iron: [
      ["Present a Family Financial Freedom Plan","Lay out the family plan for saving, exchanging, and growing value your way.",["Writing","Economics"],"🗺️"],
      ["Run a Simulated Season","Track a pretend multi-currency portfolio for a full season and log every choice.",["Economics","Math"],"📓"],
      ["Keep the Golden Rule Alive","Teach a friend or sibling: protect money first, learn second, trade third.",["Economics","Writing"],"🏅"]
    ]
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Natural Medicine",
    desc: "Learn safe, practical ways to identify and use healing plants.",
    sand: [
      ["Identify 5 Medicinal Herbs","Learn to recognize five medicinal herbs or common healing plants.",["Science","Geography"],"🌿"],
      ["Make a Simple Herbal Tea","Dry or steep a safe herb into tea.",["Science","Health"],"🍵"],
      ["Prepare a Salve or Balm","Make a simple salve, balm, or lotion bar.",["Science","Health"],"🧴"],
      ["Assemble a Family First Aid Herb Card","Write down a few herbs and what they are used for.",["Writing","Health"],"📇"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Nest",
    desc: "Keep the home clean, organized, and comfortable for daily family life.",
    sand: [
      ["Wash Dishes Without a Dishwasher","Wash dishes by hand and put them away clean.",["Health","Science"],"🍽️"],
      ["Clean an Oily Dish Without Soap","Remove grease from a dish using a low-chemical method.",["Science","Health"],"🧼"],
      ["Do Laundry by Hand","Wash clothes without a machine.",["Science","PE"],"🧺"],
      ["Make Rags from Old Clothes","Turn worn clothing into useful cleaning rags.",["Art","Economics"],"🧵"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Homesteading",
    desc: "Handle practical life skills that keep a home and family ready for real emergencies.",
    sand: [
      ["Test Smoke and CO Alarms","Check home alarms and replace batteries if needed.",["Health","Science"],"🚨"],
      ["Practice with a Fire Extinguisher","Learn how to use a fire extinguisher safely.",["Health","Science"],"🧯"],
      ["Clean Gutters Safely","Remove debris from gutters or downspouts.",["Science","PE"],"🏠"],
      ["Make an Emergency Supplies Checklist","Write a family list of emergency supplies.",["Writing","Health"],"📝"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Oddball",
    desc: "Collect weird, creative, and delightfully unexpected life experiences.",
    sand: [
      ["Build a Whimsical Invention from Scrap","Make something strange, useful, or funny from leftover materials.",["Art","Science"],"🎭"],
      ["Create a Secret Family Trail Marker","Design a hidden marker or code for a local trail or path.",["Writing","Art"],"🗺️"],
      ["Make Music from Found Objects","Create a simple instrument or sound maker from trash or scraps.",["Art","PE"],"🎶"],
      ["Design a Zero-Budget Game or Challenge","Invent a game, puzzle, or family challenge with no budget.",["Writing","Art"],"🎲"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Vitality",
    desc: "Build physical vitality with movement, rhythm, and body awareness.",
    sand: [
      ["Five Animal Exercises","Practice the Five Animal Exercises as a body-movement routine.",["PE","Health"],"🧘"],
      ["Eight Brocade Pieces","Do the Eight Brocade Pieces as a gentle exercise set.",["PE","Health"],"🧘"],
      ["Twelve Zodiac Watches","Practice the Twelve Zodiac Watches movement set.",["PE","Health"],"🕒"],
      ["Deer and Crane Exercises","Do Deer and Crane Exercises for balance and coordination.",["PE","Health"],"🦌"]
    ],
    straw: [],
    wood: [],
    iron: []
  },
  {
    type: "PEP",
    biomes: ["apartment","suburb","rural"],
    name: "Community",
    desc: "Practice social, service, and event skills that help groups thrive.",
    sand: [
      ["Cook for a Group","Prepare food for a group and clean up afterward.",["Economics","Health"],"🍲"],
      ["Public Art","Create art that can be shared with the public.",["Art","Writing"],"🎨"],
      ["Host a Workshop","Teach a simple class or skill share.",["Writing","Art"],"🧑‍🏫"],
      ["Organize a Swap","Coordinate a swap of useful goods or skills.",["Economics","Constitution"],"🤝"]
    ],
    straw: [],
    wood: [],
    iron: []
  }
];