// This file holds the toDo class. This class is called on whenever a new to do is made

export class toDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    // Methods

    // Toggles a to do items priority. False to true and vice versa
    togglePriority() {
        return this.priority = this.priority ? false : true;
    }
}