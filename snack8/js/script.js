// Snack8
// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.


var num = prompt('inserisci un numero a 4 cifre');
var somma = 0;

for (var i = 0; i < num.length; i++) {
  somma += parseInt(num[i]);
}
console.log(somma);
