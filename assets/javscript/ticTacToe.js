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

/* THIS NEEDS ADDING TO CREATE USER FUNCTIONALITY */
let player1 = createUser("Mark", "X");
let player2 = createUser("Janet", "O");
let currentPlayer = player1;

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



function game() {
    let winningMarker = "";
    let turnsPlayed = 0;
    if (winningMarker === "") {    
    /*  Changes the textContent of the square if clicked and add the players
    marker in the board array */
const allSquares = document.querySelectorAll('.square');
allSquares.forEach((square) => {
    square.addEventListener("click", () => {
        square.textContent = currentPlayer.marker;
        gameboard.board[square.dataset.num] = currentPlayer.marker;
        
        checkForWin();
        if (winningMarker != "") {
            /********* CODE NEEDED WHEN SOMEONE WINS! *********/
        };
        turnsPlayed++;
        if (turnsPlayed === 9) {
            /******* CODE NEEDED WHEN THE GAME IS A DRAW *******/
        } 
        switchPlayer();
    }, {once: true});
})
function switchPlayer() {
    if (currentPlayer === player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
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
                winningMarker = gameboard.board[a];
                console.log(`The winning marker was ${winningMarker}`);  
        } 
    })
}
}
};



