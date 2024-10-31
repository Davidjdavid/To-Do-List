import { listArray } from "./localStorage.js";
import { toDo } from "./toDoMaker.js";


export function createMenuDom() {
    // NEED TO DO this should create all the dom stuff and return it so it can append to the main div
    let menuDiv = document.createElement("div");
    let titleInput = document.createElement("input");
    let desriptionInput = document.createElement("input");
    let dateInput = document.createElement("input");
    let priorityInput = document.createElement("input");
    let confirmButton = document.createElement("button");
    let listDropDown = document.createElement("select");
    
    for(let i = 0; i < listArray.length; i++) {
        let option = document.createElement("option");
        option.innerText = listArray[i].title;
        listDropDown.appendChild(option);
    }

    menuDiv.appendChild(titleInput);
    menuDiv.appendChild(desriptionInput);
    menuDiv.appendChild(dateInput);
    menuDiv.appendChild(priorityInput);
    menuDiv.appendChild(confirmButton);
    menuDiv.appendChild(listDropDown);

    confirmButton.innerText = "Confirm";

    confirmButton.addEventListener("click", () => {
        confirmToDoButton(titleInput.value, desriptionInput.value, dateInput.value, priorityInput.value, listDropDown.value);
    });

    return menuDiv;

}

export function confirmToDoButton(title, description, date, priority, list) { 
    let newToDo = new toDo(title, description, date, priority);
    let toDoList = listArray.find(obj => obj.title === list);
    
    console.log(toDoList);

    toDoList.items.push(newToDo);
    console.log(listArray);

}