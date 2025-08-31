const COLORS = [
  "rgb(25, 50, 200)",
  "rgb(0, 180, 100)",
  "rgb(200, 40, 40)",
  "rgb(240, 140, 50)",
  "rgb(150, 60, 200)",
  "rgb(220, 220, 220)"
];

let colors;
let pickedColor;

// Selección de elementos del DOM
const squares = document.querySelectorAll(".square");
let numSquares = squares.length;
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const resetButton = document.getElementById("reset");
const modeButtons = document.querySelectorAll(".mode");


function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            
            numSquares = this.textContent === "Easy" ? 3 : 6;
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            const clickedColor = this.style.backgroundColor;
            
            // Comparar con el color ganador
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "¡Correcto!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Intentalo Nuevamente";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    
    resetButton.textContent = "Nuevos Colores";
    messageDisplay.textContent = "";
    
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    
    h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function() {
    reset();
});

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

init();