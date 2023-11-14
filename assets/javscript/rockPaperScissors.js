function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'Rock';
    }
    else if (computerChoice === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    };
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors' || 
    playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper' || 
    playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'Draw!';
    }
    else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = getComputerChoice();
    let gameResult = playRound(playerSelection, computerSelection);
    console.log (gameResult);
    if (gameResult.includes("win")) {
        playerScore = playerScore + 1;
    };
    if (gameResult.includes("lose")) {
        computerScore = computerScore + 1;
    }
    };
    finalResult(playerScore, computerScore);
}

function finalResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("You beat the computer " + playerScore + " - " + computerScore);
    }
    else if (playerScore < computerScore) {
        console.log("The computer won " + computerScore + " - " + playerScore);
    }
    else {
        console.log("The final result was a draw");
    }
}