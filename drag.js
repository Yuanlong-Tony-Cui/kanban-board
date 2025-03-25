const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

// ".task" elements are draggable
draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

// ".swim-lane" elements are droppable
droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = getClosetTask(zone, e.clientY);
    const currTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(currTask);
    } else {
      zone.insertBefore(currTask, bottomTask);
    }
  });
});

const getClosetTask = (zone, mouseY) => {
  const elements = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  // Find the closest task to the mouse pointer
  elements.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};
