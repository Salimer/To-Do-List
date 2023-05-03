import './style.scss';

export const tasks = [];

const viewTasks = () => {
  const container = document.querySelector('.to-do-list');

  // Sort tasks array based on index property
  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<input class="check-box" type="checkbox">${task.description}`;
    container.appendChild(listItem);
  });
};
window.addEventListener('load', viewTasks);

// Adding new element
import addNewTask from './modules/addNewTask';
tasks.push(addNewTask(description, tasks.length));

// Removing an item from the list
import removeTask from './modules/removeTask';
removeTask(index);