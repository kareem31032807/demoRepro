
// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = ''; // Clear current list
  tasks.forEach(task => {
    createTaskElement(task.text, task.completed);
  });
};

// Save tasks to localStorage
const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Create a task element
const createTaskElement = (taskText, isCompleted = false) => {
  const taskItem = document.createElement('li');
  const taskTextNode = document.createElement('span');
  const deleteButton = document.createElement('button');

  taskTextNode.textContent = taskText;
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');

  if (isCompleted){
    taskTextNode.classList.add('completed');
  }

  // Toggle completion on click
  taskTextNode.addEventListener('click', () => {
    taskTextNode.classList.toggle('completed');
    updateTaskStatus(taskText, !isCompleted);
  });

  // Delete task
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
    deleteTask(taskText);
  });

  taskItem.appendChild(taskTextNode);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
};

// Add a task
const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    createTaskElement(taskText);
    saveTaskToLocalStorage(taskText);
  }
  taskInput.value = '';
};

// Save task to localStorage
const saveTaskToLocalStorage = (taskText) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ text: taskText, completed: false });
  saveTasks(tasks);
};

// Update task completion status
const updateTaskStatus = (taskText, completed) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const task = tasks.find(t => t.text === taskText);
  if (task) {
    task.completed = completed;
    saveTasks(tasks);
  }
};

// Delete a task from localStorage
const deleteTask = (taskText) => {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t.text !== taskText);
  saveTasks(tasks);
};

// Event listeners
addTaskButton.addEventListener('click', addTask);

// Load tasks when the page is ready
window.addEventListener('DOMContentLoaded', loadTasks);