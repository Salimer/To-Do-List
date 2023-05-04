import './style.scss';
import trash from './trash.svg';
export { trash };

const tasks = [];

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
import editTask from './modules/editTask';
document.addEventListener('click', (event) => {

  // Remove case
  const deleteIcons = document.querySelectorAll('.delete-img');
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
      const parentLi = event.target.parentNode;
      parentLi.classList.add('edit-bg');
      const oldTask = tasks[index].description;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.className = "description edit-bg";
      inputField.value = oldTask;
      task.innerHTML = '';
      task.appendChild(inputField);
      inputField.focus();

      inputField.addEventListener('blur', () => {
        const newTask = inputField.value;
        task.removeChild(inputField);
        task.innerText = newTask;
        editTask(tasks, index, newTask);
        viewTasks(tasks);
        // Show the update in task in console
        console.log(`Updated task ${oldTask} to "${newTask}"`);
      })
    }
  })
})
