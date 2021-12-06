 // definisci un array con i nomi delle tue morose dalla prima
 // all'attuale

 let morose = ['Angelica', 'Mara', 'Giada'];

 // conta quante ne hai avute 
 let numeroMorose = morose.length;

 // scrivilo nella console
 console.log("io ho avuto " + numeroMorose + " morose, e ne sono fiero!");

 // scrivi l'elenco delle ragazze, scrivendo per ognuna anche il numero
 // ad esempio:
 // 1. Angelica
 // 2. Mara
 // 3. Giada

for(let i=0; i < morose.length; i++) {
    numero = i + 1;
    console.log(numero + ". " + morose[i]);
}