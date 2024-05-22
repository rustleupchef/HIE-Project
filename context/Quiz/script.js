const questions = ["how many gallons of fuel do you use when you drive everday:20", "What is your monthly electric bill:0.28767123287"]
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
        document.getElementById("Answer").readOnly = false;
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
        document.getElementById("Question").innerText = "You produce " + emissions.toString() + " pounds of carbon dioxide a day to counter this you need to donate in US dollars around";
        document.getElementById("Answer").value = emissions * (0.85616438356 / 21.91);
        document.getElementById("Answer").readOnly = true;
        document.getElementById("Submit").innerText = "Reset";
    }
}
