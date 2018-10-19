// Globala variabler

var wordList = ["Sol", "Träd", "Bänk", "Stol", "Knivig", "Busig", "Polis", "Gris", "Vegan", "Bil", "Rally", "Fralla", "Spring", "Regn"]; // Lista med spelets alla ord
var selectedWord; // Ett av orden valt av en slumpgenerator
var letterBoxes; //Rutorna där bokstäverna ska stå
var hangmanImg; //Bild som kommer vid fel svar
var hangmanImgNr; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
var msgElem; // Ger meddelande när spelet är över
var startGameBtn; // Knappen du startar spelet med
var letterButtons; // Knapparna för bokstäverna
var startTime; // Mäter tiden

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {} // End init

window.onload = init; // Se till att init aktiveras då sidan är inladdad

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
/*funktion som just nu ändrar bakgrundsfärg när man trycker på starta spel-knappen men som ska ändras till att starta spelet vid tryck*/
function startTheGame() {
    document.querySelector("body").style.backgroundColor = "red";        
}

startGameBtn = document.getElementById("startGameBtn");
startGameBtn.addEventListener('click', startTheGame); 

// Funktion som slumpar fram ett ord

 /*Slumpar ord ur min ordlista, skriver ut dessa i meddelande-div:en sålänge.....*/
 for(var i=0;i<wordList.length;i++) {    
    selectedWord = Math.floor(Math.random() * wordList.length);
var randomWord = document.getElementById("message");
     randomWord.textContent= wordList[selectedWord]; 
} 

// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord


// Funktion som körs när du trycker på bokstäverna och gissar bokstav
/*kod som just nu gör att en alert dyker upp när man klickar på bokstavsknapparna*/
document.getElementById("letterButtons").addEventListener("click",function(){
    alert("Du har klickat på en knapp!");});


// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på


