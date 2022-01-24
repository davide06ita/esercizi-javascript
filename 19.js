// PROBLEMA
// dato un array contenente una lista di 5 numeri,
// creare un secondo array contenente il quadatro di ognuno dei numeri

// SOLUZIONE
// definisco un array numeri
// definisco un secondo array numeri2, vuoto
// scrivo un ciclo for che conta da zero all'ultimo elemento
// inserisco nel secondo array numeri[i] alla seconda
// scrivo nella console il contenuto del secondo array

numeri = [1, 3, 12, 84, 20,
    89, 12, 10, 8, 44,
    4, 5, 8, 12, 67];


numeri2 = [];


for(let i=0; i < numeri.length; i++) {

if (numeri[i] < 10) {

numeri2.push(numeri[i]**2);
}
}


console.log(numeri2);