let parole = [ 'cane', 'gatto', 'teso',
               'lorenzo', 'laccio', 'rappresentante',
               'rompiscatole', 'simpatico', 'carinissimo', 'lecchino', 'chiara', 'zaza'
             ];

let parole2 = [];

for(let i=0; i < parole.length; i++) {

    if (parole[i] < 6) {
    
    parole2.push(parole[i]);
    }
    }

console.log(parole2);