//initialize game variables
var compCrystalCounter = 0;
var userCrystalCounter = 0;
var wins = 0;
var losses = 0;

//initialize gems
var ruby, emerald, diamond, goldgem = 0;
var totalScore = ruby + emerald + diamond + goldgem;

function resetGems() {
    ruby, emerald, diamond, goldgem = 0;
    compCrystalCounter = (Math.floor((Math.random() * 50) + 10));
    userCrystalCounter = 0;
    console.log("the user crystalCounter is now = " + userCrystalCounter);
    console.log("the comp crystal counter is now = " + compCrystalCounter);
    $("#compCrystalCounter").text(compCrystalCounter);
    $("#userCrystalCounter").text(userCrystalCounter);
}

resetGems();

let win = () => {
    //resetGems();
    alert("You win!");
    $("#wins").text(wins += 1);
}

let lose = () => {
    //resetGems();
    alert("You lose!");
    $("#losses").text(losses += 1);
}

//click events
$("#ruby").on("click", function() {
   ruby += 3;
   $("#userCrystalCounter").text(sum(gems)); 
     if (sum(gems) == compCrystalCounter) {
         console.log(crystalTotal);
         resetGems();
       win();
    } 
    else if (sum(gems) > compCrystalCounter) {
        resetGems();
        lose();
    }
})

$("#emerald").on("click", function() {
    gems.emerald += 10;
    $("#userCrystalCounter").text(sum(gems));
      if (sum(gems) == compCrystalCounter) {
          resetGems();
        win();
      } 
      else if (sum(gems) > compCrystalCounter) {
          resetGems();
        lose();
      }
    })

$("#diamond").on("click", function() {
    gems.diamond += 5;
    $("#userCrystalCounter").text(sum(gems));
      if (sum(gems) == compCrystalCounter) {
          resetGems();
        win();
      } 
      else if (sum(gems) > compCrystalCounter) {
          resetGems();
        lose();
      }
    })

$("#goldgem").on("click", function() {
    gems.goldgem += 1;
    $("#userCrystalCounter").text(sum(gems));
      if (sum(gems) == compCrystalCounter) {
          resetGems();
        win();
      } 
      else if (sum(gems) > compCrystalCounter) {
          resetGems();
        lose();
      }
    })

