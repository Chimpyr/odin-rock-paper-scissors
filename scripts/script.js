
function computerPlay() {
    const weapons = ["rock", "paper", "scissors"];
    // Generates random number betwen 1 and 3
    randomNum = Math.floor((Math.random() * (4-1)) + 1);
    // Converts number selection into corresponding string value from array
    computerSelection = weapons[randomNum - 1];
    console.log(computerSelection);
}


function round(playerSelection = "paper", computerSelection = "rock") {
    // Converts player selection into all lowercase so it is case insensitive
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("Tie Round");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
        return("win");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        return("win");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper");
        return("win");
    } else {
        console.log("How, you chose: " + playerSelection + "\nAnd the computer chose: " + computerSelection);
    }
}

function game() {
    let score = 0;
    // Loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        result = round();
        // Add score on every win
        if (result == "win") {
            score++;
        }
        //console.log(result);
     }
    console.log("Final score: " + score)
}


game();