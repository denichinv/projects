let array = [];

function displayArray() {
  let arrayContainer = document.getElementById("arrayElements");
  arrayContainer.innerHTML = "";

  array.forEach((task, index) => {
    let elementDiv = document.createElement("div");
    elementDiv.textContent = `ELement ${index + 1}: ${task}`;
    arrayContainer.appendChild(elementDiv);
  });
}

function addElement() {
  let elementInput = document.getElementById("elementInput").value.trim();

  if (elementInput !== "") {
    array.push(elementInput);
    displayArray();
  } else {
    alert("Please.Enter valid element!");
  }
}

function removeElement(type) {
  if (array.length !== 0) {
    if (type === "first") {
      array.shift();
    } else if (type === "last") {
      array.pop();
    } else {
      alert("Invalid operation");
    }
  } else {
    alert("Array is empty");
  }
  displayArray();
}
