// This needs to make the form that lets users create lists and then it needs to add the list to the array

import { list } from "./listMaker.js";
import { listArray } from "./localStorage.js";
import { refreshList } from "./DOM.js";

export function createListForm() {
        let nameInput = document.createElement("input");
        let confirmButton = document.createElement("button");
        let form = document.createElement("div");
        form.appendChild(nameInput);
        form.appendChild(confirmButton);
        confirmButton.innerText = "Enter";
        confirmButton.addEventListener("click", (event) => {
            event.preventDefault();
            listArray.push(new list(nameInput.value));
            refreshList();
        });
        return form;
}