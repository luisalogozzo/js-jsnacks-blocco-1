// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.
var array = [];
var Numero;
// for (var i = 0; i < 6 ; i++) {
// Numero = prompt('inserisci un numero');
//   if (Numero % 2 == 1) {
//   array.push(Numero);
//   }
// }
var i = 0;
while (i < 6) {
  i++;
  Numero = parseInt(prompt('inserisci un numero'));

  if (Numero % 2 == 1) {
  array.push(Numero);
  }

}
console.log(array);
