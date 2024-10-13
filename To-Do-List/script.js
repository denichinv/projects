let array = [];

function displayArray() {
  let arrayContainer = document.getElementById("arrayElements");
  arrayContainer.innerHTML = "";

  array.forEach((task, index) => {
    let elementDiv = document.createElement("div");
    elementDiv.textContent = `Activity ${index + 1}: ${task}`;
    arrayContainer.appendChild(elementDiv);
  });
}

function addElement() {
  let elementInput = document.getElementById("elementInput").value.trim();

  if (elementInput !== "") {
    array.push(elementInput);
    displayArray();
  } else {
    alert("Please enter a valid activity!");
  }
}

function removeElement(type) {
  if (array.length !== 0) {
    if (type === "first") {
      array.shift();
    } else if (type === "last") {
      array.pop();
    } else {
      alert("Invalid operation!");
    }
  } else {
    alert("List is empty!");
  }
  displayArray();
}
