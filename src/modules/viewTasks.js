import trashIcon from '../trash.svg';
import list from './list.js';

const trash = trashIcon;
export default (tasks) => {
  const container = document.querySelector('.to-do-list');
  while (container.children[2]) {
    container.removeChild(container.children[2]);
  }

  // Sort tasks array based on index property
  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    list(container, task, trash);
  });

  localStorage.setItem('toDoList', JSON.stringify(tasks));
};