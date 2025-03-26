// Get relevant elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input value
  const todoText = input.value;
  if (!todoText) return;

  // Create new TODO task element
  const newTask = document.createElement("p");  // <p></p>
  newTask.classList.add("task");                // class="task"
  newTask.setAttribute("draggable", "true");    // draggable="true"
  newTask.innerText = todoText;                 // <p>...</p>

  // Add event listeners
  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  // Add task to the TODO section
  todoLane.appendChild(newTask);

  // Clear input
  input.value = "";
});
