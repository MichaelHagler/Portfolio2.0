let showInfo = document.getElementById("show-info");
let para = document.createElement("p");
let toDoListInfo = document.createTextNode("This is a summary of my app");

const toDoListBtn = document.getElementById("to-do-list-app");

document.addEventListener("DOMContentLoaded", () => {
  toDoListBtn.addEventListener("click", () => {
    para.appendChild(toDoListInfo);
    showInfo.appendChild(para);
  })
});