import './style.scss';

const tasks = [
  {
    description: "taskDescription oeshjfgslkfglsdfjg;lsk j",
    completed: false,
    index: 0,
},
{
  description: "taskDescription",
  completed: false,
  index: 1,
},
{
  description: "taskDescription",
  completed: false,
  index: 1,
},
{
  description: "taskDescription",
  completed: false,
  index: 1,
},
{
  description: "taskDescription",
  completed: false,
  index: 1,
},
];

import viewTasks from './modules/viewTasks';
window.addEventListener('load', viewTasks(tasks));

// Adding new element
import addNewTask from './modules/addNewTask';
const input = document.querySelector('.input');
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value !== "") {
    const description = input.value;
    tasks.push(addNewTask(description, tasks.length));
    viewTasks(tasks);
    input.value = '';
  }
})

// Removing an item from the list
import removeTask from './modules/removeTask';
const deleteIcon = document.querySelectorAll('.delete-icon');
deleteIcon.forEach((icon) => {
  icon.addEventListener('click', (event) => {
    removeTask(tasks, event);
    viewTasks(tasks);
  })
})

// Edit task
import editTask from './modules/editTask';
editTask(tasks, index, newDescription);