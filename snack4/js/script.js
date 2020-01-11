// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var Invitati = ['pippo', 'pluto', 'paperino', 'minnie', 'topolino' ]

var NomeUtente = prompt('Qual é il tuo nome?')

var trovato = false;

for (var i = 0; i < Invitati.length; i++) {
if (NomeUtente == Invitati[i]) {
  var trovato = true;
}
console.log(Invitati[i]);
}

if (trovato == true) {
  alert('puoi partecipare');
} else {
  alert('non puoi partecipare');
}
