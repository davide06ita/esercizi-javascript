// scrivere un programma che, dato il nome di una persona
// il suo sesso e un numero intero
// scriva una frase tante volte quanto
// è specificata dal numero
// la frase dev'essere "benvenuto NOME" per i maschi
// e "benvenuta NOME"per le femmine

//SOLUZIONE
// definisco e assegno una variabile nome
let nome = "Laura";

// definisco e assegno una variabile numero
let numero = 3;

// definisco una variabile sesso

let sesso = 'f';

// scrivo un ciclo for che conti da 1 a numero
for (i=1; 1<=numero; i++) {
    // se il sesso è maschile 
    if(sesso == 'm') {
        // preparo una frase
        frase = "benvenuto " + nome;
    }
    // altrimenti
    else {
        // preparo un'altra
        frase = "benvenuta " + nome;
    }
// scrivo la frase
console.log(frase);
}