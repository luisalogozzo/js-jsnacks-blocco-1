// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi
// Oggi troverai una cosa dimenticata
// Ciò che è fatto è fatto
// Il buon giorno si vede dal mattino
// Sicuro di aver chiuso il gas?
// Chi semina vento raccoglie tempesta
// Il mattino ha l'oro in bocca
// Tanto va la gatta al lardo che ci lascia lo zampino

var FraseRandom = Math.floor(Math.random() * 6);

if (FraseRandom == 0) {
  alert('Oggi troverai una cosa dimenticata');
} else if (FraseRandom == 1) {
  alert('Ciò che è fatto è fatto');
} else if (FraseRandom == 2) {
  alert('Il buon giorno si vede dal mattino');
} else if (FraseRandom == 3) {
  alert('Sicuro di aver chiuso il gas?');
} else if (FraseRandom == 4) {
  alert('Chi semina vento raccoglie tempesta');
} else if (FraseRandom == 5) {
  alert('Il mattino ha l\'oro in bocca');
} else if (FraseRandom == 6) {
  alert('Tanto va la gatta al lardo che ci lascia lo zampino');
}
