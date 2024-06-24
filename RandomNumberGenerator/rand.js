let min;
let max;
let randomNumber;

document.getElementById("generate").onclick = function() {
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);

    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").value = randomNumber;
}