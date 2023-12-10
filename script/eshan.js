const names = documents.getElementById("namee");
const nics = documents.getElementById("nic");
const addresses = document.getElementById("address");
const checkin = document.getElementById("checkindate");
const checkout = document.getElementById("checkoutdate");
const dates = document.getElementById("date");
const numbers = document.getElementById("phone");
const emails = document.getElementById("email");


function bookRoomNow() {
   
    const singleRooms = document.getElementById("singleRooms").value;
    const doubleRooms = document.getElementById("doubleRooms").value;
    const tripleRooms = document.getElementById("tripleRooms").value;
    document.getElementById("currentBookingCost").innerText = currentBookingCost.toFixed(2);
    
    const currentBookingCost = calculateCurrentBookingCost(singleRooms, doubleRooms, tripleRooms,);
    document.getElementById("currentBookingCost").innerText = currentBookingCost.toFixed(2);

    const overallBookingCost = parseFloat(document.getElementById("overallBookingCost").innerText) + currentBookingCost;
    
    document.getElementById("overallBookingCost").innerText = overallBookingCost.toFixed(2);
    document.getElementById("bookingForm").reset();
}


function calculateCurrentBookingCost(singleRooms, doubleRooms, tripleRooms,promoCodes,kids,extrabedQuantity,extrabedChecked) {
    const singleRoomCost = 25000.00;
    const doubleRoomCost = 35000.00;
    const tripleRoomCost = 40000.00;
    const kidCost = 5000.00;
    const bedCost = 8000.00;
    const promoCodeDiscountPercentage = 5;

    const kids = document.getElementById("childrenInput").value;
    const promoCodes = document.getElementById("promoCode").value;
    const extrabedQuantity = parseInt(document.getElementById('bed').nextElementSibling.value);
    const currentBookingCost = (singleRooms * singleRoomCost) + (doubleRooms * doubleRoomCost) + (tripleRooms * tripleRoomCost) +(kids * kidCost)+(extrabedQuantity * bedCost);

    if (promoCodes == 'Promo123') {
        const discountAmount = ((promoCodeDiscountPercentage / 100) * currentBookingCost);
        currentBookingCost -= discountAmount;
    }
    return currentBookingCost;
}

document.addEventListener("DOMContentLoaded", function  () {
    document.getElementById("currentBookingCost").innerText = "0.00";
    document.getElementById("overallBookingCost").innerText = "0.00";
});


//Adventure

