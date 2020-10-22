// Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per invertire i caratteri di una stringa.
// Capire se la parola inserita è palindroma
var parola = prompt("Inserisci una parola.");
var analizza = palindroma(parola);
//funzione
function palindroma (word){
  wordArray = word.split();
  for (var i = wordArray.length ; i <= 0 ; i--) {
    wordArray.push(wordArray[i]);
  }
}
document.getElementById("ciao").innerHTML = analizza ;
