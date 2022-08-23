let userScore = 0;
let computerScore = 0;
let userScoreDisplay = document.querySelector('.player');
let computerScoreDisplay = document.querySelector('.computer');
let roundResult = document.querySelector('.roundResult');
let roundResultTitle = document.querySelector('.roundResultTitle');




const weapons = ["rock", "paper", "scissors"];
function computerPlay() {
    
    // Generates random number betwen 1 and 3
    randomNum = Math.floor((Math.random() * (4-1)) + 1);
    // Converts number selection into corresponding string value from array
    computerSelection = weapons[randomNum - 1];
    //console.log("Comp selection: " + computerSelection);
    return computerSelection;
}


function round(playerSelection, computerChoice) {
    // Converts player selection into all lowercase so it is case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerChoice;
    //console.log("Player selection in round: " + playerSelection);
    //console.log("comp selection in round: " + computerSelection);

    if (playerSelection == computerSelection) {
        console.log("Tie Round");
        roundResult.textContent = 'Tie Round';
        return('tie');
        //this is broken
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
        roundResult.textContent = 'You Win! Rock beats Scissors';
        return("win");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        roundResult.textContent = 'You Lose! Paper beats Rock';
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        roundResult.textContent = 'You Win! Paper beats Rock';
        return("win");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper");
        roundResult.textContent = 'You Lose! Scissors beats Paper';
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors");
        roundResult.textContent = 'You Lose! Rock beats Scissors';
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper");
        roundResult.textContent = 'You Win! Scissors beats Paper';
        return("win");
    } else {
        console.log("How, you chose: " + playerSelection + "\nAnd the computer chose: " + computerSelection);
        roundResult.textContent = 'no';
    }


}

function game(userSelection) {
    if (userScore < 5 && computerScore < 5) {
        roundEvent = round(userSelection, computerPlay());
        if (roundEvent == 'win') {
            userScore++;
        } else if (roundEvent == 'tie'){
            //do nothing
        } else {
            computerScore++;
        }
    }
    if (userScore == 5 || computerScore == 5) {
        endGame();
    }  
    userScoreDisplay.textContent = 'Player: ' + userScore;
    computerScoreDisplay.textContent = 'Computer: ' + computerScore;
    
}



function endGame() {
    roundResultTitle.textContent = 'Game Result';
    if (userScore > computerScore) {
        console.log('user wins with: ' + userScore);
        roundResult.textContent = ('User Wins');
    } else {
        console.log('computer wins with: ' + computerScore);
        roundResult.textContent = ('Computer Wins');
    }
}

function resetScores() {
    userScore = 0;
    computerScore = 0;
}


const body = document.querySelector('body');
const choices = document.querySelectorAll('.selection')
choices.forEach(choice => choice.addEventListener('click', makeSelection, {
    capture: false,
}))

function makeSelection(e) {
    // this tries to get the rock paper scissors value from what the user clicked, it could be either the div with the ID or the children, so if it was a child (which was most of the selection) then get the parents ID.
    clickedTarget = e.target.parentNode.id;
    if ((clickedTarget !== 'rock') && (clickedTarget !== 'paper') && (clickedTarget !== 'scissors')) {
        //console.log('not direct');
        //console.log(e.target.id);
        if(clickedTarget !== '') {
            userSelection = '#' + e.target.id;
            console.log(userSelection);
        } else {
            console.log('value was null');
            return;
        }
        
    } else {
        //console.log('it works');
        userSelection = '#' + clickedTarget;
        console.log(userSelection);
    }
    const finalSelection = document.querySelector(userSelection);
    finalSelection.classList.add('selected');

    //can't belive I didn't use this before...
    //turns the array like object from querySelectorAll into an array, which would be used to add individual event listeners
    //it is used to remove the class 'selected' which adds styles to the buttons when clicked, by taking advantage of the transition timer set in CSS, listening to the end of it - then removing it.
    const buttons = Array.from(document.querySelectorAll('.button'));
    //console.log(buttons);
    buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        finalSelection.classList.remove('selected');
      }

    //final return of rock paper or scissors, taking away the '#'

    playerChoice = userSelection.slice(1);
    game(playerChoice);

    //return userSelection.slice(1);
}

