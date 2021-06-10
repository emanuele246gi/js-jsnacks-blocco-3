// 1.  Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

var numeri = [1, 32, 45, 67, 73];

var a = parseInt(prompt('Inserisci un numero minimo 1 massimo ' + numeri.length));

var b = parseInt(prompt('Inserisci un numero massimo ' + numeri.length));


while(a > b || b > numeri.length){
    
    alert('attenzione, a deve essere minore di b');

    a = parseInt(prompt('Inserisci un numero minimo 1 massimo ' + numeri.length));
    
    b = parseInt(prompt('Inserisci un numero massimo ' + numeri.length));
}

console.log(getRangeArr(numeri, a, b));

function getRangeArr (array, min, max){

    var newNumeri = [];

    for(var i = min - 1; i < max; i++){
        newNumeri.push(array[i]);
    }

    return newNumeri;
}

// ------------------------------------------------------

// 2.  Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

var paroleuno = prompt('Inserisci una parola');
var paroledue = prompt('Inserisci una parola');

var risultato = prova(paroleuno,paroledue);
console.log(risultato);

function prova(paroleuno,paroledue){
    var ris;
    if (paroleuno.length == paroledue.length){
        ris = 'sono uguali';

    } else if(paroleuno.length > paroledue.length){
        ris = paroleuno;

    } else {
        ris = paroledue;
    }

    return ris;
}

// ------------------------------------------------------

// 3.  Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var array1 = ["a", "b", "c",];
var array2 = ["1", "2", "3",];

var output = [array1, array2];

console.log(output);

// ------------------------------------------------------

// 4. Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

var string = []

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}