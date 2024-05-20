const origin = "HIE-Project/";
const array = ["Nukes/Nukes.html", "Fixing/Fixing.html", "Implementation/Implementation.html"];
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

function Forward() {
    point++;
    if (point == array.length) {
        point -= 1;
    }
    document.getElementById("content").setAttribute("src", "context/" + array[point]);
}

function Backward() {
    point--;
    if (point < 0) {
        point = 0;
    }
    document.getElementById("content").setAttribute("src", "context/" + array[point]);
}
