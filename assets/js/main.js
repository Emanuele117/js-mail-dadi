// chiedere all'utente la sua email

// controlla che sia nella lista di chi può accedere

//stampa un messaggio appropriato sull'esito del controllo

// genera un numero random da 1 a 6 sia per il giocatore sia per il computer

// stabilire chi è il vincitore in base a chi fa il punteggio più alto

/* STRUMENTI

- prompt

- array

- innerHTML 

- math(random) da 1 a 6

*/

const askEmail = prompt('Inserisci la tua email');
/* console.log(askEmail); */



const iscritti = ['marco@live.it', 'emanuele@gmail.com', 'luca@gmail.com'];

let trovata = false

for (let i = 0; i < iscritti.length; i++) {
    // controllo che la mail del prompt sia uguale a iscritti [i]
    if (askEmail == iscritti[i]) {
        trovata = true
    }


}

let iscrizioni = document.querySelector('.iscrizioni')

if (trovata == true) {
    iscrizioni.innerHTML += `<p>Puoi accedere</p>`
} else {
    iscrizioni.innerHTML += `<p>Non puoi accedere</p>`
}

