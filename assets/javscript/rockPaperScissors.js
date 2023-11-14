function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    }
    else if (computerChoice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    };
}

let playerChoice = '';
let playerTotal = 0;
let computerTotal = 0;
const rockPaperScissors = document.getElementById('rockPaperScissors');
const displayUserScore = document.getElementById('displayUserScore');
const displayComputerScore = document.getElementById('displayComputerScore');
const resetButton = document.getElementById('resetButton');
displayUserScore.textContent = playerTotal;
displayComputerScore.textContent = computerTotal;

let btnRock = document.getElementById('userRock');
let btnPaper = document.getElementById('userPaper');
let btnScissors = document.getElementById('userScissors');
let btnComputer = document.getElementById('computerChoice');
let computerFinalImage = document.getElementById('computerChoiceImage');
let computerChoiceText = document.getElementById('computerChoiceText');
let vs = document.getElementById('vs');
let gameWinner = '';

btnRock.addEventListener("click", () => {
    playerChoice = 'rock';
    btnPaper.style.opacity = '0.2';
    btnScissors.style.opacity = '0.2';
    btnRock.style.opacity = '1';
    playRound(playerChoice);
})

btnPaper.addEventListener("click", () => {
    playerChoice = 'paper';
    btnPaper.style.opacity = '1';
    btnScissors.style.opacity = '0.2';
    btnRock.style.opacity = '0.2';
    playRound(playerChoice);
})

btnScissors.addEventListener("click", () => {
    playerChoice = 'scissors';
    btnPaper.style.opacity = '0.2';
    btnScissors.style.opacity = '1';
    btnRock.style.opacity = '0.2';
    playRound(playerChoice);
})

resetButton.addEventListener("click", () => {
    resetGame();
    playerTotal = 0;
    computerTotal = 0;
});

function playRound(playerChoice) {
    let computerGuess = getComputerChoice();
    spinComputerChoice();
    setTimeout(() => displayComputerChoice(computerGuess), 4000);
    if ((playerChoice === 'rock' && computerGuess === 'scissors') ||
    (playerChoice === 'paper' && computerGuess === 'rock') || 
    (playerChoice === 'scissors' && computerGuess === 'paper')) {
        playerTotal++;
        gameWinner = 'player';
    } else if ((playerChoice === 'rock' && computerGuess === 'paper') || 
    (playerChoice === 'paper' && computerGuess === 'scissors') || 
    (playerChoice === 'scissors' && computerGuess === 'rock')) {
        computerTotal++;
        gameWinner = 'computer';
    } else {
        gameWinner = 'draw';
    }
    setTimeout(() => displayUserScore.textContent = playerTotal, 4000);
    setTimeout(() => displayComputerScore.textContent = computerTotal, 4000);
    setTimeout(() => displayGameWinner(gameWinner), 4000);
    setTimeout(() => resetBoard(), 5000);
    setTimeout(() => checkWin(), 5000);
}

function spinComputerChoice() {
    let computerChoiceImage = document.getElementById('computerChoiceImage');
    computerChoiceImage.src='./assets/images/rps-animation.gif';
}

function displayComputerChoice(computerGuess) {
    if (computerGuess === 'rock') {
        computerFinalImage.src='./assets/images/rock.svg';
        computerChoiceText.textContent = 'Rock';
        btnComputer.style.backgroundColor = 'rgba(var(--greenRGB), 0.5)';
        btnComputer.style.borderColor = 'var(--green)';
    } else if (computerGuess === 'paper') {
        computerFinalImage.src='./assets/images/paper.svg';
        computerChoiceText.textContent = 'Paper';
        btnComputer.style.backgroundColor = 'rgba(var(--yellowRGB), 0.5)';
        btnComputer.style.borderColor = 'var(--yellow)';
    } else {
        computerFinalImage.src='./assets/images/scissors.svg';
        computerChoiceText.textContent = 'Scissors';
        btnComputer.style.backgroundColor = 'rgba(var(--redRGB), 0.5)';
        btnComputer.style.borderColor = 'var(--red)';
    }
    btnComputer.style.opacity = '1';
}

function resetBoard() {
    btnRock.style.opacity = '0.5';
    btnScissors.style.opacity = '0.5';
    btnPaper.style.opacity = '0.5';
    btnComputer.style.opacity = '0.5';
    computerFinalImage.src='./assets/images/question.svg';
    computerChoiceText.textContent = '???';
    btnComputer.style.borderColor = 'var(--blue)';
    btnComputer.style.backgroundColor = 'rgba(var(--blueRGB), 0.5)';
    vs.textContent = 'Vs';
}

function displayGameWinner(whoWon) {
    if (whoWon === 'player') {
        vs.textContent = 'You win!';
    } else if (whoWon === 'computer') {
        vs.textContent = 'Computer wins!';
    } else {
        vs.textContent = 'Draw!';
    }
}

function resetGame() {
    resetBoard();
    playerTotal = 0;
    computerTotal = 0;
    displayComputerScore.textContent = computerTotal;
    displayUserScore.textContent = playerTotal;
}

function checkWin() {
    if (playerTotal === 3) {
        announceWin('player');
    } else if (computerTotal === 3) {
        announceWin('computer');
    } else {}
}

function announceWin(winner) {
    let win = winner;
    const winMsg = document.createElement('h1');
    winMsg.classList.add('winAnnouncement');
    const divider = document.getElementById('divider');
    gameSection.remove();
    rockPaperScissors.insertBefore(winMsg, divider);
    if (win === 'player') {
        winMsg.textContent = 'You Win';
        setTimeout(() => location.reload(), 4000);
    } else {
        winMsg.textContent = 'You lose';
        setTimeout(() => location.reload(), 4000);
    }
}