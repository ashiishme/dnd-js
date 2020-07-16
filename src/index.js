import "./styles.css";
console.log("Hello");

const drag = e => {};

const drop = e => {};

let items = document.querySelectorAll(".draggable-items div");

items.forEach(element => {
  element.addEventListener("dragstart", drag);
  element.addEventListener("drop", drop);
});
