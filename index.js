// Read tasks from Local Storage 
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// update the tasks in Local Storage
function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// display tasks
function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task}
      <button class="btn-up" onclick="updateTask(${index})">Update</button>
      <button class="btn-d" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// create a task
function createTask() {
  const taskInput = document.getElementById('task');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push(task);
    updateLocalStorage();
    taskInput.value = '';
    displayTasks();
  }
}

// update a task
function updateTask(index) {
  const newTask = prompt('Enter updated task:', tasks[index]);
  
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    updateLocalStorage();
    displayTasks();
  }
}

// delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  updateLocalStorage();
  displayTasks();
}
// delete all tasks
function deleteAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
      tasks = [];
      updateLocalStorage();
      displayTasks();
    }
  }

// display
displayTasks();
