// Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per invertire i caratteri di una stringa.
// Capire se la parola inserita è palindroma
// var parola = prompt("Inserisci una parola.");
// parola = parola.split();
// console.log( parola [0] );


// BIM BUM BAM
// L'utente sceglie pari o dispari
// L'utente inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.
//DIchiarazione pari o dispari
var eOO =  prompt("Pari o dispari").toLowerCase();
//Ciclo while in caso eOO sia diverso da "pari" o "dispari"
while ( (eOO != "pari") && (eOO != "dispari") ) {
  alert("Attenzione! Scrivere bene pari o dispari");
  var eOO =  prompt("Pari o dispari").toLowerCase();
}
//NUmero
var numero = parseInt( prompt( "Scegli un numero")) ;
//Ciclo while in caso numero risulti isNan
while ( isNaN(numero) == true ) {
  alert("Attenzione! Scrivere solamente un numero");
  var numero =  parseInt( prompt( "Scegli un numero"));
}
//Creazione numero computer random
var numeroPc = Math.floor( (Math.random() * 5) + 1 ) ;
//Somma dei due numeri
var sum = numero + numeroPc;
//Invocazione della funzione
var invocazione = winner(sum, eOO);
//Decisione se la somma è pari o dispari e chi è il vincitore
function winner( somma, pOD ){
  if ( (somma % 2 == 0) && (pOD == "pari") ) {
    document.getElementById("ciao").innerHTML = somma + "  " + "HAI VINTO TU :C";
  }else if  ( (somma % 2 != 0) && (pOD == "pari") ) {
    document.getElementById("ciao").innerHTML = somma + "  " +"HO VINTO IO!!";
  }else if  ( (somma % 2 != 0) && (pOD == "dispari") ) {
    document.getElementById("ciao").innerHTML = somma + "  " + "HAI VINTO TU XC";
  }else if  ( (somma % 2 == 0) && (pOD == "dispari") ) {
    document.getElementById("ciao").innerHTML = somma +  "  " + "HO VINTO IO!!";
  }
}
