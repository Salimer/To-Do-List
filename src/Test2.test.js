/**
 * @jest-environment jsdom
 */
import editTask from './modules/editTask.js';
import taskStatusUpdate from './modules/taskStatusUpdate.js';
import list from './modules/list.js';
import clearCompletedTasks from './modules/clearCompletedTasks.js';

describe('Edit task', () => {
    let tasks = [];
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

        // pushing new tasks into the array
        for (let i = 0; i < 8; i++) {
            const newTask = { description: `Task ${i}`, completed: i % 2 !== 0 };
            tasks.push(newTask);
        }
        const container = document.querySelector('.to-do-list');
        tasks.forEach((task) => {
            list(container, task, '#');
        });
          
        // Clearing the completed tasks
        tasks = clearCompletedTasks(tasks);
        while (container.children[2]) {
            container.removeChild(container.children[2]);
        }
        tasks.forEach((task) => {
            list(container, task, '#');
          });
        const taskItems = document.querySelectorAll('.description');

        // The test where there were 8 tasks, then deleted 4 completed tasks
        expect(taskItems).toHaveLength(4);
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