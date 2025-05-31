function buttonClickEffect(button) {
    button.classList.add("clicked");
    setTimeout(() => {
        button.classList.remove("clicked");
    }, 100);
}

function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

function plusMinus() {
    let display = document.getElementById("display");
    if (display.value.charAt(0) === '-') {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        buttonClickEffect(button);
    });
});
