import addNewTask from './modules/addNewTask.js';
import removeTask from './modules/removeTask.js';

describe('Add task function', () => {
  test('Adds the new task object to the tasks array', () => {
    const tasksArray = [];
    const description = 'New task';

    const newObject = {
      description,
      completed: false,
      index: tasksArray.length,
    };

    const newArray = [];
    newArray.push(newObject);
    expect(addNewTask(description, tasksArray)).toEqual(newArray);
  });
});

describe('Remove task function', () => {
  test('Removes a task from the tasks array', () => {
    const tasksArray = [
      {
        description: 'Task one',
        completed: false,
        index: 0,
      },
      {
        description: 'Task two',
        completed: false,
        index: 1,
      },
      {
        description: 'Task three',
        completed: false,
        index: 2,
      },
      {
        description: 'Task four',
        completed: false,
        index: 3,
      },
    ]
    const newArray = [
      {
        description: 'Task one',
        completed: false,
        index: 0,
      },
      {
        description: 'Task three',
        completed: false,
        index: 1,
      },
      {
        description: 'Task four',
        completed: false,
        index: 2,
      },
    ]
    expect(removeTask(tasksArray, 1)).toEqual(newArray);
  });
});