 // get reference to interactive elements
const names=document.getElementById("name");
const nics=document.getElementById("nic");
const addresses=document.getElementById("adddress");
const checksin=document.getElementById("checksindate");
const checksout=document.getElementById("checksoutdate");
const dates=document.getElementById("date");
const phoneNo=document.getElementById("phone");
const email=document.getElementById("email");
const promo=document.getElementById("promoCode");

const singlerooms=document.getElementById("singleRoom");
const doublerooms=document.getElementById("doubleRoom");
const triplerooms=document.getElementById("tripleRooms");

const wi_fi=document.getElementById("wifi");
const pools=document.getElementById("pool");
const gardens=document.getElementById("garden");
const beds=document.getElementById("bed");

const adultsInputs=document.getElementById("adultsInput");
const childrenInputs=document.getElementById("childrenInput");

const localsDiving=document.getElementById("local");
const localAdults=document.getElementById("ladults");
const localKids=document.getElementById("lkids");

const foreginDiving=document.getElementById("foregin");
const foreignAdults=document.getElementById("fadults");
const foreignKids=document.getElementById("fkids");

const guides=document.getElementById("guide");

//submit button
const subbtn=document.getElementById("add");

//results button
const results=document.getElementById9("output");


subbtn.addEventListener("click", selectedRoom);


let aSingleRoom;
let aDoubleRoom;
let aTripleRoom;
let sigleRoomsCost;
let doubleRoomCost;
let tripleRoomCost;

initialise();

function initialise() {
    aSingleRoom=25000;
    aDoubleRoom=35000
    aTripleRoom=45000
    sigleRoomsCost=0
    doubleRoomCost=0
    tripleRoomCost=0
}

function roomscost(){
    if(this.value=="single"){
        // if(this.checked){
           aSingleRoom=25000
           sigleRoomsCost=aSingleRoom*singlerooms
        }
    if(this.value=="double"){
        aDoubleRoom=35000
        doubleRoomCost=aDoubleRoom*doublerooms
    }
    if(this.value=="triple"){
        aTripleRoom=45000
        tripleRoomCost=aTripleRoom*triplerooms
    }

    totalRoomsCost=sigleRoomsCost+doubleRoomCost+tripleRoomCost
}
alert(totalRoomsCost);
// function selectedRoom(){
//     results.innerText = `${names} your room cost is LKR ${totalRoomsCost}`
// }

// function checkLogo() {
//     console.log("check logo");
//     if (this.value == "front") {
//         if (this.checked) {
//             logoCost += 3;
//             frontLogo = "with front logo"
//         } else {
//             logoCost -= 3;
//             frontLogo = "no front logo"
//         }
//     } else {
//         if (this.checked) {
//             logoCost += 3;
//             backLogo = "with back logo"
//         } else {
//             logoCost -= 3;
//             backLogo = "no back logo"
//         }
//     }

//     cost = sizeCost + logoCost;
//     txtCost.innerText = `${cost.toFixed(2)}`;
// }






































// // implement event handlers
// function initialise() {
//     //console.log("initialize");
//     sizeCost = 25.00;
//     logoCost = 0;
//     frontLogo = "no front logo";
//     backLogo = "no back logo";
//     size = "medium";
   
// }

// function checkSize() {
//     console.log("check size");
//     if (this.value == "small") {
//         sizeCost = 24.00;
//         size = "small"
//     }
//     else if (this.value == "medium") {
//         sizeCost = 25.00;
//         size = "medium"
//     }
//     else {
//         sizeCost = 26.00;
//         size = "large"
//     }

//     cost = sizeCost + logoCost;
//     txtCost.innerText = `${cost.toFixed(2)}`;
// }





















