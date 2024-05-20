const questions = ["how many gallons of fuel do you use when you drive everday:20", "What is your monthly electric bill:3.5"]
let pointer = 0;
let emissions = 0.0;
window.onload = function() {
    document.getElementById("Question").innerText = questions[0].split(":")[0];
    if (pointer + 1 == questions.length) {
        document.getElementById("Submit").innerText = "Submit";
    }
}

function Submit() {
    if(document.getElementById("Submit").innerText == "Reset") {
        pointer = 0;
        emissions = 0;
        document.getElementById("Question").innerText = questions[0].split(":")[0];
        document.getElementById("Answer").value = null;
        if (pointer + 1 == questions.length) {
            document.getElementById("Submit").innerText = "Submit";
        } else {
            document.getElementById("Submit").innerText = "Next";
        }
        return;
    }
    if (pointer < questions.length) {
        emissions += document.getElementById("Answer").value * parseFloat(questions[pointer].split(":")[1]);
        pointer++;
        if(pointer + 1 == questions.length) {
            document.getElementById("Submit").innerText = "Submit";
        }
        if (pointer < questions.length) {
            document.getElementById("Question").innerText = questions[pointer].split(":")[0];
            document.getElementById("Answer").value = null;
        }
    }
    if (pointer == questions.length) {
        document.getElementById("Question").innerText = "You produce " + emissions.toString() + " pounds of carbon emissions to counter that you need to donate in dollars around";
        document.getElementById("Answer").value = emissions * (0.85616438356 / 21.91);
        document.getElementById("Submit").innerText = "Reset";
    }
}
