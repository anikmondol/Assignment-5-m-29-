document.getElementById('tickets_btn').addEventListener('click', function () {
    showElementById('main');
    hideElementById('header');
    hideElementById('footer');
    
});


const allSeat = document.getElementsByClassName('count_seat');
let count = 0;



for (const seat of allSeat) {

    seat.addEventListener('click', function (event) {




        count = count + 1;
        

        if (count >= 5) {
            return alert('already 4 seat selected');
        }
       

        
        seat.style.backgroundColor = 'green';
        seat.style.color = 'white';
        
        

        




        const seatTextNumber = getInnerText('seats_numbers');
        const seatNumber = parseInt(seatTextNumber);

        

        const currentSeatNumber = seatNumber - 1;


        setInnerText('seats_numbers', currentSeatNumber);



        // ----------------------------------

        const setText = seat.innerHTML;
        const ticketPrice = getInnerTextElement('ticket_price').innerText;
        const price = parseInt(ticketPrice);
        const Economoy = 'Economoy';


        event.target.setAttribute("disabled", true);  

        
        








        // -----------------------------------------

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


        
        divContainer.appendChild(div);


       
        // ------------------------------------

       
        const totalPrice = getInnerText('total_total');
        const totalPriceNumber = parseInt(totalPrice);



       
        setInnerText('total_total', (price + totalPriceNumber));

        

    //    ------------------------------------

 


    grandTotal('grand_total', (price + totalPriceNumber));


    
    setInnerText('count_total', count);


    


    

    })





}



function btnNext(e){
    const phoneNumber = document.getElementById('phone_number').value;
    const btn_next = document.getElementById('btn_next');



    if(phoneNumber.length >= 11){
       if(count >= 1){
        console.log('ok');
        btn_next.classList.remove('disable');

        

        showElementById('modal');

        hideElementById('main')
        hideElementById('header')
        hideElementById('footer')

       }
    }else{
        alert('select at least one seat && give me your 11 dight phone number');
    }
}


//    ----------------------------


function openTheHomePage(){

    
    showElementById('header');

    hideElementById('modal');

    

}


document.getElementById('apply').addEventListener('click', function () {
    const couponInput = document.getElementById('coupon_input').value;
    let grand_total = document.getElementById('grand_total').innerText;

    if(couponInput === 'NEW15'){
        grand_total = grand_total - grand_total*0.15;
        setInnerText('grand_total', grand_total);
        hideElementById('couppon_div');
    }else if(couponInput === 'Couple 20'){
        grand_total = grand_total - grand_total*0.20;
        setInnerText('grand_total', grand_total);
        hideElementById('couppon_div');
    }else{
        alert('invalid input')
    }


    setInnerText('grand_total', grand_total);
    

})



