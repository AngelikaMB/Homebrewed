
  //cityName Input //
    var cityName = 'Placeholder Name';

 function cityNameSet() {
    if (!document.getElementById("input-city-name")) {
      cityName = 'Placeholder Name';
   } else {
  cityName = document.getElementById("input-city-name").value;
   }
 }

  //Economy generator //

let tEcon = [' fishing', ' mining', ' industry', ' agriculture', ' entertainment', ' a university', ' politics', ' lumber', ' tourism', ' artisan trade goods', ' the study of magic', ' religion', ' developing technology', ' shipwrights', ' an army\'s occupation', ' a church or temple', ' prisons', ' world-renowned healers', ' necromancy', ' zoos filled with exotic\, magical creatures', ' music', ' local military recruitment', ' hunting', ' rare mushroom collection', ' quarrying rare stone', ' funneling rare alchemical ingredients from adventurers to the black market'];

let tProsp = [' has not done well', ' is on the verge of collapse', ' has prospered', ' has thrived\, growing by the day', ' has achieved a golden age', ' has regressed into widespread poverty', ' attracts a constant stream of newcomers', ' is usually a ghost town', ' has been occupied', ' was recently annexed', ' is the home of many notable adventurers', ' is the home of many notorious adventurers', ' is constantly raided', ' boasts substantial defenses'];

function generate(array) {
  return  array[Math.floor(Math.random() * array.length)];
}

let compTownEcon;

function genSetEcon() {
  compTownEcon = `${(cityName)} has an economy based around ${generate(tEcon)} and ${generate(tProsp)}.`
   document.getElementById("pEcon").innerHTML = compTownEcon;
}

//Tabulated card section//

        var chaosContent = document.getElementById("chaoscontent");
        var neutralContent = document.getElementById("neutralcontent");
        var orderContent = document.getElementById("ordercontent");
        var btnchaos = document.getElementById("btnchaos");
        var btnneutral = document.getElementById("btnneutral");
        var btnorder = document.getElementById("btnorder");

        function openChaos() {
            chaosContent.style.transform = "translateX(0)";
            neutralContent.style.transform = "translateX(100%)";
            orderContent.style.transform = "translateX(100%)";
            btnchaos.style.background = "#0092e7";
            btnneutral.style.background = "#007fc9";
            btnorder.style.background = "#007fc9";
        }

        function openNeutral() {
            chaosContent.style.transform = "translateX(100%)";
            neutralContent.style.transform = "translateX(0)";
            orderContent.style.transform = "translateX(100%)";
            btnchaos.style.background = "#007fc9";
            btnneutral.style.background = "#0092e7";
            btnorder.style.background = "#007fc9";
        }

        function openOrder() {
            chaosContent.style.transform = "translateX(100%)";
            neutralContent.style.transform = "translateX(100%)";
            orderContent.style.transform = "translateX(0)";
            btnchaos.style.background = "#007fc9";
            btnneutral.style.background= "#007fc9";
            btnorder.style.background = "#0092e7";
        }

//Settlement size and government generator//

let popSize = ['farm', 'commune', 'hamlet', 'borough', 'village', 'colony', 'ranch', 'township', 'town', 'castle estate', 'barony', 'city', 'metropolis', 'megapolis', 'city-state'];

let tChaos = [' lawlessness', ' bandit law', ' politician', ' sherrif', ' bank', ' clergy', ' gang', ' violent anarchist', ' witch or warlock', ' demon or devil', ' spell', ' curse', ' supernatural being of unknown origins', ' martial law', ' vampire', ' werewolf', ' unbound Genie', ' war chieftan', ' folk hero', ' bard', ' single father', ' blacksmith', ' tailor/seamstress', ' carpenter', ' single mother', ' couple', ' mismatched couple', ' archeologist', ' museum curator', ' miner', ' fletcher', ' shop keeper', ' inn keeper', ' former bartender', ' foreign merchant', ' wizard', ' knight', ' paladin', ' artist', ' chef', ' druid', ' cleric', ' necromancer', ' prodigy child'];

let tNeutral = [' organized religion', ' university', ' educated political leader', ' capitalist', ' communist', ' people\'s militia', ' peaceful anarchist', ' non-violent werewolf', ' non-violent vampire', ' matronly harpy', ' collection of studious Fae-folk', ' wizened council', ' colossal statue posessed by an Outer Planes spirit', ' war chieftan', ' folk hero', ' bard', ' single father', ' blacksmith', ' tailor/seamstress', ' carpenter', ' single mother', ' couple', ' mismatched couple', ' archeologist', ' museum curator', ' miner', ' fletcher', ' shop keeper', ' inn keeper', ' former bartender', ' foreign merchant', ' wizard', ' knight', ' paladin', ' artist', ' chef', ' druid', ' cleric', '\, stranded clan of fire Genasi', '\, powerful group of air Genasi', ' clan of earth Genasi dedicated to agriculture', '\, settled group of water Genasi'];

let tOrder = [' fascist political organization', ' dictator', ' zealous clergy', ' ancient vampire coven', ' ancient werewolf council', ' elven council at least 500 years old', ' Orc warmachine in service to a deity', ' organization hell-bent on destroying a certain type of beast, creature, or race', ' Djinn', ' group of Changelings who have created a settlement for themselves', ' world-renowned pirate-turned-politician', ' Tiefling who seeks to return to their demonic origins', ' Aasimar who seeks to return to their divine origins', ' rogue phoenix', ' awakened dragon who demands tribute to grow its hoard', ' war chieftan', ' folk hero', ' bard', ' single father', ' blacksmith', ' tailor/seamstress', ' carpenter', ' single mother', ' couple', ' mismatched couple', ' archeologist', ' museum curator', ' miner', ' fletcher', ' shop keeper', ' inn keeper', ' former bartender', ' foreign merchant', ' wizard', ' knight', ' paladin', ' artist', ' chef', ' druid', ' cleric'];

let tAlign = [' an evil', ' a mildly annoying', ' a halfway decent', ' a well-intentioned', ' an ill-intentioned', ' a sappy', ' an insane', ' a reclusive', ' a sarcastic', ' a cunning', ' a fabulous', ' a brawny', ' a whiny', ' an understated', ' an overstated', ' a narcissistic', ' an enlightened', ' an ethereal'];

let compTownAlign;
let compTownAlignChaos;
let compTownAlignNeutral;
let compTownAlignOrder;

function genChaosGov() {
  compTownAlign = `The ${generate(popSize)} teeters on the brink of disaster, and is lorded over by ${generate(tAlign)} ${generate(tChaos)}.`;
   document.getElementById("pAtmo").innerHTML = compTownAlign;
}

function genNeutralGov() {
  compTownAlign = `The ${generate(popSize)} enjoys relative safety, and is looked after by ${generate(tAlign)} ${generate(tNeutral)}.`;
  document.getElementById("pAtmo").innerHTML = compTownAlign;
}

function genOrderGov() {
   compTownAlign = `The ${generate(popSize)} is tightly controlled by ${generate(tAlign)} ${generate(tOrder)}.`;
    document.getElementById("pAtmo").innerHTML = compTownAlign;
  }

//Location generator//

let tAdjective = ['Perched ', 'Settled ', 'Founded ', 'Discovered ', 'Built ', 'Towering ', 'Hidden away '];

let tHeight = [' atop', ' beneath', ' next to', ' across from', ' due north of', ' due west of', 'due south of', ' due east of', ' a short jaunt from', ' adjacent to', ' in the shadow of', ' deep within'];

let tLandmark = [ ' a mountain', ' a dark and mirror-smooth lake', ' a lively swamp', ' a rancid bog', ' a stand of burnt trees', ' a colorful meadow of wildflowers', ' an abandoned city', ' a thriving flea market', ' a mass grave', ' a bubbling hot spring', ' an acidic waterfall', ' a pool of magical runoff', ' a thick, luscious forest', ' a cave', ' a mysterious grove', ' a broken wizard\'s tower made of glass', ' an old castle', ' a fort', ' huge\, bottomless chasms left behind by some ancient civilization', ' a large city', ' a tiny farm', ' a village of kobolds and their papier m\âch\é dragon god', ' a huge cemetery', ' a cave full of goblins', ' a crystal-blue beach', ' an abandoned crystal quarry', ' a valley riddled with huge\, jagged rocks', ' a dead valley that was the site of an ancient battlefield', ' a cursed lake', ' a holy tree', ' a gravel beach', ' a sea', ' an ocean', ' a huge\, churning river', ' a deep valley filled with colorful rocks', ' a sprawling forest made of metal tree-like structures'];

let tArchitecture = [' a gloomy atmosphere', ' a cheerful disposition', ' a hopeful allure', ' a dreary feeling', ' a bright\, youthful feeling', ' a rough and tumble vibe', ' a sprawling\, disorganized vibe', ' a quaint feeling', ' a charming vibe', ' a dangerous haze', ' a back-alley bar fight vibe', ' a romantic allure', ' an ominous atmosphere', ' an auspicious feeling', ' an overcast and run-down haze', ' an extraplanar feeling', ' a technological vibe', ' an underwater feel', ' a murky\, grimy haze'];

let compTownLocation;

function genSetLocation() {
  compTownLocation = `${generate(tAdjective) + generate(tHeight) + generate(tLandmark)}, it has${generate(tArchitecture)} to it.`;
   document.getElementById("pLocal").innerHTML = compTownLocation;
}

//Plot hook generator//

let setPopularity = [' isn\'t known for anything. It\'s been utterly forgotten by all but its closest neighbors', ' is known for its weaponry', ' is known for its festivals', ' is known for its eclectic use of magic', ' is known for its unique cuisine', ' is known as the birthplace of an ancient hero', ' is known for being a black market haven', ' is known for being friendly to rebels', ' is known for producing renowned animal handlers', ' is known for wild, localized weather patterns unlike anything the rest of the realm experiences', ' is known for producing world-class healers', ' is known for producing world-class soldiers', ' is known to be friendly toward assassins', ' is known to be hostile to outsiders', ' is known for its incredibly fertile, arable land', ' is known to be frequently targeted by local governments', ' is a known entrance to the Underdark', ' is a known holy site', ' is thought to be cursed', ' is thought to be blessed'];

let setFutureProspects = [' facing a plague', ' peaceful', ' facing a looming food shortage', ' losing their fight against a neighboring faction', ' struggling to maintain trade good stockpiles due to hostiles blocking trade routes', ' facing a crisis brought on by local wizards dabbling too freely in wild magic', ' being suffocated by unfair taxes based on an old family grudge', ' struggling to find enough buyers to sell their over-produced trade goods. Local prices are plummeting', ' facing a disease affecting all nearby plants -- including trees', ' being poisoned by a tainted water source', ' rapidly losing its populace\'s sanity to a low, incessant whisper', ' sinking into the earth at an alarming rate', ' being surrounded by mysterious crystals taller than towers that seem to appear overnight', ' plagued by civil infighting', ' raising the alarm at the sudden presence of a huge beast', ' reeling from a rash of crimes committed by citizens who were peaceful less than a fortnight ago'];

function genSetPlot() {
  setPlot = `It ${generate(setPopularity)}. At present, ${(cityName)} is${generate(setFutureProspects)}.`;
  document.getElementById("pPlot").innerHTML = setPlot;
}

  //Complete generated  text block//

function genSetFinished() {
  genSetComplete = `${compTownEcon} ${compTownLocation} ${compTownAlign} ${setPlot}`;
  document.getElementById("generated-town").innerHTML = genSetComplete;
}