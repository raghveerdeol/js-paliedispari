

// 1 chiedere input parola al utente;
const userWord = prompt('Inserire una parola');

// 2 aprire funzione;
function palidroma(word) {
    // 4 dichiariamo x = 0;
    let x = 0;
    // 5 dichiariamo n = parola.length - 1
    let n = word.length - 1;
    // 6 dichiariamo una variabile vuota in cui inserire il risultato;
    let risultato = 0;
    // 7 apriamo un ciclo while con condizione x = n;
    let preRisultato = false;
    while (x !== n && x < n) {
        // 8 nel ciclo while inseriamo un if;
        if (word[x] !== word[n]) {
            preRisultato = true;
        }
        x = x + 1;
        n = n - 1;
    }
    if (preRisultato) {
        risultato = "La parola non è palidroma";
    } else{
        risultato = "La parola è palidroma";
    }
    return risultato; 
    
}

let stampa = palidroma(userWord);

console.log(stampa);
