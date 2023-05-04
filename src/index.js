import './style.scss';

const tasks = [
  {
    description: "one",
    completed: false,
    index: 0,
},
{
  description: "2",
  completed: false,
  index: 1,
},
{
  description: "3",
  completed: false,
  index: 1,
},
{
  description: "4",
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
document.addEventListener('click', (event) => {
  const deleteIcons = document.querySelectorAll('.delete-icon');
  deleteIcons.forEach((icon, index) => {
    if (event.target === icon) {
      removeTask(tasks, event);
      viewTasks(tasks);
    }    
  })
})


// Edit task
import editTask from './modules/editTask';
editTask(tasks, index, newDescription);