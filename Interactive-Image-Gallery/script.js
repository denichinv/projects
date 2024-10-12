// GET ELEMENTS

let inputField = document.getElementById("inputField");
let addButton = document.getElementById("addButton");
let galleryContainer = document.getElementById("gallery");

function addImage(url, gallery) {
  if (url !== "") {
    let newElement = document.createElement("img");
    newElement.src = url;

    newElement.classList.add("image");

    gallery.appendChild(newElement);
  }
}

addButton.addEventListener("click", () => {
  let url = inputField.value;
  addImage(url, galleryContainer);
  inputField.value = "";
});
