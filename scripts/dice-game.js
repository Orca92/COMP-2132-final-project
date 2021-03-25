/*
    Javascript for Dice Game. 
*/

// score variables 
let playerRoundPoints;
let playerTotalPoints;
let cpuRoundPoints;
let cpuTotalPoints;

// dice variables
let dice1Value;
let dice2Value;

// game state variables
let round;
let quits;

// round text
const currentRoundText = document.getElementById("displayRound");

// score text 
const playerRoundPointsText = document.getElementById("playerRoundPoints");
const playerTotalPointsText = document.getElementById("playerTotalPoints");
const cpuRoundPointsText = document.getElementById("cpuRoundPoints");
const cpuTotalPointsText = document.getElementById("cpuTotalPoints");

// buttons
const btnRollDice = document.getElementById("btn-roll-dice");
const btnQuitGame = document.getElementById("btn-quit");

// Starts a new game
newGame();
currentRoundText.innerHTML = `Round: ${round}`;

// Game only finishs if all 3 rounds are played, or if player quits midmatch
if(round <= 3)
{
    //if player rolls the dice
    btnRollDice.onclick = function()
    {
        rolldice();
        round++;
        currentRoundText.innerHTML = `Round: ${round}`;
    }
}
else
{
    // Display results in a window
    // player wins
    if(playerTotalPoints < cpuTotalPoints)
    {
        alert("Aw, you lost. Best luck next time. Press roll dice to play again, or quit to return to menu");
    }
    else if(playerTotalPoints == cpuTotalPoints)
    {
        alert("Wow, what are the chances of a tie? Press roll dice to play again, or quit to return to menu");
    }
    else
    {
        alert("Congrats, you won! Press roll dice to play again, or quit to return to menu");
    }

    btnRollDice.onclick= function()
    {
        newgame();
        currentRoundText.innerHTML = `Round: ${round}`;
    }
}



// functions for rolling the dice
function rolldice()
{
    // Player dice roll
    dice1Value = getRandomIntInclusive(1, 6);
    dice2Value = getRandomIntInclusive(1, 6);

    // Calculate player points
    if(dice1Value == 1 || dice2Value == 1)
    {
        playerRoundPoints = 0;
    }
    else if(dice1Value == dice2Value)
    {
        playerRoundPoints = (dice1Value + dice2Value) * 2;
    }
    else
    {
        playerRoundPoints = dice1Value + dice2Value;
    }

    // update player score
    playerRoundPointsText.innerHTML = playerRoundPoints;
    playerTotalPoints = playerTotalPoints + playerRoundPoints;
    playerTotalPointsText.innerHTML = playerTotalPoints;

    // cpu dice roll
    dice1Value = getRandomIntInclusive(1, 6);
    dice2Value = getRandomIntInclusive(1, 6);

    // Calculate cpu points
    if(dice1Value == 1 || dice2Value == 1)
    {
        cpuRoundPoints = 0;
    }
    else if(dice1Value == dice2Value)
    {
        cpuRoundPoints = (dice1Value + dice2Value) * 2;
    }
    else
    {
        cpuRoundPoints = dice1Value + dice2Value;
    }

    // update cpu score
    cpuRoundPointsText.innerHTML = cpuRoundPoints;
    cpuTotalPoints = cpuTotalPoints + cpuRoundPoints;
    cpuTotalPointsText.innerHTML = cpuTotalPoints;
}

// function for navigating pages
btnQuitGame.onclick = function()
{
    window.location.href="menu.html";
}

// function for starting a new game
function newGame()
{
    playerRoundPointsText.innerHTML = 0;
    playerTotalPointsText.innerHTML = 0;
    cpuRoundPointsText.innerHTML = 0;
    cpuTotalPointsText.innerHTML = 0;
    playerRoundPoints = 0;
    playerTotalPoints = 0;
    cpuRoundPoints = 0;
    cpuTotalPoints = 0;
    round = 1;
}

// function used to get a random value from min to max 
// referenced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
