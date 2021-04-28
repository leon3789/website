/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
let x;
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

/*function getStats() {
  let rand, str2, dex2, con2, wis2, int2, cha2, statTotal2, totalrolls2;
  let stats = [];
  statTotal2 = 0;
  totalrolls2 = 0;
  while (statTotal2 < 70) {
    for (let t = 0; t < 6; t++) {
      let total3 = 0;
      let lowest = 6;
      //let x = 1;
      for (let o = 0; o < 4; o++) {
        rand = rollDice(6);
        if (rand < lowest) {
          lowest = rand;
        }
        total3 += rand;
      }
      total3 -= lowest;
      stats.push(total3);
    }
    statTotal2 =
      stats[0] + stats[1] + stats[2] + stats[3] + stats[4] + stats[5];
    totalrolls2++;
    if (statTotal2 < 70) {
      stats = [];
    }
  }
  str2 = stats[0];
  dex2 = stats[1];
  con2 = stats[2];
  wis2 = stats[3];
  int2 = stats[4];
  cha2 = stats[5];
  document.getElementById("stat1").innerHTML = stats[0];
  document.getElementById("stat2").innerHTML = stats[1];
  document.getElementById("stat3").innerHTML = stats[2];
  document.getElementById("stat4").innerHTML = stats[3];
  document.getElementById("stat5").innerHTML = stats[4];
  document.getElementById("stat6").innerHTML = stats[5];
}*/

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
function rollDiceButton(sides) {
  document.getElementById("resultsGoHere").innerHTML = rollDice(sides);
}
//console.log("Hello, Dan, how are you this morning?");
//console.log("Also try clicking What in the first page");
//alert('Don\'t judge, currently broken.')
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

let player = {Class: "Default", Level: 1, Stats: [0, 0, 0, 0, 0, 0] }

function playerGeneration(job){
  switch(job){
    //If the player chooses the Warrior job.
    case 0:
    player.Class = "Warrior";
    break;
    case 1:
    player.class = "Wizard";
    break;
    console.log(player.Class);
    document.getElementById("results").innerHTML = "You are a " + player.Class;
  }
}
