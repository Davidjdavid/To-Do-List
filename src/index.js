// This file manages all of the other files and what is first runs on the page
import { menuOptionButtons, refreshList } from "./DOM.js";
import { list } from "./listMaker.js"
import { listArray } from "./localStorage.js";
import { toDo } from "./toDoMaker.js";
import "./style.css";

// This runs the function that creates the menu buttons used to create lists and to do items
menuOptionButtons();

// Sample lists and to dos that are loaded
// TO DO import and create some lists and to dos for testing and showcasing
let dummyList = new list("Personal");
let dummyToDoOne = new toDo("Go to store", "I need to pick up dinner", "1/06/1990", false);
let dummyToDoTwo = new toDo("Go to movies", "I want to see a good movie", "10/10/2032", false);

dummyList.items.push(dummyToDoOne);
dummyList.items.push(dummyToDoTwo);
listArray.push(dummyList);

// Resfreshes the list of lists after the sample lists and to dos are created
refreshList();