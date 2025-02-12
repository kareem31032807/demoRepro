//select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
const loadTasks = () => {
    const tasks = JSON.parse(localStorage('tasks')) || [];
    taskList.innerHTML = ''; // clear current list
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
};

//save task to localstorage
const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// create a task element
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

 8 // Toggle completion on click
  taskTextNode.addEventListener('click', () => {
    taskTextNode.classList.toggle('completed');
    updateTaskStatus(taskText, !isCompleted);
  });


 // delete task
 deleteButton.addEventListener('click' , () => {
    taskItem.remove();
    deleteTask(taskText);
 });

 taskItem.appendChild(taskTextNode);
 taskItem.appendChild(deleteButton);
 taskList.appendChild(taskItem);
};

//Add a task
const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText){
        createTaskElement(taskText);
        saveTaskToLoacalStoarge(taskText);
    }
    taskInput.value = '';
};


//save text to localstorage
const saveTaskToLoacalStoarge = (taskText) => {
    const tasks = JSON.parse(localStorage.getItem ('task')) || [];
    tasks.push({ text: taskText, completed: false });
    saveTasks(tasks);
} ;

//update task completion status
const updateTaskStatus = (taskText, completed) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.text === taskText);
    if (task){
    task.completed = completed;
    saveTasks(tasks) ;
    }
};

//Delete a task from localstorage
const deleteTask = (taskText) => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t.text !== taskText);
    saveTasks(tasks);
};

// event listleners
addTaskButton.addEventListener('click', addTask);

// load tasks when the page is ready
window.addEventListener('DOMContentLoaded', loadTasks);