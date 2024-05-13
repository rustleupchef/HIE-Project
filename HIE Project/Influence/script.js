const origin = "HIE-Project/HIE%20Project/";
const array = [];
let point = -1;

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
