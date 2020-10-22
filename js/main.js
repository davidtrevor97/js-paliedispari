// Palindroma
//Inserimento della parola
var word = prompt("Scrivi una parola");
//RIbaltamento della parola
var wordVersa = word.split("").reverse().join("");
//Invocazione della funzione
var palindrom = palindromismo(word, wordVersa);
//COnfronto delle due parole nella funzione, se == allora è Palindroma
function palindromismo(parola, parolaVerse){
  if (parola === parolaVerse ) {
    document.getElementById("ciao").innerHTML = "La tua parola è palindroma...WOW !"
  }else {
    document.getElementById("ciao").innerHTML = "La tua parola è una semplice parola"
  }
}

// BIM BUM BAM
//DIchiarazione pari o dispari
// var eOO =  prompt("Pari o dispari").toLowerCase();
// //Ciclo while in caso eOO sia diverso da "pari" o "dispari"
// while ( (eOO != "pari") && (eOO != "dispari") ) {
//   alert("Attenzione! Scrivere bene pari o dispari");
//   var eOO =  prompt("Pari o dispari").toLowerCase();
// }
// //NUmero
// var numero = parseInt( prompt( "Scegli un numero")) ;
// //Ciclo while in caso numero risulti isNan
// while ( isNaN(numero) == true ) {
//   alert("Attenzione! Scrivere solamente un numero");
//   var numero =  parseInt( prompt( "Scegli un numero"));
// }
// //Creazione numero computer random
// var numeroPc = Math.floor( (Math.random() * 5) + 1 ) ;
// //Somma dei due numeri
// var sum = numero + numeroPc;
// //Invocazione della funzione
// var invocazione = winner(sum, eOO);
// //Decisione se la somma è pari o dispari e chi è il vincitore
// function winner( somma, pOD ){
//   if ( (somma % 2 == 0) && (pOD == "pari") ) {
//     document.getElementById("ciao").innerHTML = somma + "  " + "HAI VINTO TU :C";
//   }else if  ( (somma % 2 != 0) && (pOD == "pari") ) {
//     document.getElementById("ciao").innerHTML = somma + "  " +"HO VINTO IO!!";
//   }else if  ( (somma % 2 != 0) && (pOD == "dispari") ) {
//     document.getElementById("ciao").innerHTML = somma + "  " + "HAI VINTO TU XC";
//   }else if  ( (somma % 2 == 0) && (pOD == "dispari") ) {
//     document.getElementById("ciao").innerHTML = somma +  "  " + "HO VINTO IO!!";
//   }
// }
