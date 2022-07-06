let user = document.getElementById('user');
let age = document.getElementById('age');
const ticket = document.getElementById('ticket');

const btnGen = document.getElementById('btn-generate');
btnGen.addEventListener('click',
    function(){
        let km = document.getElementById('km');
        //km = parseInt(km.value);

        if (user.value == '' || km.value == '') {
            alert('Compila i campi mancanti.');
        } else {
            ticket.classList.remove('noShow-ticket', 'animate__backOutLeft');
            ticket.classList.add('animate__animated', 'animate__backInLeft');
            let slotUser = document.querySelector('#ticket .ticket-info li:nth-child(1)');
            let slotAge = document.querySelector('#ticket .ticket-info li:nth-child(2)');
            let slotSeat = document.querySelector('#ticket .ticket-info li:nth-child(3)');
            let slotID = document.querySelector('#ticket .ticket-info li:nth-child(4)');
            let slotPrice = document.querySelector('#ticket .ticket-info li:nth-child(5)');

            slotUser = slotUser.innerHTML = (user.value);
            slotAge = slotAge.innerHTML = (age.value);
            slotSeat = slotSeat.innerHTML = (Math.floor((Math.random() * 10) + 1));
            slotID = slotID.innerHTML = (Math.floor((Math.random() * 10000) + 90000));

            km = parseInt(km.value);

            if (slotAge == ('Biglietto Standard')) {
                slotPrice.innerHTML = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format(0.21 * km);
            } else if (slotAge == ('Biglietto Young')) {
                slotPrice.innerHTML = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format((0.21 * km) - ((20 / 100) * (0.21 * km)));
            } else {
                slotPrice.innerHTML = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format((0.21 * km) - ((40 / 100) * (0.21 * km)));
            }
        }
    }
)

const btnDel = document.getElementById('btn-delete');
btnDel.addEventListener('click',
    function(){
        ticket.classList.remove('animate__backInLeft');
        ticket.classList.add('animate__backOutLeft');

        user.value = '';
        km.value = '';
        age.value = 'Biglietto Standard';
    }
)