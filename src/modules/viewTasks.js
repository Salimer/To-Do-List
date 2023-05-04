import trash from '../trash.svg';

export default (tasks) => {
  const container = document.querySelector('.to-do-list');
  while (container.children[2]) {
    container.removeChild(container.children[2]);
  }

  // Sort tasks array based on index property
  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';

    const input = document.createElement('input');
    input.setAttribute('class', 'check-box');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('checked', true);
    listItem.appendChild(input);
    listItem.innerHTML = `
      <input class="check-box" type="checkbox" ${task.completed ? "checked" : "unchecked"}>
      <p class="description">${task.description}</p>
      <a class="delete-icon"><img class="delete-img" src="${trash}" alt="trash"></a>
      `;
    container.appendChild(listItem);
  });

  localStorage.setItem('toDoList', JSON.stringify(tasks));
};