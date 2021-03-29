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
const roundMax = 3;

// image variables
const playerDiceImage1 = document.getElementById("playerDice1");
const playerDiceImage2 = document.getElementById("playerDice2");
const cpuDiceImage1 = document.getElementById("cpuDice1");
const cpuDiceImage2 = document.getElementById("cpuDice2");

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

// Game only finishs if all 3 rounds are played, or if player quits midmatch

//if player rolls the dice
btnRollDice.onclick = function()
{
    if(round < 3)
    {
        rolldice();
        round++;
        currentRoundText.innerHTML = `Round: ${round} of ${roundMax}`;
    }
    // TO get rid of issue where text shows round 4 of 3
    else if(round == 3)
    {
        rolldice();
        round++;
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
            alert("Congrats, you won! Press ok to play again, or quit to return to menu");
        }
        // Start a new game
        newGame();
    }
}


// functions for rolling the dice
function rolldice()
{
    // Player dice roll
    dice1Value = getRandomIntInclusive(1, 6);
    dice2Value = getRandomIntInclusive(1, 6);

    // Update player dice image
    updatePlayerDiceImage(dice1Value, dice2Value);

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

    // Update cpu dice image
    updateCpuDiceImage(dice1Value, dice2Value);

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

    currentRoundText.innerHTML = `Round: ${round} of ${roundMax}`;
}

// function used to get a random value from min to max 
// referenced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// Update the image of the dice to show the value the player's dice rolled
function updatePlayerDiceImage(dice1, dice2)
{
    // parameter type validation
    if( typeof dice1 != "number" )
    {
        //invalid argument passed
        console.log("This function requires a numeric parameter");
        return;
    }
    else if(typeof dice2 != "number" )
    {
        //invalid argument passed
        console.log("This function requires a numeric parameter");
        return;
    }

   
    switch(dice1)
    {
        case 1:
            playerDiceImage1.src = "images/diceValue1.jpg";
            break;
        case 2:
            playerDiceImage1.src = "images/diceValue2.jpg";
            break;
        case 3:
            playerDiceImage1.src = "images/diceValue3.jpg";
            break;
        case 4:
            playerDiceImage1.src = "images/diceValue4.jpg";
            break;
        case 5:
            playerDiceImage1.src = "images/diceValue5.jpg";
            break;
        case 6:
            playerDiceImage1.src = "images/diceValue6.jpg";
            break;
    }

    switch(dice2)
    {
        case 1:
            playerDiceImage2.src = "images/diceValue1.jpg";
            break;
        case 2:
            playerDiceImage2.src = "images/diceValue2.jpg";
            break;
        case 3:
            playerDiceImage2.src = "images/diceValue3.jpg";
            break;
        case 4:
            playerDiceImage2.src = "images/diceValue4.jpg";
            break;
        case 5:
            playerDiceImage2.src = "images/diceValue5.jpg";
            break;
        case 6:
            playerDiceImage2.src = "images/diceValue6.jpg";
            break;
    }
}

function updateCpuDiceImage(dice1, dice2)
{
    // parameter type validation
    if( typeof dice1 != "number" )
    {
        //invalid argument passed
        console.log("This function requires a numeric parameter");
        return;
    }
    else if(typeof dice2 != "number" )
    {
        //invalid argument passed
        console.log("This function requires a numeric parameter");
        return;
    }

    switch(dice1)
    {
        case 1:
            cpuDiceImage1.src = "images/diceValue1.jpg";
            break;
        case 2:
            cpuDiceImage1.src = "images/diceValue2.jpg";
            break;
        case 3:
            cpuDiceImage1.src = "images/diceValue3.jpg";
            break;
        case 4:
            cpuDiceImage1.src = "images/diceValue4.jpg";
            break;
        case 5:
            cpuDiceImage1.src = "images/diceValue5.jpg";
            break;
        case 6:
            cpuDiceImage1.src = "images/diceValue6.jpg";
            break;
    }

    switch(dice2)
    {
        case 1:
            cpuDiceImage2.src = "images/diceValue1.jpg";
            break;
        case 2:
            cpuDiceImage2.src = "images/diceValue2.jpg";
            break;
        case 3:
            cpuDiceImage2.src = "images/diceValue3.jpg";
            break;
        case 4:
            cpuDiceImage2.src = "images/diceValue4.jpg";
            break;
        case 5:
            cpuDiceImage2.src = "images/diceValue5.jpg";
            break;
        case 6:
            cpuDiceImage2.src = "images/diceValue6.jpg";
            break;
    }
}