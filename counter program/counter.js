const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const count = document.getElementById("count");
let number = 0;


increase.onclick = function() {
    number++;
    document.getElementById("count").textContent = number;
}

decrease.onclick = function() {
    number--;
    document.getElementById("count").textContent = number;
}

document.getElementById("reset").onclick = function() {
    document.getElementById("count").textContent = 0;

}