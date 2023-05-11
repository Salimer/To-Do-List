import './style.scss';
import viewTasks from './modules/viewTasks.js';
import addNewTask from './modules/addNewTask.js';
import removeTask from './modules/removeTask.js';
import editTask from './modules/editTask.js';
import taskStatusUpdate from './modules/taskStatusUpdate.js';
import clearCompletedTasks from './modules/clearCompletedTasks.js';

let tasks = JSON.parse(localStorage.getItem('toDoList')) || [];
window.addEventListener('load', viewTasks(tasks));
const input = document.querySelector('.input');
// Add new task
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    const description = input.value;
    viewTasks(addNewTask(description, tasks));
    input.value = '';
  }
});

document.addEventListener('click', (event) => {
  // Remove task
  const deleteIcons = document.querySelectorAll('.delete-img');
  deleteIcons.forEach((icon, index) => {
    if (event.target === icon) {
      viewTasks(removeTask(tasks, index));
    }
  });

  // Edit task
  const descriptions = document.querySelectorAll('.description');
  descriptions.forEach((task, index) => {
    if (event.target === task) {
      const parentLi = event.target.parentNode;
      parentLi.classList.add('edit-bg');

      task.addEventListener('blur', () => {
        const newTask = task.textContent;
        task.textContent = newTask;
        viewTasks(editTask(tasks, index, newTask));
      });
    }
  });

  // Checkbox status
  const checkBoxes = document.querySelectorAll('.check-box');
  checkBoxes.forEach((checkBox, index) => {
    checkBox.addEventListener('change', () => {
      taskStatusUpdate(tasks, index);
      viewTasks(tasks);
    });
  });

  // Clear completed tasks
  const clearBtn = document.querySelector('.clear');
  if (event.target === clearBtn) {
    tasks = clearCompletedTasks(tasks);
    viewTasks(tasks);
  }
});
