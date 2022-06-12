// random value generated
var y = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses
// made for correct Guess
var guess = 1;

document.getElementById("submitguess").onclick = function () {
  // number guessed by user
  var x = document.getElementById("guessField").value;

  if (x == y) {
    alert("BRAVO! POGODIO SI BROJ U " + guess + " POKUŠAJA! ");
  } else if (x > y) {
    /* if guessed number is greater
                  than actual number*/
    guess++;
    alert("KRIVO, POKUŠAJ MANJI BROJ!");
  } else {
    guess++;
    alert("KRIVO, POKUŠAJ VEĆI BROJ!");
  }
};
