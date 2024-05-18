const origin = "HIE Project/";
const array = ["Quiz/Quiz.html"];
let point = 0;

window.onload = function() {
    document.getElementById("content").setAttribute("src", "context/" + array[0]);
}

function StatusQuo() {
    window.location.pathname = origin + "StatusQuo.html";
}

function NuclearEnergy() {
    window.location.pathname = origin + "NuclearEnergy.html"
}

function Influence() {
    window.location.pathname = origin + "Influence.html";
}

function Submit() {
    
}
