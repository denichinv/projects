const inputNum = document.getElementById("inputNum");
const result = document.getElementById("result");
const convertFrom = document.getElementById("convertFrom");
const convertTo = document.getElementById("convertTo");

const convertButton = document.getElementById("convertButton");

function convert(unitFrom, unitTo, inputValue) {
  let num = parseFloat(inputValue);

  if (isNaN(num)) {
    return "Invalid input. Please enter a valid number.";
  }

  switch (unitFrom) {
    // weight conversion
    case "Kilograms":
      if (unitTo === "Grams") {
        return num * 1000;
      } else if (unitTo === "Pounds") {
        return num * 2.2;
      } else if (unitTo === "Kilograms") {
        return num;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }

    case "Grams":
      if (unitTo === "Grams") {
        return num;
      } else if (unitTo === "Pounds") {
        return num * 0.0022;
      } else if (unitTo === "Kilograms") {
        return num * 0.001;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }

    case "Pounds":
      if (unitTo === "Grams") {
        return num * 453.6;
      } else if (unitTo === "Pounds") {
        return num;
      } else if (unitTo === "Kilograms") {
        return num * 0.45;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }

    // length conversion
    case "Meters":
      if (unitTo === "Meters") {
        return num;
      } else if (unitTo === "Kilometers") {
        return num * 0.001;
      } else if (unitTo === "Centimeters") {
        return num * 100;
      } else if (unitTo === "Feet") {
        return num * 3.28;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }

    case "Kilometers":
      if (unitTo === "Meters") {
        return num * 1000;
      } else if (unitTo === "Kilometers") {
        return num;
      } else if (unitTo === "Centimeters") {
        return num * 100000;
      } else if (unitTo === "Feet") {
        return num * 30.48;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }
    case "Centimeters":
      if (unitTo === "Meters") {
        return num * 0.01;
      } else if (unitTo === "Kilometers") {
        return num * 0.00001;
      } else if (unitTo === "Centimeters") {
        return num;
      } else if (unitTo === "Feet") {
        return num * 0.0328;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }

    case "Feet":
      if (unitTo === "Meters") {
        return num * 0.3;
      } else if (unitTo === "Kilometers") {
        return num * 0.0003;
      } else if (unitTo === "Centimeters") {
        return num * 30.48;
      } else if (unitTo === "Feet") {
        return num;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }

    // temperature conversion
    case "Celsius":
      if (unitTo === "Fahrenheit") {
        return num * 33.8;
      } else if (unitTo === "Celsius") {
        return num;
      } else if (unitTo === "Kelvin") {
        return num * 274.1;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }

    case "Fahrenheit":
      if (unitTo === "Fahrenheit") {
        return num;
      } else if (unitTo === "Celsius") {
        return num * -17.2;
      } else if (unitTo === "Kelvin") {
        return num * 255.9;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }

    case "Kelvin":
      if (unitTo === "Fahrenheit") {
        return num * -457.9;
      } else if (unitTo === "Celsius") {
        return num * -272.1;
      } else if (unitTo === "Kelvin") {
        return num;
      } else {
        return `${unitFrom} cannot be convert to ${unitTo}`;
      }
  }
}

convertButton.addEventListener("click", () => {
  const unitFromValue = convertFrom.value;
  const unitToValue = convertTo.value;
  const inputValue = inputNum.value;
  result.textContent = convert(unitFromValue, unitToValue, inputValue);
});
