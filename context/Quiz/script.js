const questions = ["how many gallons of fuel do you use when you drive everday:20"]
let pointer = 0;
let emissions = 0;
window.onload = function() {
    document.getElementById("Question").innerText = questions[0].split(":")[0];
}

function Submit() {
    if (pointer == questions.length) {
        document.getElementById("Question").innerText = "You produce " + emissions.toString() + " pounds of carbon emissions to counter that you need to donate in dollars around";
        document.getElementById("Answer").value = emissions;
    }
    if (pointer < questions.length) {
        pointer++;
        emissions += document.getElementById("Answer").value * parseInt(questions[pointer].split(":")[1]);
    }
}
