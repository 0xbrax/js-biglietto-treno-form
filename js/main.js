const user = document.getElementById('user');
const km = document.getElementById('km');
const age = document.getElementById('age');

//console.log(user.value);
console.log(km.value);
//console.log(age.value);

const slotUser = document.querySelector('#ticket ul li:nth-child(1)');
const slotAge = document.querySelector('#ticket ul li:nth-child(2)');
let slotSeat = document.querySelector('#ticket ul li:nth-child(3)');
let slotID = document.querySelector('#ticket ul li:nth-child(4)');
let slotPrice = document.querySelector('#ticket ul li:nth-child(5)');

slotSeat = Math.floor((Math.random() * 10) + 1);
slotID = Math.floor((Math.random() * 10000) + 90000);

console.log(user.value);
console.log(age.value);
console.log(slotSeat);
console.log(slotID);
//console.log(slotPrice);

const btnGen = document.getElementById('btn-generate');
btnGen.addEventListener('click',
    function(){
        const ticket = document.getElementById('ticket');
    
    }
)

/*
alert('Benvenuto, compra ora il tuo biglietto del treno!')

const route = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log('KM da percorrere: ' + route);

const birthYear = parseInt(prompt('In che anno sei nato?'));
console.log('Anno di nascita: ' + birthYear);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
console.log('Anno in corso: ' + currentYear);

let years = parseInt(currentYear - birthYear);
console.log('Età: ' + years + ' anni');

let priceDemo = parseFloat(0.21 * route).toFixed(2);
console.log('Prezzo biglietto senza sconto: ' + priceDemo + ' €');

if (years < 18) {
    price = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format((0.21 * route) - ((20 / 100) * (0.21 * route)));
    alert(`
    Il prezzo del biglietto YOUNG è: ${price}
    Buon viaggio!
    `);
} else if (years >= 65) {
    price = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format((0.21 * route) - ((40 / 100) * (0.21 * route)));
    alert(`
    Il prezzo del biglietto OVER65 è: ${price}
    Buon viaggio!
    `);
}
else {
    price = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format(0.21 * route);
    alert(`
    Il prezzo del biglietto è: ${price}
    Buon viaggio!
    `);
}
*/