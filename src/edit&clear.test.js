/**
 * @jest-environment jsdom
 */
import editTask from './modules/editTask.js';

describe('Edit task', () => {
    const tasks = [
        {
            description: 'task1',
            completed: false,
            id: 0
        }
    ]
    test('Edit task and update tasks array', () => {
        document.body.innerHTML = `
        <li class="list-item">
            <input class="check-box" type="checkbox" unchecked="">
            <p class="description" contenteditable="true">${tasks[0].description}</p>
            <a class="delete-icon">
                <img class="delete-img" src="http://127.0.0.1:3000/dist/940f2754b6cc078901bdf1f87308209e.svg" alt="trash">
            </a>
        </li>
        `;

        // const description = document.

        
    })
})