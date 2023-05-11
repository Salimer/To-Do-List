/**
 * @jest-environment jsdom
 */
import editTask from './modules/editTask.js';
import taskStatusUpdate from './modules/taskStatusUpdate.js';
// import viewTasks from './modules/viewTasks.js';
const viewTasks = require('./modules/viewTasks')

describe('Edit task', () => {
    const tasks = [];
    const newTask = {
        description: "New task",
        completed: false,
        id: tasks.length + 1
    }

    test('Clear completed test', () => {
        document.body.innerHTML = `
            <ul class="to-do-list">
            <li id="to-do-title" class="list-item">Today's To Do</li>
            <li class="list-item">
                <input class="input" type="text" placeholder="Add to your list...">
            </li>
            </ul>
        <a class="clear">Clear all completed</a>
        `;
        for (let i = 0; i < 8; i++) {
            const newTask = { description: `Task ${i}`, completed: i % 2 !== 0 };
            tasks.push(newTask);
        }
        const container = document.querySelector('.to-do-list');
        tasks.forEach((task) => {
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
              <a class="delete-icon"><img class="delete-img" src="#" alt="trash"></a>
              `;
            container.appendChild(listItem);
          });
        const list = document.querySelectorAll('.description');

        console.log(list.length);
    })

    test('Toggle completed status', () => {
        newTask.completed = false;
        tasks.push(newTask);
        taskStatusUpdate(tasks, 0);
        expect(tasks[0].completed).toBe(true);
    })
    test('Edit task and update tasks array', () => {      
        tasks.push(newTask);
        editTask(tasks, 0, 'Go shopping');
        expect(tasks[0].description).toBe('Go shopping');
    })
})