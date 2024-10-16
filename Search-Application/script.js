const fruitsArray = [
  {
    name: "Apple",
    nutrition: {
      calories: 95,
      carbs: "25g",
      fiber: "4.4g",
      sugar: "19g",
      protein: "0.5g",
    },
  },
  {
    name: "Banana",
    nutrition: {
      calories: 105,
      carbs: "27g",
      fiber: "3.1g",
      sugar: "14g",
      protein: "1.3g",
    },
  },
  {
    name: "Orange",
    nutrition: {
      calories: 62,
      carbs: "15g",
      fiber: "3.1g",
      sugar: "12g",
      protein: "1.2g",
    },
  },
  {
    name: "Strawberry",
    nutrition: {
      calories: 33,
      carbs: "8g",
      fiber: "2g",
      sugar: "4.9g",
      protein: "0.7g",
    },
  },

  {
    name: "Grapes",
    nutrition: {
      calories: 69,
      carbs: "18g",
      fiber: "0.9g",
      sugar: "16g",
      protein: "0.7g",
    },
  },
  {
    name: "Mango",
    nutrition: {
      calories: 99,
      carbs: "25g",
      fiber: "2.6g",
      sugar: "23g",
      protein: "1.4g",
    },
  },
  {
    name: "Watermelon",
    nutrition: {
      calories: 30,
      carbs: "8g",
      fiber: "0.4g",
      sugar: "6g",
      protein: "0.6g",
    },
  },
  {
    name: "Blueberry",
    nutrition: {
      calories: 57,
      carbs: "14g",
      fiber: "2.4g",
      sugar: "9.7g",
      protein: "0.7g",
    },
  },
  {
    name: "Kiwi",
    nutrition: {
      calories: 42,
      carbs: "10g",
      fiber: "2.1g",
      sugar: "6g",
      protein: "0.8g",
    },
  },
];

function performSearch() {
  const inputField = document.querySelector("#inputField").value.toLowerCase();

  const results = searchArray(fruitsArray, inputField);

  //Display the results
  const resultContainer = document.querySelector("#resultContainer");
  resultContainer.innerHTML = "";
  resultContainer.style.visibility = "visible";

  if (results.length > 0) {
    for (const fruit of results) {
      const h1 = document.createElement("h1");
      const ul = document.createElement("ul");
      h1.textContent = fruit.name;

      for (const info in fruit.nutrition) {
        const li = document.createElement("li");
        li.textContent = `${info}: ${fruit.nutrition[info]}`;
        ul.appendChild(li);
      }
      resultContainer.appendChild(h1);
      resultContainer.appendChild(ul);
    }
  } else {
    const h1 = document.createElement("h1");
    h1.textContent = "No Matches Found";
    resultContainer.appendChild(h1);
  }
}

function searchArray(array, input) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.toLowerCase().includes(input)) {
      result.push(array[i]);
    }
  }
  return result;
}

const button = document.querySelector("#searchButton");
button.addEventListener("click", performSearch);
