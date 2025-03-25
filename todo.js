// Get relevant elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = input.value;

  if (!todoText) return;

  // Create new element
  const newTask = document.createElement("p");
  newTask.classList.add("task"); // class="task"
  newTask.setAttribute("draggable", "true"); // draggable="true"
  newTask.innerText = todoText;

  // Add event listeners
  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  // Add element to desired location
  todoLane.appendChild(newTask);

  input.value = ""; // Clear input
});
