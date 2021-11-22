var winParagraph = document.querySelector(".win-para");
var loseParagraph = document.querySelector(".lose-para");
var guessParagraph = document.querySelector(".guess-para");
var myGuessParagraph = document.querySelector(".myGuess-para");

var lettersArray = ["q", "w", "e", "r", "t", "y"];
var guessArray = [];
var winCounter = 0;
var loseCounter = 0;
var myGuessCounter = 9;
var randomLetter = randomLetterFunc(lettersArray);
function randomLetterFunc(arr) {
  var randomIndex = Math.floor(Math.random() * lettersArray.length);
  return arr[randomIndex];
}

function mySupposition(e) {
  var myLetter = e.key;
  
  console.log(myLetter);
  console.log(randomLetter);

  guessArray.push(myLetter);

  myGuessParagraph.innerHTML = `Your Guesses so far:${guessArray}`;

  if (myLetter == randomLetter) {
    myGuessCounter = 9;
    winCounter++;
    randomLetter = randomLetterFunc(lettersArray);
    guessArray = [];
    guessParagraph.innerHTML = `Guesses Left:${9}`;
    winParagraph.innerHTML = `Wins: ${winCounter}`;
    myGuessParagraph.innerHTML = `Your Guesses so far:${guessArray}`;
  } else if (myGuessCounter > 0 && myLetter !== randomLetter) {
    myGuessCounter--;
    guessParagraph.innerHTML = `Guesses Left:${myGuessCounter}`;
  } else {
    myGuessCounter = 10;
    loseCounter++;
    myGuessCounter--;
    randomLetter = randomLetterFunc(lettersArray);
    guessArray = [];

    guessParagraph.innerHTML = `Guesses Left:${myGuessCounter}`;
    loseParagraph.innerHTML = `Loses: ${loseCounter}`;
    myGuessParagraph.innerHTML = `Your Guesses so far:${guessArray}`;
  }
}

window.onkeydown = mySupposition;