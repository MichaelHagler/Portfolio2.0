let showInfo = document.getElementById("show-info");
let para = document.createElement("p");


const toDoListBtn = document.getElementById("to-do-list-app");

document.addEventListener("DOMContentLoaded", () => {
  const toDoListInfo = document.createTextNode("A straight forward to-do-list app created using HTML, CSS, and JavaScript. Add items, cross them out, or remove them from the list entirely.");
  let appLink = document.createElement("a");

  appLink.href = "https://github.com/MichaelHagler?tab=repositories";
  appLink.target = "_blank";
  appLink.textContent = "My GitHub";

  toDoListBtn.addEventListener("click", () => {

    para.appendChild(toDoListInfo);
    showInfo.appendChild(para);
    showInfo.appendChild(appLink);
  })
});