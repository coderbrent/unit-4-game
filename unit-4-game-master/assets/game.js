//initialize game variables
var compCrystalCounter = 0;
var userCrystalCounter = 0;
var wins = 0;
var losses = 0;

//initialize gems & score
var ruby = 0;
var emerald = 0;
var diamond = 0;
var goldgem = 0;
var totalScore = 0;

//function that re-initializes all game scores/values
function resetGems() {
    checkTotalScore();
    ruby, emerald, diamond, goldgem = 0;
    rubyVal = (Math.floor((Math.random() * 11) + 1));
    emeraldVal = (Math.floor((Math.random() * 11) + 1));
    diamondVal = (Math.floor((Math.random() * 11) + 1));
    goldgemVal = (Math.floor((Math.random() * 11) + 1));
    totalScore = 0;
    compCrystalCounter = (Math.floor((Math.random() * 50) + 10));
    userCrystalCounter = 0;
    $("#compCrystalCounter").text(compCrystalCounter);
    $("#userCrystalCounter").text(userCrystalCounter);
}

//checks to see if after 10 games users overall record is under 50%. If it is, user is alerted with "Game Over!"
//and win/loss chart reverts back to 0.
function checkTotalScore() {
  if (losses === 0 && wins === 0) {
    return;
  } 
  else if(losses > 5 && wins < 5) {
    alert("Game Over!");
    wins = 0;
    losses = 0;
    $("#wins").text(wins);
  $("#losses").text(losses);
  }
}

//manually resets wins and losses back to 0.
$(".resetGame").on("click", function(){
  wins = 0;
  losses = 0;
  $("#wins").text(wins);
  $("#losses").text(losses);
})

//runs a reset, alerts user they've won and increments "wins" by 1.
function win() {
  resetGems();
  alert("You win!");
  $("#wins").text(wins += 1);
}

//runs a reset, alerts user they've lost and increments "losses" by 1.
function lose() {
  resetGems();
  alert("You lose!");
  $("#losses").text(losses += 1);
}

//invokes reset on page load/reload.
resetGems();

//click events for all gems
$("#ruby").on("click", function() {
   totalScore += rubyVal;
   $("#userCrystalCounter").text(totalScore); 
     if (totalScore == compCrystalCounter) {
       win();
    } 
    else if (totalScore > compCrystalCounter) {
       lose();
    }
})

$("#emerald").on("click", function() {
    totalScore += emeraldVal;
    $("#userCrystalCounter").text(totalScore);
      if (totalScore == compCrystalCounter) {
        win();
      } 
      else if (totalScore > compCrystalCounter) {
        lose();
      }
    })

$("#diamond").on("click", function() {
    totalScore += diamondVal;
    $("#userCrystalCounter").text(totalScore);
      if (totalScore == compCrystalCounter) {
        win();
      } 
      else if (totalScore > compCrystalCounter) {
        lose();
      }
    })

$("#goldgem").on("click", function() {
    totalScore += goldgemVal;
    $("#userCrystalCounter").text(totalScore);
      if (totalScore == compCrystalCounter) {
        win();
      } 
      else if (totalScore > compCrystalCounter) {
        lose();
      }
    })

