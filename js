const input = document.getElementById("input");
const inputType = document.getElementById("input-type");
const conversionType = document.getElementById("conversion-type");
const output = document.getElementById("output");
const btn = document.querySelector("input[type='button']");

function convertTemperature() {
    const inputValue = parseFloat(input.value);
    const inputTypeValue = inputType.value;
    const conversionTypeValue = conversionType.value;

    if (inputValue && inputTypeValue && conversionTypeValue) {
        if (inputTypeValue == "celcius" && conversionTypeValue == "fahrenheit") {
            output.value = (inputValue * (9 / 5)) + 32;
        } else if (
            inputTypeValue == "celcius" &&
            conversionTypeValue == "kelvin"
        ) {
            output.value = inputValue + 273.15;
        } else if (
            inputTypeValue == "fahrenheit" &&
            conversionTypeValue == "celcius"
        ) {
            output.value = (inputValue - 32) * (5 / 9);
        } else if (
            inputTypeValue == "fahrenheit" &&
            conversionTypeValue == "kelvin"
        ) {
            output.value = (inputValue - 32) * (5 / 9) + 273.15;
        } else if (
            inputTypeValue == "kelvin" &&
            conversionTypeValue == "celcius"
        ) {
            output.value = inputValue - 273.15;
        } else if (
            inputTypeValue == "kelvin" &&
            conversionTypeValue == "fahrenheit"
        ) {
            output.value = (inputValue - 273.15) * (9 / 5) + 32;
        }
    }
    else {
        alert("Please select all the fields");
    }
}

btn.addEventListener("click", convertTemperature);
