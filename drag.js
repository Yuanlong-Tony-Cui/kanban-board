const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".task-list");

// Add event listeners for ".task" elements (i.e. draggable)
draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

// Add event listeners for ".task-list" elements (i.e. droppable)
droppables.forEach((list) => {
  list.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = getClosetTask(list, e.clientY);
    const currTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      list.appendChild(currTask);
    } else {
      list.insertBefore(currTask, bottomTask);
    }
  });
});

const getClosetTask = (list, mouseY) => {
  const tasks = list.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  // Find the closest task to the mouse pointer
  tasks.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};
