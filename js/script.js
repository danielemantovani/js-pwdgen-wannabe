// TEST DI FUNZIONAMENTO
// alert("ciao")

// DATI DI INPUT

// DOMANDA NOME
const userName = prompt ("Caro utente immaginario, come ti chiami?"); //string
console.log (userName, typeof userName);

// DOMANDA COGNOME
const userSurname = prompt ("e il tuo cognome?"); //string
console.log (userSurname, typeof userSurname);

// DOMANDA COLORE PREFERITO
const userColor = prompt ( "e invece il tuo colore preferito?"); //string
console.log (userColor, typeof userColor);


// ELABORAZIONE DEI DATI
const userInfo = userName + userSurname + userColor; //string
console.log (userInfo, typeof userInfo);


// STAMPA DELL'OUTPUT
const resultMessage = `${userInfo} 21`;
console.log (resultMessage);


// STAMPO IL MESSAGGIO IN PAGINA
document.getElementById("result").innerHTML = resultMessage;



