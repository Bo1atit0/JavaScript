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
        subresult.textContent = "You are Subscribed";
        paymentresult.textContent = "To complete Subscription, Please pick a Payment Plan"

        if (visa.checked) {
            paymentresult.textContent = "You are paying with Visa";
        }
        else if (mastercard.checked) {
            paymentresult.textContent = "You are paying with Mastercard";
        }
        else if (paypal.checked) {
            paymentresult.textContent = "You are paying with Paypal";
        }
    }
    else {
        subresult.textContent = "You are not Subscribed. Subscribe First, then pick a Payment plan."
    }
       /* if (visa.checked) {
            paymentresult.textContent("You are paying with Visa")
        }
        else if (mastercard.checked) {
            paymentresult.textContent = "You are paying with Mastercard";
        }
        else if (paypal.checked) {
            paymentresult.textContent = "You are paying with Paypal";
        }
    }*/
}
