const currentBookingName = "";
const currentBookingCost = 0;

const overallBookingName = "";
const overallBookingCost = 0;

function calculateRoomCost(roomType, roomCount) {
    const roomCost = 0;
    switch (roomType) {
        case "single":
            roomCost = 25000;
            break;
        case "double":
            roomCost = 35000;
            break;
        case "triple":
            roomCost = 40000;
            break;
        default:
            roomCost = 0;
    }
    return roomCost * roomCount;
}

function calculateAdventureCost(adventureType, guideNeeded) {
    const adventureCost = 0;
    switch (adventureType) {
        case "localAdult":
            adventureCost = 5000;
            break;
        case "localKid":
           adventureCost = 2000;
            break;
        case "foreignAdult":
            adventureCost = 10000;
            break;
        case "foreignKid":
            adventureCost = 5000;
            break;
        default:
            adventureCost = 0;
    }

    if (guideNeeded) {
        adventureCost += (guideNeeded === 'adult') ? 1000 : 500;
    }

    return adventureCost;
}

function updateCurrentBooking() {
    const name = document.getElementById("name").value;
    const singleRooms = parseInt(document.getElementById("singleRooms").value) || 0;
    const doubleRooms = parseInt(document.getElementById("doubleRooms").value) || 0;
    const tripleRooms = parseInt(document.getElementById("tripleRooms").value) || 0;

    const roomType = document.querySelector('input[name="roomtype"]:checked');
    const roomCost = (roomType) ? calculateRoomCost(roomType.id, singleRooms + doubleRooms + tripleRooms) : 0;
    const adventureType = document.querySelector('input[name="adventuretype"]:checked');
    const guideNeeded = document.querySelector('input[name="guide"]:checked');
    const adventureCost = (adventureType) ? calculateAdventureCost(adventureType.id, (guideNeeded) ? guideNeeded.id : null) : 0;


    currentBookingCost = roomCost + adventureCost;
    currentBookingName = name;

    displayCurrentBooking();
}

    function displayCurrentBooking() {
        const currentBookingElement = document.getElementById("currentBooking");
        const currentCostElement = document.getElementById("currentCost");

        currentBookingElement.innerHTML = "Name: " + currentBookingName;
        currentCostElement.innerHTML = "Cost: LKR" + currentBookingCost.toLocaleString('en-US');
    }

    // Function to handle form submission
    function subValues(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Update overall booking details
        overallBookingName = currentBookingName;
        overallBookingCost += currentBookingCost;

        // Display overall booking details
        displayOverallBooking();

        // Reset current booking details and cost
        currentBookingName = "";
        currentBookingCost = 0;

        // Reset input fields
        document.getElementById("name").value = "";
        document.getElementById("singleRooms").value = "";
        document.getElementById("doubleRooms").value = "";
        document.getElementById("tripleRooms").value = "";

        // Uncheck radio buttons
        const roomTypeRadios = document.querySelectorAll('input[name="roomtype"]');
        roomTypeRadios.forEach(radio => radio.checked = false);

        const adventureTypeRadios = document.querySelectorAll('input[name="adventuretype"]');
        adventureTypeRadios.forEach(radio => radio.checked = false);

        const guideRadios = document.querySelectorAll('input[name="guide"]');
        guideRadios.forEach(radio => radio.checked = false);
    }

    // Function to display overall booking details
    function displayOverallBooking() {
        const overallBookingElement = document.getElementById("overallBooking");
        const overallCostElement = document.getElementById("overallCost");

        overallBookingElement.innerHTML = "Name: " + overallBookingName;
        overallCostElement.innerHTML = "Cost: LKR" + overallBookingCost.toLocaleString('en-US');
    }

