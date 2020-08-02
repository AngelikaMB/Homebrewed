var compTownAlign = "Let's decide on an atmosphere for this place.";



function tGenerate(array) {

var genTown = [tChaos, tNeutral, tOrder];
var tGenIndex = tGenerate(genTown.length);
var outputDecAlign = genTown[tGenIndex];

  return Math.floor(Math.random() * array.length); {

if (genTown === 0) {
  newGenTown = "Chaos Option: " + "The " + popSize[PS] + " has fallen into chaos, being mostly controlled by" + tAlign[TA] + tChaos[TC] + ".";
} else if (genTown === 1) {
  newGenTown = "Neutral Option: " + "The " + popSize[PS] + " is relatively safe with tentative peace being controlled by" + tAlign[TA] + tNeutral[TN] + ".";
} else {
  newGenTown = "Order Option: " + "The " + popSize[PS] + " is governed with an iron fist of which all citizens must abide or pay severe penalties. The rule of law is enacted by" + tAlign[TA] + tOrder[TO] + ".";
  }

var popSize = ['farm', 'commune', 'hamlet', 'borough', 'village', 'colony', 'ranch', 'township', 'town', 'castle estate', 'barony', 'city', 'metropolis', 'megapolis', 'city-state'];

var tChaos = [' lawlessness', ' bandit law', ' corrupt politician', ' corrupt sherrif', ' corrupt bank', ' corrupt clergy', ' gang', ' violent anarchists', ' evil witch or warlock', ' demon or devil', ' spell', ' curse', ' supernatural being of unknown origins', ' martial law', ' savage vampires', ' prowling werewolves', ' unbound Genie'];

var tNeutral = [' organized religion', ' university', ' educated political leaders', ' capitalist', ' communist', ' people\'s militia', ' peaceful anarchists', ' pack of non-violent werewolves', ' den of non-violent vampires', ' den of matronly harpies', ' collection of studious Fae-folk', ' wizened council', ' colossal statue created from expensive stone, embelished with rare gems, and carved in the image of a deity -- though it is merely posessed by an Outer Planes spirit'];

var tOrder = [' fascist political organization', ' dictator', ' zealous clergy', ' ancient vampire coven', ' ancient werewolf council', ' elven council at least 500 years old', ' Orc warmachine in service to a deity', ' an organization hell-bent on destroying a certain type of beast, creature, or race', ' Djinn', ' group of Changelings who have created a settlement for themselves', ' world-renowned pirate-turned-politician', ' Tiefling who seeks to return to their demonic origins', ' Aasimar who seeks to return to their divine origins', ' rogue phoenix', ' awakened dragon who demands tribute to feed its hoard'];

var tAlign = [' an evil', ' a mildly annoying', ' a halfway decent', ' a well-intentioned', ' an ill-intentioned', ' a sappy', ' a confused', ' a hidden'];
  }
 
 function generatedTown() {
   var compTownAlign = newGenTown;

   var PS = tGenerate(popSize);
   var TC = tGenerate(tChaos);
   var TN = tGenerate(tNeutral);
   var TO = tGenerate(tOrder);
   var TA = tGenerate(tAlign);
 }
 return (compTownAlign);
}

console.log(compTownAlign)