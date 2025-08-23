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
  "PapaRoach",
  "...",
];

const randomWords = (POSSIBLE_WORDS) =>
  POSSIBLE_WORDS[Math.floor(Math.random() * POSSIBLE_WORDS.length)];

function addToDOM(word) {
  const text = document.getElementById("randomWord");
  text.textContent = word;
}

function getUsrInput() {
  // let input = "" ;
  // document.getElementById('text').addEventListener(
  //     'keypress',
  //     c => {console.log(input); input += c.key}
  // );
  // return input;
  return document.getElementById("text").value;
}
const checking = (pO, pIn) => {
  // if(pInput === pOriginal){
  //     console.log(inp,'\n', pOriginal)
  //     return true
  // }
  // return false
  return pO === pIn;
};

function resetTextClousure() {
  document.getElementById("text").value = "";
}

var timer = 10;
var palabraAleatoria = randomWords(POSSIBLE_WORDS);
const score = 0;
const palabraIngresada = getUsrInput();

do {
  const interval = setInterval(() => {
    const timeElem = document.getElementById("timeSpan");
    timer--;
    timeElem.textContent = `${timer}s`;
    const condition = checking(palabraAleatoria, palabraIngresada);
    console.log(condition);
    if (condition) {
      timer += 3;
      score += 1;
      resetTextClousure();
      palabraAleatoria = randomWords();
      addToDOM(palabraAleatoria);
    }

    if (timer <= 0) {
      clearInterval(interval);
      alert("You're loose");
    }
  }, 1000);
} while (timer >= 0);

console.log(addToDOM(palabraAleatoria));
