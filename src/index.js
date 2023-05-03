import './style.scss';

const tasks = [
  {
    description: 'three',
    completed: false,
    index: 2,
  },
  {
    description: 'two',
    completed: false,
    index: 1,
  },
  {
    description: 'one',
    completed: false,
    index: 0,
  },
];

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