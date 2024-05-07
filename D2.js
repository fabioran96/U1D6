/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = "12"
let numero2 = "16"
if (numero1 > numero2) {
  console.log("Il numero più grande è: " + numero1)
} else if (numero2 > numero1) {
  console.log("Il numero più grande è: " + numero2)
} else {
  console.log("I numeri sono uguali.")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numero3 = "56"
if (numero3 !== 5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numero4 = "60"
if(numero4 % 5 === 0) {
  console.log("il numero è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero5 = "16"
let numero6 = "8"
if (numero5 === 8 || numero6 === 8) {
  console.log("Uno dei numeri è uguale a 8.")
} else if (numero5 + numero6 === 8 || numero5 - numero6 === 8 || numero5 - numero6 === 8) {
  console.log("L'addizione/sottrazione dei numeri è uguale a 8.")
} else {
  console.log("Nessuna delle condizioni è soddisfatta.")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totaleAcquisti = 63
let costoSpedizione = 10
let totaleconSpedizione = totaleAcquisti + costoSpedizione

if(totaleAcquisti > 50){
  console.log("Totale:" + totaleAcquisti)
}
else{
  console.log("Totale:" + totaleconSpedizione)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = totaleAcquisti * 0.20
//"Totale:" + totaleAcquisti - (totaleAcquisti * blackFriday)
console.log("Totale:" + totaleAcquisti - blackFriday)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numero7 = 88
let numero8 = 99
let numero9 = 45



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numero10 = 67
if (typeof numero10 === 'number') {
  console.log(numero10 + " è un numero.")
} else {
  console.log(numero10 + " non è un numero.")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
  if (val < 10) {
      console.log("Meno di 10")
    } else if (val < 5) {
      console.log("Meno di 5")
    } else {
      console.log("Uguale a 10 o maggiore")
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/



