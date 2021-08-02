function createSquares(size) {
    //500px full board width
    const divWidth = 500 / size;

    const squareContainer = document.querySelector('.squareContainer');
    squareContainer.style.cssText = `grid-template-columns: repeat(${size}, ${divWidth}px);`;
    squareContainer.textContent = '';

    for (let i = 0; i < size * size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        squareDiv.style.cssText = `width:${divWidth}px; height:${divWidth}px;`;
        squareContainer.appendChild(squareDiv);
    }
}

function addSquareListener() {
    const squares = document.querySelectorAll('.squareDiv');
    squares.forEach(square => {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('colored');
        });
    });
}

function promptMessage() {
    const userSize = prompt('Enter your choice of grid size', '');
    createSquares(userSize);
    addSquareListener()
}

createSquares(16);
addSquareListener()

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', promptMessage);