let inputText = document.querySelector("input");
let unorederedList = document.querySelector(".list");
let id = 0;

function addList() {
  if (inputText.value == "") {
    alert("empty string");
  } else {
    unorederedList.appendChild(createList());
    store();
    inputText.value = "";
  }
}
function createList() {
  // creating an <li></li> element
  let li = document.createElement("li");
  //   adding a class name
  li.className = "l";
  // adding the value we got from input
  li.innerHTML = `<span>${inputText.value}</span>`;
  //   creating and adding the a button to the text
  li.appendChild(createButton());

  return li;
}
function keydetect(e) {
  if (e.key == "Enter") {
    addList();
  }
}
function createButton() {
  let b = document.createElement("button");
  b.innerHTML = "X";
  b.className = "removeButton";
  return b;
}
inputText.addEventListener("keydown", keydetect);
window.addEventListener("click", (e) => {
  if (e.target.className == "removeButton") {
    e.target.parentElement.remove();
    store();
  }
  if (e.target.tagName == "LI") {
    e.target.children[0].style.textDecoration = underlinedOrNor(
      e.target.children[0].style.textDecoration
    );
    store();
  }
  if (e.target.tagName == "SPAN") {
    e.target.style.textDecoration = underlinedOrNor(
      e.target.style.textDecoration
    );
    store();
  }
});

function underlinedOrNor(decor) {
  if (decor == "") {
    return "line-through";
  } else {
    return "";
  }
}

function store() {
  localStorage.setItem("list", unorederedList.innerHTML);
}

function load() {
  unorederedList.innerHTML = localStorage.getItem("list");
}

load();
