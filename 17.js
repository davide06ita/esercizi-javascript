//definisci un array ortaggi contenente i nomi di 5 ortaggi.
//scrivi un ciclo for che stampi solo i nomi degli ortaggi diversi da un "insalata".

let ortaggi = ['insalata', 'pomodori', 'cipolla', 'patata', 'barbabietola'];

for(i = 0; i < ortaggi.length; i++) {
    // se l'ortaggio i-esimo è diverso da insalata:
    if(ortaggi[i] != 'insalata') {
        console.log(ortaggi[i]);
    }
}