var conversionForm = document.getElementById("conversion-form");
var inputField = document.getElementById("numeric-value");
var conversionType = document.getElementById("conversion-type");
var resultArea = document.getElementById("conversion-result");

conversionForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var numericValue = parseFloat(inputField.value);
    var selectedIndex = conversionType.selectedIndex;

    var options = document.getElementsByTagName("option");
    var conversionChoice = options[selectedIndex].value;

    var result;

    if (conversionChoice === "inch to centimeter") {
        result = numericValue * 2.54;
        resultArea.innerHTML = numericValue + " inches is " + result.toFixed(2) + " centimeters";
    } else if (conversionChoice === "foot to centimeter") {
        result = numericValue * 30.48;
        resultArea.innerHTML = numericValue + " feet is " + result.toFixed(2) + " centimeters";
    } else if (conversionChoice === "yard to meter") {
        result = numericValue * 0.91;
        resultArea.innerHTML = numericValue + " yards is " + result.toFixed(2) + " meters";
    } else if (conversionChoice === "mile to kilometer") {
        result = numericValue * 1.61;
        resultArea.innerHTML = numericValue + " miles is " + result.toFixed(2) + " kilometers";
    } else if (conversionChoice === "centimeter to inch") {
        result = numericValue * 0.39;
        resultArea.innerHTML = numericValue + " centimeters is " + result.toFixed(2) + " inches";
    } else if (conversionChoice === "centimeter to foot") {
        result = numericValue * 0.0328;
        resultArea.innerHTML = numericValue + " centimeters is " + result.toFixed(2) + " feet";
    } else if (conversionChoice === "meter to yard") {
        result = numericValue * 1.09;
        resultArea.innerHTML = numericValue + " meters is " + result.toFixed(2) + " yards";
    } else if (conversionChoice === "kilometer to mile") {
        result = numericValue * 0.62;
        resultArea.innerHTML = numericValue + " kilometers is " + result.toFixed(2) + " miles";
    } else {
        resultArea.innerHTML = "Invalid conversion choice.";
    }
});