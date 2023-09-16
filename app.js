const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
document.body.appendChild(mainContainer);

for (i = 0; i < 4; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add(`row-container`);
    mainContainer.appendChild(rowContainer);
    for (j = 0; j < 4; j++) {
        // const row = document.querySelector(`.row-container:nth-of-type(${j})`);
        const row = document.querySelector(`.row-container:nth-of-type(${i + 1})`);
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}

const squares = document.querySelectorAll('.square');
for (const square of squares) {
    square.addEventListener('mouseover', () => {
        // square.classList.add('square-hover');
        square.style.backgroundColor = getRandomColor();
    })
}

const button = document.createElement('button');
button.innerText = 'Press me to make a new etch-a-sketch grid.'
button.classList.add('button');
document.body.prepend(button);

function createNewGrid() {
    let dimension = parseInt(prompt("Enter the side length you want for the new grid."));
    while (dimension > 99) {
        dimension = parseInt(prompt("Please enter something less than 100."));
    }

    const goner = document.querySelector('.main-container');
    document.body.removeChild(goner);

    const newContainer = document.createElement('div');
    newContainer.classList.add('main-container');
    document.body.appendChild(newContainer);

    for (i = 0; i < dimension; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add(`row-container`);
        newContainer.appendChild(rowContainer);
        for (j = 0; j < dimension; j++) {
            // const row = document.querySelector(`.row-container:nth-of-type(${j})`);
            const row = document.querySelector(`.row-container:nth-of-type(${i + 1})`);
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
    }

    const squares = document.querySelectorAll('.square');
    for (const square of squares) {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
        })
    }

}

button.addEventListener('click', createNewGrid);

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}