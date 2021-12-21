// definisco due array con ragazzi e ragazze
let ragazzi = ['Zlatan', 'Marotta', 'Ciruzzo'];
let ragazze = ['Mestre', 'Mazzola', 'Nesto'];

//definisco un array persone vuote: 

let persone =  [];

//inserisco nell'array persone l'array dei ragazzi
persone.push(ragazzi);

//ottengo due array dentro l'array
console.log(persone);

//inserisco nell'array persone l'array dei ragazzi
persone.push(ragazze);

//ottengo due array dentro l'array
console.log(persone);

//questa è un array multidimensionale: 
//per leggere ad esempio il nome della seconda ragazza scrivo
console.log(persone[1][1]);

//il primo numero indica quale sottoarray prendere 
// il secondo numero indica quale elemento del sottoarray voglio
//(ricorda che gli indici degli array partono da zero)

// esercizio: prova a far scrivere il nome di Ciro
console.log(persone[0][2]);