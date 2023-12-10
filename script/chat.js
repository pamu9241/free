
// JavaScript code for calculations and updating values
document.addEventListener("DOMContentLoaded", function () {
    // Set initial values
    document.getElementById("currentBookingCost").innerText = "0.00";
    document.getElementById("overallBookingCost").innerText = "0.00";
});

function bookRoomNow() {
    // Perform booking calculations here

    // Get values from the form
    // You need to modify this part based on your form structure
    const singleRooms = document.getElementById("singleRooms").value;
    const doubleRooms = document.getElementById("doubleRooms").value;
    const tripleRooms = document.getElementById("tripleRooms").value;
    // Add more constiables as needed

    // Calculate the current booking cost
    const currentBookingCost = calculateCurrentBookingCost(singleRooms, doubleRooms, tripleRooms);
    
    // Update the current booking cost display
    document.getElementById("currentBookingCost").innerText = currentBookingCost.toFixed(2);

    // Update the overall booking cost (sum of all current bookings)
    const overallBookingCost = parseFloat(document.getElementById("overallBookingCost").innerText) + currentBookingCost;
    document.getElementById("overallBookingCost").innerText = overallBookingCost.toFixed(2);

    // Reset the form
    document.getElementById("bookingForm").reset();
}

function calculateCurrentBookingCost(singleRooms, doubleRooms, tripleRooms) {
    // Use the provided pricing information to calculate the current booking cost
    const singleRoomCost = 25000.00;
    const doubleRoomCost = 35000.00;
    const tripleRoomCost = 40000.00;

    const currentBookingCost = (singleRooms * singleRoomCost) + (doubleRooms * doubleRoomCost) + (tripleRooms * tripleRoomCost);

    // Add additional calculations based on your requirements

    return currentBookingCost;
}