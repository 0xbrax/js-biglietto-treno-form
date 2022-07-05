const user = document.getElementById('user');
let km = document.getElementById('km');
const age = document.getElementById('age');

km = parseInt(km.value);

/*
const btnGen = document.getElementById('btn-generate');
btnGen.addEventListener('click',
    function(){
        const ticket = document.getElementById('ticket');
        
        ticket.classList.add('.show-ticket');
    }
)
*/

let slotUser = document.querySelector('#ticket ul li:nth-child(1)');
let slotAge = document.querySelector('#ticket ul li:nth-child(2)');
let slotSeat = document.querySelector('#ticket ul li:nth-child(3)');
let slotID = document.querySelector('#ticket ul li:nth-child(4)');
let slotPrice = document.querySelector('#ticket ul li:nth-child(5)');

slotUser = slotUser.innerHTML = (user.value);
slotAge = slotAge.innerHTML = (age.value);
slotSeat = slotSeat.innerHTML = (Math.floor((Math.random() * 10) + 1));
slotID = slotID.innerHTML = (Math.floor((Math.random() * 10000) + 90000));

if (slotAge == ('Biglietto Standard')) {
    slotPrice.innerHTML = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format(0.21 * km);
} else if (slotAge == ('Biglietto Young')) {
    slotPrice.innerHTML = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format((0.21 * km) - ((20 / 100) * (0.21 * km)));
} else {
    slotPrice.innerHTML = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format((0.21 * km) - ((40 / 100) * (0.21 * km)));
}