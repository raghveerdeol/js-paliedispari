

// 3 nella funzione devo paragonare la prima lettera della parola (che chiameremo x) con l'ultima lettera (che chiameremo n);

;



// 9 nella condizione if parola[x] === parola[n]{
//     allora la parola è palidroma;
// } else {
//     la parola non è palidroma
// } 
// 10 inseriamo il risultato nella variabile vuota
// 11 return variabile. 

// 1 chiedere input parola al utente;
const userWord = prompt('Inserire una parola');

// 2 aprire funzione;
function palidroma(word) {
    // 4 dichiariamo x = 0;
    const x = 0;
    // 5 dichiariamo n = parola.length - 1
    const n = word.length - 1;
    // 6 dichiariamo una variabile vuota in cui inserire il risultato;
    let risultato = 0;
    // 7 apriamo un ciclo while con condizione x = n;
    while (x === n) {
        // 8 nel ciclo while inseriamo un if;
        if (word[x] === word[n]) {
            risultato = "La parola è palidroma";
        } else {
            risultato = "La parola non è palidroma";
        }
        x = x + 1;
        n = n - 1;
        console.log(word[x], word[n])
    }
    return risultato; 
    
}

palidroma(userWord);

console.log(palidroma(userWord));
