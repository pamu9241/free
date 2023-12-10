function subValues() {
  event.preventDefault()
        // Get values from input fields
  const name = document.getElementById("name").value;
  const nic = document.getElementById("nic").value;
  const date = document.getElementById("date").value;

  const roomType;
  const roomTypeElements = document.getElementsByName("roomtype");
    for (const i = 0; i < roomTypeElements.length; i++) {
      if (roomTypeElements[i].checked) {
        roomType = roomTypeElements[i].value;
      break;
      }
    }

  const adults = document.getElementById("adultsInput").value;
  const children = document.getElementById("childrenInput").value;
  const wifi = document.getElementsByName("wifi")[0].checked;
  const pool = document.getElementsByName("pool")[0].checked;
  const garden = document.getElementsByName("garden")[0].checked;
  const promoCode = document.getElementById("promoCode").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  //const resultDiv = document.getElementById("result");
  // resultDiv.innerHTML = "Name: " + name + "<br>" + "NIC: " + nic + "<br>" +"Date: "
  //                       + date + "<br>" + "Room Type: " + roomType + "<br>" +
  //                       "Adults: " + adults + "<br>" + "Children: " + children + "<br>" +
  //                       "Wifi: " + wifi + "<br>" + "Pool: " + pool + "<br>" +
  //                       "Garden: " + garden + "<br>" + "Promo Code: " + promoCode + "<br>" +
  //                       "Contact Number: " + phone + "<br>" + "Email: " + email;

  alert(`Thank You ${name}! \n Your booking confirmed in ${date}`);


  
  //Rooms
  let singleRoom= 25000;
  let doubleRoom = 35000;
  let tripleRomm = 40000;

  //Adventure 
  let lkAdults=5000;
  let lkKids=2000;
  let foreignAdults=10000;
  let foreignKids=5000;

  const currentBookingName = "";
  const currentBookingCost = 0;

  const overallBookingName = "";
  const overallBookingCost = 0;

  function subValues() {
      // Get values from input fields
      const name = document.getElementById("name").value;

      // Calculate the cost based on your logic (modify this part accordingly)
      const cost = calculateCost();

      // Update current booking details
      currentBookingName = name;
      currentBookingCost = cost;

      // Display current booking details
      displayCurrentBooking();

      // Update overall booking details
      overallBookingName = currentBookingName;
      overallBookingCost += currentBookingCost;

      // Display overall booking details
      displayOverallBooking();

      // Reset current booking details
      currentBookingName = "";
      currentBookingCost = 0;

      // Reset input fields (you can add more input fields as needed)
      document.getElementById("name").value = "";
  }

  // Function to calculate the cost based on your logic
  function calculateCost() {
      // Replace this with your cost calculation logic
      return 100; // Example cost
  }

  // Function to display current booking details
  function displayCurrentBooking() {
      const currentBookingElement = document.getElementById("currentBooking");
      const currentCostElement = document.getElementById("currentCost");

      currentBookingElement.innerHTML = "Name: " + currentBookingName;
      currentCostElement.innerHTML = "Cost: $" + currentBookingCost;
  }

  // Function to display overall booking details
  function displayOverallBooking() {
      const overallBookingElement = document.getElementById("overallBooking");
      const overallCostElement = document.getElementById("overallCost");

      overallBookingElement.innerHTML = "Name: " + overallBookingName;
      overallCostElement.innerHTML = "Cost: $" + overallBookingCost;
}
}
