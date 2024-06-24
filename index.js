//How to receive User Input
//1. Easy Way: Create window prompt
//2. Proffessional way: Create HTML Textbox

/* Create Window Prompt
let username;
username = window.prompt("Input Your Username")

console.log(username)
*/

let subscribe = document.getElementById("subscribe");
let visa = document.getElementById("visa");
let mastercard = document.getElementById("mastercard");
let paypal = document.getElementById("paypal");
let subresult = document.getElementById("subresult");
let paymentresult = document.getElementById("paymentresult");
let submit = document.getElementById("myBtn");

submit.onclick = function() {
    if (subscribe.checked) {
        subresult.textContent = "You are Subscribed"
    }
    else {
        subresult.textContent = "You are not Subscribed. Pick a payment plan."
        if (visa.checked) {

        }
    }
}
