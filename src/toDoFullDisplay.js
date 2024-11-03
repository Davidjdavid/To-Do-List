// This file will need to create and return the div that holds all the DOM stuff for a To Do item when you full screen it. Right now To Dos just
// show the title and date. When you click on whatever that makes the To Do show you more it will need this class to pop up.

// When you close the to do it should go back to the previous display. Maybe pass something into a function so that when you close the To Do
// it just goes back the list. Like it calls the function that displays the list and stuff

import { listArray } from "./localStorage";
import { displayListItems } from "./DOM";

export function FullDisplayToDo(item, list) {
    let fullViewDiv = document.createElement("div");
    let titleText = document.createElement("p");
    let descriptionText = document.createElement("p");
    let dueDateText = document.createElement("p");
    let exitButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    titleText.innerText = item.title;
    descriptionText.innerText = item.description;
    dueDateText.innerText = item.dueDate;
    exitButton.innerText = "Exit";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteToDo(item, list));
    exitButton.addEventListener("click", () => exitToDo(list));
    fullViewDiv.appendChild(titleText);
    fullViewDiv.appendChild(descriptionText);
    fullViewDiv.appendChild(dueDateText);
    fullViewDiv.appendChild(exitButton);
    fullViewDiv.appendChild(deleteButton);
    console.log(item);
    return fullViewDiv;

    function deleteToDo(item, list) {
        list.items.splice(item, 1);
        displayListItems(list);
    }

    function exitToDo(list) {
        displayListItems(list);
    }
}