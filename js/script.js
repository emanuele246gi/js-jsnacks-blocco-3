// 1.  Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


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



// ------------------------------------------------------

// 4. Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

