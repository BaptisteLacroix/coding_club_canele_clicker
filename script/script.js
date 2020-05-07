var nbCaneles = 0;
var nbFour = 0;

function init() {

}

function addFour() {
    nbFour++;
}

function cook() {
    console.log(nbFour);
    nbCaneles += 25*nbFour;
    updateDisplay();
}

function updateDisplay() {
    var baliseNb = document.getElementById("chiffre");
    baliseNb.innerHTML = nbCaneles;
}