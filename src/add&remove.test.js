import addNewTask from './modules/addNewTask.js';

describe('Add task function', () => {
    test('Adds the new task object to the tasks array', () => {

        let tasksArray = [];
        const description = 'New task';

        const newObject = {
            description: description,
            completed: false,
            index: tasksArray.length
        }

        let newArray = [];
        newArray.push(newObject);
        expect(addNewTask(description, tasksArray)).toEqual(newArray);
    })
})