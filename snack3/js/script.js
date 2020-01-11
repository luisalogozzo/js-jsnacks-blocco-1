// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.
var somma = 0;
// for (var i = 0; i < 5; i++) {
// somma += parseInt(prompt('inserisci un numero'));
// }

var i = 0;
while (i < 5) {
i++;
somma += parseInt(prompt('inserisci un numero'));
}

console.log(somma);
