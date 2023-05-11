export default (container, task, trash) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';

    const input = document.createElement('input');
    input.setAttribute('class', 'check-box');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('checked', true);
    listItem.appendChild(input);
    listItem.innerHTML = `
      <input class="check-box" type="checkbox" ${task.completed ? 'checked' : 'unchecked'}>
      <p class="description" contenteditable="true">${task.description}</p>
      <a class="delete-icon"><img class="delete-img" src="${trash}" alt="trash"></a>
      `;
    container.appendChild(listItem);
}
