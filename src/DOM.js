// This file handles all the DOM functions needed

// Imports
import { createListForm } from "./newListMenu.js";
import { listArray } from "./localStorage.js";
import { createMenuDom } from "./newToDoMenu.js";
import { FullDisplayToDo } from "./toDoFullDisplay.js";

// Function that creates the list of menu buttons
export function menuOptionButtons() {

    // Creates button elements
    let createList = document.createElement("button");
    let createToDo = document.createElement("button");
    let deleteList = document.createElement("button");
    
    // Grab the element we will put the buttons into
    let mainMenu = document.querySelector(".mainMenu");

    // Give the button elements text
    createList.innerText = "Create List";    
    createToDo.innerText = "Create To Do";
    deleteList.innerText = "Delete List";

    // Adds the buttons to the main menu class
    mainMenu.appendChild(createList);
    mainMenu.appendChild(createToDo);
    mainMenu.appendChild(deleteList);

    // Calls the event listners for the buttons
    createList.addEventListener("click", createListMakerMenu);
    createToDo.addEventListener("click", createToDoItemMenu);
}

// Function to create elements for the lists. This function creates a singular list item with DOM 
export function visualMenuList(list) {
    let listDiv = document.createElement("div");
    let listNameElement = document.createElement("p");
    listNameElement.innerText = list.title;
    listDiv.appendChild(listNameElement);
    return listDiv;
}

// Create the menu to create new to do lists
export function createListMakerMenu() {
    let main = document.querySelector(".main")
    main.innerHTML = "";
    main.appendChild(createListForm());
    refreshList(); 
}

// This function needs to exist to refresh the list of to do lists.
export function refreshList() {
    let listMenu = document.querySelector(".listMenu")
    listMenu.innerHTML = "";
    displayList(listMenu);
}

// Displays the list of lists on the side bar
export function displayList(listMenu) {
    for(let i = 0; i < listArray.length; i++) {
        let listButton = document.createElement("button");
        let list = listArray[i];
        listButton.innerText = list.title;
        listButton.class = "listButton";
        listButton.addEventListener("click", () => displayListItems(list));
        listMenu.appendChild(listButton);
    }
}

// This function is whats called when a to do list button is pressed
export function displayListItems(list) {
    let main = document.querySelector(".main")
    main.innerHTML = "";
    for(let toDoItem of list.items) {
        main.appendChild(createToDoItem(toDoItem, list));
    }

}

export function createToDoItem(item, list) {
    let toDoDiv = document.createElement("div");
    let toDoTitle = document.createElement("p");
    let toDoDate = document.createElement("p");
    let expandButton = document.createElement("button");
    toDoDiv.appendChild(toDoTitle);
    toDoDiv.appendChild(toDoDate);
    toDoDiv.appendChild(expandButton);
    toDoTitle.innerText = item.title;
    toDoDate.innerText = item.dueDate;
    expandButton.innerText = "Expand To Do View";
    expandButton.addEventListener("click", () => displayFullToDoItem(item, list));
    toDoDiv.className = "toDoDiv";
    return toDoDiv;
}

export function createToDoItemMenu() {
    let main = document.querySelector(".main")
    main.innerHTML = "";
    main.appendChild(createMenuDom());
}

export function displayFullToDoItem(item, list) {
    let main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(FullDisplayToDo(item, list));
}