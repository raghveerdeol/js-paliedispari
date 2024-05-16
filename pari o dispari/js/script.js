


// 4 in un altra funzione sommiamo userNumer + computerNumber;
// 5 sempre nella funzione controlliamo se la somma è pari o dispari;
// 6 confrontiamo il risultato della seconda funzione con la scelta del utente;
// 7 se coincide ha vinto l'utente se no vince il  computer;

// 1 input scelta utente in una costante tra pari o dispari;
let scelta = prompt("pari o dispari?");
/* if (scelta === '' || scelta !== 'dispari' || scelta !== 'pari' ) {
    scelta = 'pari';
} */
// 2 input numero compreso tra 1 e 5;
let userNumer = Number.parseInt(prompt("Inserire un numero compreso tra 1 e 5"), 10);

if (Number.isNaN(userNumer) || userNumer > 5 || userNumer < 1){
    userNumer = Math.floor(Math.random() * 5) + 1; 
}
let computerNumber = randomNumber();
// 3 nella funzione generiamo un numero random da 1 a 5;
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1; 
}

console.log(userNumer, scelta, computerNumber);