let inputText = document.querySelector("input");
let unorederedList = document.querySelector(".list");
let id = 0;
function addList() {
  if (inputText.value == "") {
    alert("empty string");
  } else {
    unorederedList.appendChild(createList());
    inputText.value= "";

  }
}
function createList() {
  // creating an <li></li> element
  let li = document.createElement("li");
  //   assigning an id;
  li.id = id;
  id++;
  // adding the value we got from input
  li.innerHTML = inputText.value;
  //   creating and adding the a button to the text
  li.appendChild(createButton(id));

  return li;
}
function keydetect(e) {
  if (e.key == "Enter") {
    addList();
  }
}
function createButton(id) {
  let b = document.createElement("button");
  b.innerHTML = "remove";
  b.className = "removeButton";
  return b;
}
inputText.addEventListener("keydown", keydetect);
window.addEventListener("click", (e) => {
  if (e.target.className == "removeButton") {
    e.target.parentElement.remove();
  }
  if (e.target.tagName == "LI") {
    e.target.style.textDecoration = "line-through";
  }
});
