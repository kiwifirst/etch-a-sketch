function createSquares(size) {
    //500px full board width
    const divWidth = 500 / size;

    const squareContainer = document.querySelector('.squareContainer');
    squareContainer.style.cssText = `grid-template-columns: repeat(${size}, ${divWidth}px);`;

    for (let i = 0; i < size * size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        squareDiv.style.cssText = `width:${divWidth}px; height:${divWidth}px;`;
        squareContainer.appendChild(squareDiv);
    }
}

createSquares(10);