const convertBtn = document.getElementById("convert");
const numberInput = document.getElementById("number");
const conversion = document.getElementById("conversionHere");

const decimalToRoman = (num) => {
    const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const decimalVals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = "";
    for (let i = 0; i < decimalVals.length; i++) {
        while (num >= decimalVals[i]) {
            result += romanNumerals[i];
            num -= decimalVals[i];
        }
    }

    return result;
};

const validateInput = () => {
    const inputVal = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(inputVal) || inputVal < 1 || inputVal > 3999) {
        conversion.innerText = "Please enter a valid number between 1 and 3999.";
        return;
    }
    conversion.innerText = decimalToRoman(inputVal);
    return;
};

convertBtn.addEventListener("click", validateInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        validateInput();
    }
});




