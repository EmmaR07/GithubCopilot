const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [
  { id: 1, text: "Read chapter 2", done: false },
  { id: 2, text: "Math homework", done: true }
];

function createTaskItem(task) {
  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;
  checkbox.addEventListener("change", () => {
    task.done = checkbox.checked;
    renderTasks();
  });

  const taskText = document.createElement("span");
  taskText.textContent = task.text;
  if (task.done) {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "#888";
  }

  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);

  return listItem;
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    taskList.appendChild(createTaskItem(task));
  });
}

function addTask(text) {
  const trimmedText = text.trim();
  if (!trimmedText) return;

  tasks.push({
    id: Date.now() + Math.random(),
    text: trimmedText,
    done: false
  });

  renderTasks();
}

function addDeleteCompletedButton() {
  const existingButton = document.getElementById("deleteCompletedBtn");
  if (existingButton) return;

  const deleteCompletedButton = document.createElement("button");
  deleteCompletedButton.id = "deleteCompletedBtn";
  deleteCompletedButton.type = "button";
  deleteCompletedButton.textContent = "Delete Completed";
  deleteCompletedButton.className = "delete-completed-btn";

  deleteCompletedButton.addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.done);
    renderTasks();
  });

  taskForm.appendChild(deleteCompletedButton);
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
});

addDeleteCompletedButton();
renderTasks();
