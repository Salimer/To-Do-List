const addTask = require('./modules/addNewTask');

describe('Add task function', () => {
    test('Adds the new task object to the tasks array', () => {

        let tasksArray = [];
        const description = 'New task';

        const newObject = {
            description: description,
            completed: false,
            index: tasksArray.length
        }

        tasksArray.push(newObject);
        expect(addTask(description, tasksArray)).toBe(tasksArray);
    })
})