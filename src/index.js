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
  index: 2,
},
{
  description: "4",
  completed: false,
  index: 3,
},
{
  description: "taskDescription",
  completed: false,
  index: 4,
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
    console.log(tasks);
    console.log(tasks.length);
    tasks.push(addNewTask(description, tasks.length));
    viewTasks(tasks);
    input.value = '';
  }
})

// Removing an item from the list
import removeTask from './modules/removeTask';
document.addEventListener('click', (event) => {

  // Remove case
  const deleteIcons = document.querySelectorAll('.delete-icon');
  deleteIcons.forEach((icon, index) => {
    if (event.target === icon) {
      removeTask(tasks, index);
      viewTasks(tasks);
    }    
  })

  // Edit case
  const descriptions = document.querySelectorAll('.description');
  descriptions.forEach((task, index) => {
    if (event.target === task) {
      console.log(tasks[index].description);
      const oldTask = tasks[index].description;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.className = "description";
      inputField.value = oldTask;
      task.innerHTML = '';
      task.appendChild(inputField);

      inputField.addEventListener('blur', () => {
        const newTask = inputField.value;
        task.removeChild(inputField);
        task.innerText = newTask;

        const taskIndex = Array.from(taskList.children).indexOf(taskElement);
        // Replace this with code to update your task data structure with the new text
        console.log(`Updated task ${taskIndex} to "${newText}"`);
      })
    }
  })
})


// Edit task
import editTask from './modules/editTask';
editTask(tasks, index, newDescription);