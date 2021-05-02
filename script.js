let x;
let commitedStats =[];

function test(){
  console.log('A button was pushed!')
}

function alertJoe() {
  document.getElementById("resultsGoHere").innerHTML = "Congrats!";
}

function getStats() {
  let rand, total, lowest, stat1, stat2, stat3, stat4, stat5, stat6, statTotal;
  let stats = [];
  statTotal = 0;

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

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
function rollDiceButton(sides) {
  document.getElementById("resultsGoHere").innerHTML = rollDice(sides);
}

function callText() {
  document.getElementById("resultsGoHere").innerHTML = "Test?";
}
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

function commitStats(){
  commitedStats.push(document.getElementById("str").innerHTML);
  commitedStats.push(document.getElementById("dex").innerHTML);
  commitedStats.push(document.getElementById("con").innerHTML);
  commitedStats.push(document.getElementById("wis").innerHTML);
  commitedStats.push(document.getElementById("int").innerHTML);
  commitedStats.push(document.getElementById("cha").innerHTML);
  sessionStorage.setItem("stats", JSON.stringify(commitedStats));
}

let player = {Class: "Default", Level: 1, Stats: [0, 0, 0, 0, 0, 0] }

function playerGenerationClass(job){
  switch(job){
    //If the player chooses the Warrior job.
    case 0:
    player.Class = "Warrior";
    break;
    case 1:
    //If the player chooses the wizard job.
    player.Class = "Wizard";
    break;
    default:
    player.Class = "Default";
    break;
  }
  console.log(player);
  document.getElementById("results").innerHTML = "You are a " + player.Class;
}

function testCommitedStats(){
  player.Stats = JSON.parse(sessionStorage.getItem('stats'));
  console.log(player.Stats);
}