

const names = documents.getElementById("name");
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
    const currentBookingCost = calculateCurrentBookingCost(singleRooms, doubleRooms, tripleRooms);
    document.getElementById("currentBookingCost").innerText = currentBookingCost.toFixed(2);
    const overallBookingCost = parseFloat(document.getElementById("overallBookingCost").innerText) + currentBookingCost;
    document.getElementById("overallBookingCost").innerText = overallBookingCost.toFixed(2);
    
    const comfirm = `${singleRooms} asdfghjk`;
    alert(comfirm);
    
    document.getElementById("bookingForm").reset();   
}

function calculateCurrentBookingCost(singleRooms, doubleRooms, tripleRooms) {
    const singleRoomCost = 25000.00;
    const doubleRoomCost = 35000.00;
    const tripleRoomCost = 40000.00;
    const kidCost = 5000.00;
    const bedCost = 8000.00;
    const promoCodeDiscountPercentage = 5;

    const kids = document.getElementById("childrenInput").value;
    const beds =document.getElementById("beds").value;
    const promoCodes=document.getElementById("promoCode").value;

    const currentBookingCost = (singleRooms * singleRoomCost) + (doubleRooms * doubleRoomCost) + (tripleRooms * tripleRoomCost)+(kids * kidCost) +(beds * bedCost);

    if (promoCodes == 'Promo123') {
        const discountAmount = ((promoCodeDiscountPercentage / 100) * currentBookingCost);
        currentBookingCost -= discountAmount;
    }
    return currentBookingCost;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentBookingCost").innerText = "0.00";
    document.getElementById("overallBookingCost").innerText = "0.00";
});


// Add to favorites in local storage
document.getElementById("addToFavoritesBtn").addEventListener("click", roomsaddToFavorites);
document.getElementById("checkLoyaltyPointsBtn").addEventListener("click", checkLoyaltyPoints);

function roomsaddToFavorites() {
    const names = documents.getElementById("name");
    const nics = document.getElementById("nics");
    const addresses = document.getElementById("address");
    const checkin = document.getElementById("checkindate");



    // Assign values to other variables similarly

    // Check if elements exist before accessing their values
    const nicsValue = nics ? nics.value : "";
    // Assign values to other variables similarly

    const favoriteBooking = {
        names: names,
        nics: nicsValue,
        addresses: addresses,
    };

    localStorage.setItem("favoriteBooking", JSON.stringify(favoriteBooking));
    const retrievedBooking = JSON.parse(localStorage.getItem("favoriteBooking"));

    alert("Booking added to favorites!");
}

function checkLoyaltyPoints() {
    const loyaltyPointsPerRoom = 20;
    const singleRooms = parseInt(document.getElementById("singleRooms").value) || 0;
    const doubleRooms = parseInt(document.getElementById("doubleRooms").value) || 0;
    const tripleRooms = parseInt(document.getElementById("tripleRooms").value) || 0;

    const totalRooms = singleRooms + doubleRooms + tripleRooms;
    const loyaltyPoints = totalRooms > 3 ? totalRooms * loyaltyPointsPerRoom : 0;

    localStorage.setItem("loyaltyPoints", loyaltyPoints);
    alert(`You have earned ${loyaltyPoints} loyalty points!`);
}


// Add event listeners for the new buttons
document.getElementById("addToFavoritesBtn").addEventListener("click", roomsaddToFavorites);
document.getElementById("checkLoyaltyPointsBtn").addEventListener("click", checkLoyaltyPoints);
























//Javascript for Adventure Booking

function calculateAdventureCost() {
    // Diving costs fot lacal & foreign
    const LOCAL_ADULT_COST = 5000;
    const LOCAL_KID_COST = 2000;
    const FOREIGN_ADULT_COST = 10000;
    const FOREIGN_KID_COST = 5000;
    const GUIDE_ADULT_COST = 1000;
    const GUIDE_KID_COST = 500;

    // Get form values
    const advname =document.getElementById('username').value;
    const localAdults = parseInt(document.getElementById('localAdults').value);
    const localKids = parseInt(document.getElementById('localKids').value);
    const foreignAdults = parseInt(document.getElementById('foreignAdults').value);
    const foreignKids = parseInt(document.getElementById('foreignKids').value);
    const extraChargeAdult = document.getElementById('extraChargeAdult').checked;
    const extraChargeKids = document.getElementById('extraChargeKids').checked;

    // Calculate individual costs
    const totalLocalAdultCost = localAdults * LOCAL_ADULT_COST;
    const totalLocalKidCost = localKids * LOCAL_KID_COST;
    const totalForeignAdultCost = foreignAdults * FOREIGN_ADULT_COST;
    const totalForeignKidCost = foreignKids * FOREIGN_KID_COST;

    // Calculate guide costs if selected
    const guideCost = (extraChargeAdult ? GUIDE_ADULT_COST : 0) + (extraChargeKids ? GUIDE_KID_COST : 0);

    // Calculate total cost
    const totalCost = totalLocalAdultCost + totalLocalKidCost + totalForeignAdultCost + totalForeignKidCost + guideCost;


    // Update current booking cost
    document.getElementById('currentBookingCost').innerText = totalCost.toFixed(2);

    // Update overall booking cost
    const overallBookingCost = parseFloat(document.getElementById('overallBookingCost').innerText) + totalCost;
    document.getElementById('overallBookingCost').innerText = overallBookingCost.toFixed(2);

    // Display adventure details in confirmation message
    const confirmationMessage = `Thank you for booking the diving adventure!\n\nDetails:\nLocal Adults: ${localAdults}\nLocal Kids: ${localKids}\nForeign Adults: ${foreignAdults}\nForeign Kids: ${foreignKids}\nGuide: ${extraChargeAdult ? 'Yes (Adult)' : 'No'}, ${extraChargeKids ? 'Yes (Kid)' : 'No'}\nTotal Cost: ${totalCost.toFixed(2)} LKR`;

    // Display confirmation message
    alert(confirmationMessage);

    // Reset form and booking details
    document.getElementById('adventureBookingForm').reset();
    document.getElementById('currentBookingCost').innerText = '0.00';
}
