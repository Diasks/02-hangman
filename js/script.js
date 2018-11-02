// Globala variabler
// Lista med spelets alla ord
const wordList = ["Sol", "Träd", "Bänk", "Stol", "Knepig", "Busig", "Polis", "Gris", "Vegan", "Bil", "Piano", "Slöja", "Spring", "Regn"]; 
// Ett av orden valt av en slumpgenerator
let selectedWord =  wordList[Math.floor(Math.random() * wordList.length)].toUpperCase(); 
//lägger valt ord i en array och splittrar ordet så det blir separata bokstäver.
let arrSelectedWord = [];
arrSelectedWord = selectedWord.split("");
let letterBoxes = []; //Rutorna där bokstäverna ska stå
//mitt html-element där bilden ligger - Bild som kommer vid fel svar
let hangmanImg = document.getElementById("hangman");
let hangmanImgNr = 0; //Börjar på 0 och räknas upp för varje fel bokstav // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
let msgElem; 
let startGameBtn; // Knappen du startar spelet med
let lettersLeft = arrSelectedWord.length; // räknar ner hur många bokstäver som e kvar att gissa baserat på längden av slumpat ord
let startTime; // Mäter tiden



window.onload = init; 

// Funktion som slumpar fram ett ord

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
  


// Se till att init aktiveras då sidan är inladdad

// När man klickar på knappen starta spel så anropas funktionen startTheGame
startGameBtn = document.getElementById("startGameBtn");
startGameBtn.addEventListener('click', startTheGame); 

//funktionen startTheGame som i sin tur anropar funktionen ButtonValue och CreateInput.
function startTheGame() {
    event.target.disabled = true;
    alpaButton = document.getElementById("letterButtons");
    alpaButton.addEventListener('click', buttonValue);
    createInput();
    console.log(selectedWord);

}} // End init


// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord
//skapa li-element där antalet rutor är beroende på längden av slumpat ord
function createInput() { 
   
    for (let i = 0; i < arrSelectedWord.length; i++){
        letterBoxes[i] = document.createElement("li");
        letterBoxes[i].innerHTML = `<input type="text" disabled value="" />` 
                    
            document.getElementById("letterUL").appendChild(letterBoxes[i]);
           
            } 
       
        }
    
//vill ha tag i mina inputs för att ändra value till vald bokstav.....
//ligger efter hela tiden och visar inte bokstav...... 
let liInputElem = document.querySelectorAll('value');

// Funktion som körs när du trycker på bokstäverna och gissar bokstav
        function buttonValue(){
    //lägger value av vald knapp i letterButton och disable:ar vald boktav efter det.
             letterButton = event.target.value;
            event.target.disabled = true;
         //om letterButton finns i arrayen med valda ordet = true
                if(arrSelectedWord.indexOf(letterButton) !== -1) {
                 //vill slå ihop min node-lista och min listarray...
                    liInputElem.value = letterBoxes;
                    liInputElem.textContent = letterBoxes;
                    liInputElem.innerHTML = letterBoxes;
                    //var i ordet bokstaven finns där lägger den in bokstaven.
              letterBoxes[arrSelectedWord.indexOf(letterButton)] = letterButton;
             //om mina listelement när man slår ihop bokstäverna är det valda ordet så har personen vunnit!
              if (letterBoxes.join('') == selectedWord) {
                removeButton ();
                document.getElementById("message").textContent="Du har vunnit!" + " " + "ordet var: " + selectedWord;
              }     
              //räknar ner antalet bokstäver kvar
              lettersLeft--;
                                       console.log(letterButton);
                  } //finns bokstaven inte i arrayen med valda ordet = true
                else if (arrSelectedWord.indexOf(letterButton) == -1)
{
   //räkna upp från 0
    hangmanImgNr++
    //ändra bild baserat på nummer av fel gissning. 
    hangmanImg.src = "images/h"	+	hangmanImgNr	+	".png"	
    //skriv ut fel bokstäver
    document.getElementById("placeholders").innerHTML+=letterButton;
    //om man har gissat fel 6 gånger skriv ett meddelande om att man har dött och vilket det rätta ordet var
    if( hangmanImgNr == 6) {
        removeButton ();
        document.getElementById("message").textContent="Du har dött!" + " " + "ordet var: " + selectedWord;
    }
    
 
     console.log("finns inte!");
}
}
  

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på
     function removeButton () {
        let removeButton = document.getElementsByClassName("btn btn--stripe");        
        for (var j = 0; j < removeButton.length; j++) { 
            removeButton[j].disabled = true;
        }
     

     }
    


  











// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det








 
    
    
    






