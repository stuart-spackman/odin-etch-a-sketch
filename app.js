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
        square.style.backgroundColor = getRandomColor();
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = makeDarker(square.style.backgroundColor);
        })
    }, { once: true })
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
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = makeDarker(square.style.backgroundColor);
            })
        }, { once: true })
    }

}

button.addEventListener('click', createNewGrid);

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const makeDarker = (rgb) => {
    if (rgb == '') {
        return `rgb(255, 255, 255)`;
    } else {
        let reduce = rgb.substring(4, rgb.length - 1).replaceAll(' ', '');
        console.log(reduce);
        const rgbArray = reduce.split(',');
        console.log(rgbArray);

        let r = Math.round(parseInt(rgbArray[0]) - 255 / 10);
        let g = Math.round(parseInt(rgbArray[1]) - 255 / 10);
        let b = Math.round(parseInt(rgbArray[2]) - 255 / 10);

        if (r < 0) r = 0;
        if (g < 0) g = 0;
        if (b < 0) b = 0;

        console.log(r, g, b);

        return `rgb(${r}, ${g}, ${b})`;
    }
}