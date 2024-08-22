let display = document.getElementById("display");


const appendToDisplay = (input) => {
    // Append the value that i clicked into the display input
    display.value += input;
}

const calculate = () => {
    try {
        // eval is a function that calculat the result of the input
        display.value = eval(display.value);

        // checked the infinity probleme
        if (display.value === "Infinity" || display.value === "-Infinity") {
            display.value = "Error";
        }
    } catch (e) {
        display.value = "Error";
    }
}

const clearDisplay = () => {
    // Clear the display
    display.value = "";
}


