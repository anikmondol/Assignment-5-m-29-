document.getElementById('tickets_btn').addEventListener('click', function () {
    showElementById('main');
});


const allSeat = document.getElementsByClassName('count_seat');
let count = 0;



for (const seat of allSeat) {

    seat.addEventListener('click', function (e) {
        count = count + 1;
        setInnerText('count_total', count);

        seat.style.backgroundColor = 'green';
        seat.style.color = 'white';



        const setText = seat.innerHTML;
        const ticketPrice = document.getElementById('ticket_price').innerText;
        const price = parseInt(ticketPrice);
        const Economoy = 'Economoy';








        const divContainer = getInnerTextElement('div_container');

        const div = document.createElement('div');
        div.classList.add('js')


        const p = document.createElement('p');
        p.innerText = setText;

        const p1 = document.createElement('p');
        p1.innerText = Economoy;

        const p2 = document.createElement('p');
        p2.innerText = price;

        


        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);

        divContainer.appendChild(div)

       
    
        

       








    })





}



