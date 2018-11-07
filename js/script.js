// Lista med spelets alla ord.
const wordList = [
  "Sol",
  "Träd",
  "Bänk",
  "Stol",
  "Knepig",
  "Busig",
  "Polis",
  "Gris",
  "Vegan",
  "Bil",
  "Piano",
  "Slöja",
  "Spring",
  "Regn"
];
//Variabel för det valda ordet.
let selectedWord;
//Array bestående av rutorna där bokstäverna ska stå
let letterBoxes = [];
//Mitt html-element där bilden ligger, bilden som kommer vid fel svar
let hangmanImg = document.getElementById("hangman");
//Börjar på 0 och räknas upp för varje fel bokstav, vilken av bilderna som kommer upp beroende på hur många fel man gjort
let hangmanImgNr = 0;
//Variabel för knappen man startar spelet med
let startGameBtn;
window.onload = init;
// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
  // När man klickar på knappen starta spel så anropas funktionen startTheGame
  startGameBtn = document.getElementById("startGameBtn");
  startGameBtn.addEventListener("click", startTheGame);

  /*Funktionen startTheGame som i sin tur anropar andra funktioner såsom 
  buttonValue, createInput, randomGen & activateStart. Den rensar även gammalt innehåll*/
  function startTheGame() {
    let alpaButton = document.getElementById("letterButtons");
    alpaButton.addEventListener("click", buttonValue);
    hangmanImgNr = 0;
    hangmanImg.src = `images/h0.png`;
    document.getElementById("message").textContent = "";
    document.getElementById("placeholders").innerHTML = "";
    randomGen();
    createInput();
    activateStart();
  }
} // End init

//Funktion för att slumpa random ord!
function randomGen() {
  selectedWord = wordList[
    Math.floor(Math.random() * wordList.length)
  ].toUpperCase();
}

//Funktion som tar fram bokstävernas rutor, antal beror på ordets längd.
function createInput() {
  for (let i = 0; i < selectedWord.length; i++) {
    letterBoxes[i] = document.createElement("li");
    letterBoxes[
      i
    ].innerHTML = `<input type="text" class="lista" disabled value="" />`;
    document.getElementById("letterUL").appendChild(letterBoxes[i]);
  }
}
//array för rätt bokstäver
let letterValue = [];
// Funktion som körs när du trycker på bokstäverna och gissar bokstav
function buttonValue(event) {
  //Lägger value av vald knapp i letterButton som sen används längre ner för att skriva ut fel bokstav
  letterButton = event.target.value;
  //Disable:ar knapp efter tryck
  event.target.disabled = true;
  //Hämtar mina inputs och lägger dom i variabel
  let letterBoxInput = document.querySelectorAll("#letterBoxes input");
  //Gör en array bestående av det valda ordet.
  let wordArray = [...selectedWord];
  /*Om ordet inkluderar värdet av val knapp, loopa igenom alla mina inputs,
   om värdet av val knapp finns i indexet på min ordArray, då är input-value 
   lika med den bokstaven, pusha då bokstaven till min array */
  if (selectedWord.includes(event.target.value)) {
    for (var i = 0; i < letterBoxInput.length; i++) {
      if (event.target.value === wordArray[i]) {
        letterBoxInput[i].value = event.target.value;
        letterValue.push(event.target.value);
      } //Om bokstäverna när de sätts ihop är detsamma som ordet
      if (letterValue.join("") === selectedWord) {
        //Kör min removeButton funktion
        removeButton();
        //Skriv ut vinnarfras!
        document.getElementById(
          "message"
        ).textContent = `Du har vunnit! Ordet var: ${selectedWord}`;
        //Töm min array
        letterValue = [];
        //Rensa min ul
        let ul = document.getElementById("letterUL");
        ul.innerHTML = "";
      }
    } // Kör min funktion för fel svar
  } else {
    wrongAnswer();
  }
}
//Funktion för fel svar
function wrongAnswer() {
  //Öka numret för varje felgissning.
  hangmanImgNr++;
  //Ändra bild baserat på nummer av fel gissning.
  hangmanImg.src = `images/h${hangmanImgNr}.png`;
  //Skriv ut fel bokstäver
  document.getElementById("placeholders").innerHTML += letterButton;
  //Om man har gissat fel 6 gånger skriv ett meddelande om att man har dött och vilket det rätta ordet var
  if (hangmanImgNr == 6) {
    removeButton();
    //Ta bort innehållet i min UL
    let ul = document.getElementById("letterUL");
    ul.innerHTML = "";
    //Töm min array
    letterValue = [];
    //Skriv ut meddelande
    document.getElementById(
      "message"
    ).textContent = `Du är hängd! Ordet var: ${selectedWord}`;
  }
}
//Funktion för att disable:a mina knappar och enable:a startknappen
function removeButton() {
  let removeButton = document.getElementsByClassName("btn btn--stripe");
  for (var j = 0; j < removeButton.length; j++) {
    removeButton[j].disabled = true;
  } //För att enable:a startknappen
  startGame = document.getElementById("startGameBtn");
  startGame.disabled = false;
}
// Funktion som enable:ar mina knappar och disable:ar startknappen
function activateStart() {
  let enableButton = document.getElementsByClassName("btn btn--stripe");
  for (var j = 0; j < enableButton.length; j++) {
    enableButton[j].disabled = false;
  }
  startGame = document.getElementById("startGameBtn");
  startGame.disabled = true;
}
