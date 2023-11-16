const sketchGrid = document.querySelector('#sketchGrid');
const sketchButton = document.getElementById('sketchButton');


sketchButton.addEventListener("click", () => {
    let answer = prompt('How many squares do you want?');
    createGrid(answer);
});

function createGrid(totalSquares) {
    resetBoard();
    document.getElementById('sketchTitle').scrollIntoView();
    let sqSize = sketchGrid.offsetWidth / totalSquares;
    sqSize = Math.floor(sqSize);
    for (let i = 0; i< totalSquares * totalSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        sketchGrid.appendChild(square);
    }
    let allSquares = document.querySelectorAll('.square');
    for (sq of allSquares) {
        sq.style.width = `${sqSize}px`;
        sq.style.height = `${sqSize}px`;
        }
        allSquares.forEach((sq) => {
            sq.addEventListener("mouseover", () => {
                sq.style.backgroundColor = `${getRandomColor()}`;
            });
        })
    }

function getRandomColor() {
    let letters = '0123456789ABCDED';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetBoard() {
    let allSquares = document.querySelectorAll('.square');
    allSquares.forEach(e => e.remove());
}

