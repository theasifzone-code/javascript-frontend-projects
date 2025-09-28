const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchars = ["-", "*", "%", "/", "+", "="];
let output = "";

// define calculate function
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // if = is pressed then calculate the output
        // eval function is used to calculate the output
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        // if AC is pressed then clear the output
        output = "";
    } else if (btnValue === "DEL") {
        // if output is not empty then remove last character
        output = output.toString().slice(0, -1);
        console.log(output);
    } else {
        // if output is empty then return
        if (output === "" && specialchars.includes(btnValue)) return;
        // else add the value to output
        output += btnValue;
    }
    // display the output
    display.value = output;
};

// add event listener to all buttons
buttons.forEach((button) => {
    // if button is clicked then call calculate function
    button.addEventListener("click", (e) => {
        calculate(e.target.dataset.value);
    })
});