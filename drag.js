const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".task-list");

// Add event listeners for ".task" elements (i.e. draggable)
draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {

    // // Test out Web APIs:
    // console.log('window', window);
    // console.log('document', document);
    // console.log('Location', navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log("Latitude:", position.coords.latitude);
    //     console.log("Longitude:", position.coords.longitude);
    //   },
    //   (error) => {
    //     console.error("Error getting location:", error.message);
    //   }
    // )); // gets coordinates after user permission
    // console.log('Browser', navigator.userAgent);
    // console.log('Screen', screen.width, screen.height)

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

    const bottomTask = getClosestTask(list, e.clientY);
    const currTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      list.appendChild(currTask);
    } else {
      list.insertBefore(currTask, bottomTask);
    }
  });
});

const getClosestTask = (list, mouseY) => {
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
