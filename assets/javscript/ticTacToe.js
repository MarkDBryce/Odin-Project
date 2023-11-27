/*  Factory function - using IIFE (yellow brackets before function, after and the addional ())
    IIFE (Immediately Invoked Function Expression) means it runs as soon as it is defined. IIFE
    also means it can't be used again.
    Created an Object called gameboard, and returned the board property (array)  */
    const gameboard = (function Gameboard () {
        const board = [];
        for (i=0; i < 9; i++) {
            board.push("");
        };
        return {board};
    })();

/*  Factory function - score is a local variable and can only be used within the block
    bacause it is not returned. The two functions that are returned can still reference
    the score variable. */
function createUser(Username, Usermarker) {
    let score = 0;
    const marker = Usermarker;
    const name = Username;
    const increaseScore = () => score++;
    const getScore = () => score;
    return {name, marker, getScore, increaseScore};
};

/*  Factory function to create the board squares. IIFE used as once created none of the block
    needs to be reused */
    const squares = (function createSquares() {
        for (i=0; i < 9; i++) {
        let square = document.createElement('div');
            const container = document.querySelector('#container');
            container.appendChild(square);
            square.classList.add('square');
            square.setAttribute("data-num", `${i}`);
        }
    })();

    function scoreboards() {
        const playerNameOne = document.querySelector('#playerNameOne');
        const playerNameTwo = document.querySelector('#playerNameTwo');
        let nameOne = document.createElement('h2');
        let nameTwo = document.createElement('h2');
        let scoreOne = document.createElement('h2');
        let scoreTwo = document.createElement('h2');
        playerNameOne.appendChild(nameOne);
        playerNameOne.appendChild(scoreOne);
        playerNameTwo.appendChild(nameTwo);
        playerNameTwo.appendChild(scoreTwo);
        nameOne.textContent = `${player1.name} - ${player1.marker}`;
        nameTwo.textContent = `${player2.name} - ${player2.marker}`;
        scoreTwo.classList.add('score');
        scoreOne.classList.add('score');
        scoreOne.setAttribute("id", "scoreOne");
        scoreTwo.setAttribute("id", "scoreTwo");
        scoreOne.textContent = player1.getScore();
        scoreTwo.textContent = player2.getScore();
        
    };


/* THIS NEEDS ADDING TO CREATE USER FUNCTIONALITY */
let player1;
let player2;
let currentPlayer = player1;



function updateScore() {
    scoreOne.textContent = "12";
}

function game() {
    let currentPlayer = player1;
    let winningMarker = "";
    let turnsPlayed = 0;
    let winner = "";
    scoreboards();
    /*  Changes the textContent of the square if clicked and add the players
    marker in the board array */
const allSquares = document.querySelectorAll('.square');
allSquares.forEach((square) => {
    square.addEventListener("click", () => {
        square.textContent = currentPlayer.marker;
        gameboard.board[square.dataset.num] = currentPlayer.marker;
        checkForWin();
        if (winner != "" ) {
            updateScores(winner);
        };
        turnsPlayed++;
        if (turnsPlayed === 9) {
            console.log("Game finished as a draw");
        } 
        switchPlayer();
    }, {once: true});
})
function switchPlayer() {
    let playerOneText = document.querySelector('#playerOneText');
    let playerTwoText = document.querySelector('#playerTwoText');
    if (currentPlayer === player1) {
        currentPlayer = player2;
        playerTwoText.classList.toggle('playerTextHide');
        playerOneText.classList.toggle('playerTextHide');
    } else {
        currentPlayer = player1;
        playerOneText.classList.toggle('playerTextHide');
        playerTwoText.classList.toggle('playerTextHide');
    };
}
function checkForWin() {
    const winLines = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6],
    ];
    winLines.forEach((line) => {
        [a,b,c] = line;
        if (gameboard.board[a] === "X" && gameboard.board[b] === "X" && gameboard.board[c] === "X" || 
            gameboard.board[a] === "O" && gameboard.board[b] === "O" && gameboard.board[c] === "O") {
                winner = gameboard.board[a];

        }
    })
};

};

function updateScores(winner) {
    let updatePlayerOne = document.querySelector('#scoreOne');
    let updatePlayerTwo = document.querySelector('#scoreTwo');
    let playerOneText = document.querySelector('#playerOneText');
    let playerTwoText = document.querySelector('#playerTwoText');
    if (winner === player1.marker) {
        player1.increaseScore();
        updatePlayerOne.textContent = player1.increaseScore();
        playerOneText.classList.toggle('playerTextHide');
        playerTwoText.classList.toggle('playerTextHide');
        playerOneText.textContent = "You win the game!";
    } else {
        player2.increaseScore();
        updatePlayerTwo.textContent = player2.getScore();
        updatePlayerTwo.textContent = player2.increaseScore();
        playerOneText.classList.toggle('playerTextHide');
        playerTwoText.classList.toggle('playerTextHide');
        playerTwoText.textContent = `${player2.name} wins the game!`;
    };
}





/*** Start Screen */
const playerOneMarkerX = document.getElementById('playerOneX');
const playerOneMarkerO = document.getElementById('playerOneO');
const playerTwoMarkerX = document.getElementById('playerTwoX');
const playerTowMarkerO = document.getElementById('playerTwoO');

const allMarkers = document.querySelectorAll('.marker');
allMarkers.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.classList.contains('notChosen')) {
        toggleMarker();
        }
    })
})

function toggleMarker() {
    allMarkers.forEach((marker) => {
        marker.classList.toggle('notChosen');
    })
}

const checkboxTicked = document.querySelector('#AICheckbox');
checkboxTicked.addEventListener("click", () => {
    checkboxTicked.classList.toggle('AICheckboxTicked');
})

const startGameButton = document.querySelector('#startGameButton');
startGameButton.addEventListener("click", () => {
    let playerOneName = document.getElementById('playerOneName').value;
    let playerTwoName = document.getElementById('playerTwoName').value;
    const playerOneX = document.getElementById('playerOneX');
    if (!playerOneX.classList.contains("notChosen")) {
        playerOneMarker = "X";
        playerTwoMarker = "O";
    } else {
        playerOneMarker = "O";
        playerTwoMarker = "X";
    }
    if (playerOneName === "") {
        playerOneName = "Player One";
    };
    if (playerTwoName === "") {
        playerTwoName = "Player Two";
    };
    player1 = createUser(playerOneName, playerOneMarker);
    player2 = createUser(playerTwoName, playerTwoMarker);
    const introScreen = document.querySelector('#introScreen');
    introScreen.style.display = "none";
    container.style.display = "flex";
    game();
})

