# Drag-and-Drop Kanban Board

## Introduction
This Kanban Board tool supports adding new tasks and managing existing tasks by dragging and dropping them.

<img src="./kanban-board.png" height="500" alt="Kanban Board">

The user can create new tasks by typing the name in the text field and click on the Add button. Once tasks are created, there are three columns showing the status of all tasks: "TODO", "Doing", and "Done". The user can easily drag and drop each task tile to change its status. A video demo of this example is available [here](https://www.youtube.com/watch?v=ecKw7FfikwI).

## Technical Highlights
I built this project using vanilla JavaScript as opposed to more advanced JS frameworks like React or Vue. Developers nowadays including me often rely on modern front end frameworks and thus overlook or misunderstand what vanilla JS alone can do. Since JavaScript is the browser's native language, there are actually a handful of [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) available for use with JavaScript, such as the `Window` interface from the [HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) (which includes objects like `navigator` and `screen` and even methods like `setTimeout()`). The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is also part of Web APIs.
