import './style.scss';
import viewTasks from './modules/viewTasks.js';
import addNewTask from './modules/addNewTask.js';
import removeTask from './modules/removeTask.js';
import editTask from './modules/editTask.js';
import taskStatusUpdate from './modules/taskStatusUpdate.js';

const tasks = JSON.parse(localStorage.getItem('toDoList')) || [];
window.addEventListener('load', viewTasks(tasks));
const input = document.querySelector('.input');
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    const description = input.value;
    tasks.push(addNewTask(description, tasks.length));
    viewTasks(tasks);
    input.value = '';
  }
});

document.addEventListener('click', (event) => {
  // Remove case
  const deleteIcons = document.querySelectorAll('.delete-img');
  deleteIcons.forEach((icon, index) => {
    if (event.target === icon) {
      removeTask(tasks, index);
      viewTasks(tasks);
    }
  });

  // Edit case
  const descriptions = document.querySelectorAll('.description');
  descriptions.forEach((task, index) => {
    if (event.target === task) {
      const parentLi = event.target.parentNode;
      parentLi.classList.add('edit-bg');
      const oldTask = tasks[index].description;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.className = 'description edit-bg';
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
      });
    }
  });
});

const checkBoxContainer = document.querySelector('.to-do-list');
const checkBoxes = document.querySelectorAll('.check-box');
checkBoxContainer.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    checkBoxes.forEach((checkBox, index) => {
      if (event.target === checkBox) {
        console.log(index);
        taskStatusUpdate(tasks, index);
        console.log(tasks);
      }
    })
    
    
  }
})
