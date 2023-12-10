function calculateRoomCost(single, double, triple, kidsAbove5, extraBed) {
    const singleCost = 25000;
    const doubleCost = 35000;
    const tripleCost = 40000;
    const kidsAbove5Cost = 5000;

    let totalCost = single * singleCost + double * doubleCost + triple * tripleCost;

    // Add extra costs for kids above 5 and extra bed
    totalCost += kidsAbove5 * kidsAbove5Cost;
    totalCost += extraBed * 8000;

    return totalCost;
}

// Function to calculate adventure booking cost
function calculateAdventureCost(localAdults, localKids, foreignAdults, foreignKids, withGuide) {
    const localAdultsCost = 5000;
    const localKidsCost = 2000;
    const foreignAdultsCost = 10000;
    const foreignKidsCost = 5000;
    const guideCost = 1000; // Extra cost if a guide is required

    let totalCost = localAdults * localAdultsCost + localKids * localKidsCost +
                    foreignAdults * foreignAdultsCost + foreignKids * foreignKidsCost;

    // Add extra cost if a guide is required
    if (withGuide) {
        totalCost += guideCost;
    }

    return totalCost;
}

// Function to update the current booking display
function updateCurrentBookingDisplay(cost) {
    document.getElementById('currentBookingCost').textContent = cost.toFixed(2);
}

// Function to update the overall booking display
function updateOverallBookingDisplay(cost) {
    document.getElementById('overallBookingCost').textContent = cost.toFixed(2);
}

// Function to handle room booking
function bookRoomNow() {
    // Fetch values from form
    const singleRooms = parseInt(document.getElementById('singleRooms').value) || 0;
    const doubleRooms = parseInt(document.getElementById('doubleRooms').value) || 0;
    const tripleRooms = parseInt(document.getElementById('tripleRooms').value) || 0;
    const kidsAbove5 = parseInt(document.getElementById('childrenInput').value) || 0;
    const extraBed = parseInt(document.getElementById('extrabeds').value) || 0;

    // Calculate room booking cost
    const roomCost = calculateRoomCost(singleRooms, doubleRooms, tripleRooms, kidsAbove5, extraBed);

    // Update current booking display
    updateCurrentBookingDisplay(roomCost);

    // Update overall booking display
    const overallBookingCost = parseFloat(document.getElementById('overallBookingCost').textContent) || 0;
    updateOverallBookingDisplay(overallBookingCost + roomCost);

    // Reset current booking
    updateCurrentBookingDisplay(0);
}

// Function to handle adventure booking
function bookAdvNow() {
    // Fetch values from form
    const localAdults = parseInt(document.getElementById('ladults').value) || 0;
    const localKids = parseInt(document.getElementById('lchildren').value) || 0;
    const foreignAdults = parseInt(document.getElementById('fadults').value) || 0;
    const foreignKids = parseInt(document.getElementById('fchildren').value) || 0;
    const withGuide = document.getElementById('adultguide').checked || document.getElementById('kidsguide').checked;

    // Calculate adventure booking cost
    const advCost = calculateAdventureCost(localAdults, localKids, foreignAdults, foreignKids, withGuide);

    // Display booking confirmation message
    alert('Thank you for booking the adventure!\nDetails: Diving');

    // Update overall booking display
    const overallBookingCost = parseFloat(document.getElementById('overallBookingCost').textContent) || 0;
    updateOverallBookingDisplay(overallBookingCost + advCost);

    // Reset current booking
    updateCurrentBookingDisplay(0);
}

// Function to add the current booking to favorites (local storage)
function addToFavorites() {
    // Save the current booking to local storage
    const currentBooking = {
        cost: parseFloat(document.getElementById('currentBookingCost').textContent) || 0
        // Add other relevant details as needed
    };

    localStorage.setItem('favoriteBooking', JSON.stringify(currentBooking));
}

// Function to check loyalty points
function checkLoyaltyPoints() {
    // Fetch the loyalty points from local storage
    const loyaltyPoints = localStorage.getItem('loyaltyPoints') || 0;

    // Display loyalty points to the user
    alert(`Your loyalty points: ${loyaltyPoints}`);
}

// Event listeners for buttons
document.getElementById('bookRoomsBtn').addEventListener('click', bookRoomNow);
document.getElementById('bookadvBtn').addEventListener('click', bookAdvNow);
document.getElementById('addToFavoritesBtn').addEventListener('click', addToFavorites);
document.getElementById('checkLoyaltyBtn').addEventListener('click', checkLoyaltyPoints);