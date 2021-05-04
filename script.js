let x;
let commitedStats =[];
let maxPlayerHP;
let currentPlayerHP;
//These 2 functions are nonsense I made while trying to get a hang of adding text to the webpage, safe to ignore. 
function test(){
  console.log('A button was pushed!')
}

function alertJoe() {
  document.getElementById("resultsGoHere").innerHTML = "Congrats!";
}
//Rolls stats for D&D 5e using the "Roll 4 d6, drop the lowest".
function getStats() {
  let rand, total, lowest, stat1, stat2, stat3, stat4, stat5, stat6, statTotal;
  let stats = [];
  statTotal = 0;
//Personal home rule in my D&D games, the site will re roll the stats until the total of all 6 stats is over 70.
  while (statTotal < 70) {
    for (let i = 0; i < 6; i++) {
      total = 0;
      lowest = 6;
      for (let o = 0; o < 4; o++) {
        rand = rollDice(6);
        if (rand < lowest) {
          lowest = rand;
        }
        total += rand;
      }
      total -= lowest;
      stats.push(total);
    }
    statTotal = stats[0] + stats[1] + stats[2] + stats[3] + stats[4] + stats[5];
    if (statTotal < 70) {
      stats = [];
    }
  }
  //Ties the stats generated into the HTML. Could likely tidy this up later.
  stat1 = stats[0];
  stat2 = stats[1];
  stat3 = stats[2];
  stat4 = stats[3];
  stat5 = stats[4];
  stat6 = stats[5];
  document.getElementById("stat1").innerHTML = stat1;
  document.getElementById("stat2").innerHTML = stat2;
  document.getElementById("stat3").innerHTML = stat3;
  document.getElementById("stat4").innerHTML = stat4;
  document.getElementById("stat5").innerHTML = stat5;
  document.getElementById("stat6").innerHTML = stat6;
}
//Simple die rolling function. Will generate a random number between 1 and any number you enter, only used in buttons for predetermined die.
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
//More throw away code safe to ignore.
function rollDiceButton(sides) {
  document.getElementById("resultsGoHere").innerHTML = rollDice(sides);
}

function callText() {
  document.getElementById("resultsGoHere").innerHTML = "Test?";
}
//After generating stats on Project 1, this function will allow the user to "grab" stats and store them.
function pickStat(number) {
  switch (number) {
    case 0:
      x = document.getElementById("stat1").innerHTML;
      break;
    case 1:
      x = document.getElementById("stat2").innerHTML;
      break;
    case 2:
      x = document.getElementById("stat3").innerHTML;
      break;
    case 3:
      x = document.getElementById("stat4").innerHTML;
      break;
    case 4:
      x = document.getElementById("stat5").innerHTML;
      break;
    case 5:
      x = document.getElementById("stat6").innerHTML;
      break;
    default:
      console.log("Error!");
  }
}
//Then this function will allow players to place a "stored" stat, to decide where they want their stats to go.
function placeNumber(stat) {
  switch (stat) {
    case 0:
      document.getElementById("str").innerHTML = x;
      break;
    case 1:
      document.getElementById("dex").innerHTML = x;
      break;
    case 2:
      document.getElementById("con").innerHTML = x;
      break;
    case 3:
      document.getElementById("wis").innerHTML = x;
      break;
    case 4:
      document.getElementById("int").innerHTML = x;
      break;
    case 5:
      document.getElementById("cha").innerHTML = x;
      break;
    default:
      console.log("Error!");
  }
}
//D&D monster factory
const enemyFactory = (name, hp, ac, stats, statMods) => {
  return {
    name,
    hp,
    ac,
    stats,
    statMods
  }
};
//commits the stats for the battle page.
function commitStats(){
  commitedStats.push(document.getElementById("str").innerHTML);
  commitedStats.push(document.getElementById("dex").innerHTML);
  commitedStats.push(document.getElementById("con").innerHTML);
  commitedStats.push(document.getElementById("wis").innerHTML);
  commitedStats.push(document.getElementById("int").innerHTML);
  commitedStats.push(document.getElementById("cha").innerHTML);
  sessionStorage.setItem("stats", JSON.stringify(commitedStats));
}
//Sets the Player object, for their "character sheet"
let player = {Class: "Default", Level: 1, HP: 0, AC: 0, Stats: [0, 0, 0, 0, 0, 0], HitDie: 0, statMods: [] }

const goblin = enemyFactory('Goblin', 7, 15, [8,14,10,10,8,8], [-1, +2, 0, 0 ,-1, -1]);

const steveTheCommoner = enemyFactory('Steve', 4, 10, [10, 10, 10, 10, 10, 10], [0, 0, 0, 0, 0, 0])

//let goblin = {HP: 7, AC: 15, Stats: [8, 14, 10, 10, 8, 8], statMods: [-1, +2, 0, 0, -1, -1]}

//Generates the players class between the 2 opitions given
function playerGenerationClass(job){
  switch(job){
    //If the player chooses the Warrior job.
    case 0:
    player.Class = "Warrior";
    player.HitDie = 10;
    break;
    case 1:
    //If the player chooses the wizard job.
    player.Class = "Wizard";
    player.HitDie = 6;
    break;
    default:
    player.Class = "Default";
    break;
  }
  document.getElementById("results").innerHTML = "You are a " + player.Class;
  //Get's the stat mods into an array.
  for(let i = 0; i < player.Stats.length; i++){
    player.statMods.push(Math.floor((player.Stats[i] - 10) / 2));
  }
  player.HP = Math.floor(player.HitDie + player.statMods[2]);
  if(player.Class === "Warrior"){
    player.AC = 16;
  } 
  else if(player.Class === "Wizard"){
    player.AC = 11 + player.statMods[1];
  }
  document.getElementById("playerAC").innerHTML = player.AC;
  maxPlayerHP = player.HP;
  currentPlayerHP = player.HP;
  console.log(currentPlayerHP);
  console.log(maxPlayerHP);
  document.getElementById("playerHP").innerHTML = currentPlayerHP + "/" + maxPlayerHP;
  console.log(player);
  const mirrorMatch = enemyFactory('???', player.HP, player.AC, player.Stats, player.statMods);
  console.log(mirrorMatch);
}
//Originally a test, will have to rename soon, but this brings the commited stats to the current player sheet.
function testCommitedStats(){
  player.Stats = JSON.parse(sessionStorage.getItem('stats'));
  console.log(player.Stats);
}
let currentGoblinHP = goblin.hp;
//Test function for Goblin HP
function testGoblinHp(){
  let damage = rollDice(6);
  damage += player.statMods[0];
  console.log(damage);
  currentGoblinHP -= damage;
  console.log(currentGoblinHP);
  document.getElementById('goblinHP').innerHTML = currentGoblinHP + "/7";
  console.log(goblin);
  console.log(steveTheCommoner);
}