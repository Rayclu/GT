const POSSIBLE_WORDS = [
  "californication",
  "plataforma5",
  "black",
  "summer",
  "flea",
  "aeroplane",
  "peppers",
  "unlimited",
  "arcadium",
  "love",
  "getaway",
  "stadium",
  "quixoticelixer",
  "quarter",
  "snow",
  "dylan",
  "zephyr",
  "funky",
  "chili",
  "Evanescense",
  "LinkinPark",
  "LimpBizkit",
  "PapaRoach"
];

let timer = 10;
let score = 0;
let palabraAleatoria = "";
let interval;

const randomWords = () => {
  return POSSIBLE_WORDS[Math.floor(Math.random() * POSSIBLE_WORDS.length)];
};

function addToDOM(word) {
  try {
    const text = document.getElementById("randomWord");
    text.textContent = word;
  } catch (e) {
    console.error("Error al agregar palabra al DOM:", e);
  }
}

const checking = (pO, pIn) => {
  return pO === pIn;
};

function getUsrInput() {
  // let input = "" ;
  // document.getElementById('text').addEventListener(
  //     'keypress',
  //     c => {console.log(input); input += c.key}
  // );
  // return input;
  return document.getElementById("text").value;
}

function resetTextInput() {
  document.getElementById("text").value = "";
}


function updateScore() {
  score++;
  const elem = document.getElementById('score');
  elem.textContent = score;
}

function actualizarTiempo() {
  try{
    interval = setInterval(() => {
    const timeElem = document.getElementById("timeSpan");
    timer--;
    timeElem.textContent = `${timer}s`;
    
    if (timer <= 0) {
      gameOver();
      clearInterval(interval);
    }
  }, 1000);
  }catch(e){
    document.getElementById('timeSpan').textContent = '0'
    alert('you loose')
  }
}

function gameOver() {
  const container = document.getElementById('end-game-container');
   
  container.innerHTML = `
    <h1>You Lose!</h1>
    <p>Puntaje final: ${score}</p>
    <button onclick="restartGame()">Jugar de nuevo</button>
  `;
}

// Función para reiniciar el juego
function restartGame() {
  // Limpiar interval anterior si existe
  if (interval) {
    clearInterval(interval);
  }
  
  timer = 10;
  score = 0;
  
  // Resetear UI
  document.getElementById('score').textContent = '0';
  document.getElementById('timeSpan').textContent = '10s';
  document.getElementById('text').value = '';
  
  // Iniciar nuevo juego
  iniciarJuego();
}

function iniciarJuego() {
  palabraAleatoria = randomWords();
  addToDOM(palabraAleatoria);
  actualizarTiempo();
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('text').addEventListener('input', function(e) {
    const palabraIngresada = getUsrInput();
    
    if (checking(palabraAleatoria, palabraIngresada)) {
      // Palabra correcta
      timer += 3; // Agregar tiempo extra
      updateScore();
      resetTextInput();
      palabraAleatoria = randomWords();
      addToDOM(palabraAleatoria);
    }
  });
  
  iniciarJuego();
  
  // Hacer restartGame global para el onclick del botón
  window.restartGame = restartGame;
});