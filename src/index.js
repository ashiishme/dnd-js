import "./styles.css";

let dragRef = null;

const drag = e => {
  dragRef = e.target;
  e.dataTransfer.setData("text/html", null);
};

const drop = e => {
  e.preventDefault();
  dragRef.parentNode.removeChild(dragRef);
  e.target.appendChild(dragRef);
};

const dragover = e => e.preventDefault();

let items = document.querySelectorAll(".draggable-items div");
let containers = document.querySelectorAll(".container div");
containers.forEach(element => {
  element.addEventListener("drop", drop);
  element.addEventListener("dragover", dragover);
});
items.forEach(element => {
  element.setAttribute("draggable", true);
  element.addEventListener("dragstart", drag);
});
