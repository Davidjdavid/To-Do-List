// This file holds the list class. This class is called to make a new list whenver one is made

class list {
    constructor(title, items =[]) {
        this.title = title;
        this.items = items;
    }

    // Methods

    // Adds a to do item into the list's array
    addToDo(toDo) {
        this.items.push(toDo);
    }

    // Deletes a to do item from the list's array using an index number
    deleteToDo(index) {
        this.items.pop(index);
    }

    // Renames a to do item from the list's array using an index number
    renameToDo(index, title) {
        this.items[index].title = title;
    }

    // Rewrites a to do item's description from the list's array using an index number
    rewriteDescriptionToDo(index, description) {
        this.items[index].description = description;
    }
}

export { list };