import renderTasks from './modules/viewTasks';
import trash from './trash.svg';

describe('renderTasks', () => {
  it('should render a list of tasks', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 0 },
      { description: 'Task 2', completed: true, index: 1 },
      { description: 'Task 3', completed: false, index: 2 },
    ];
    document.body.innerHTML = '<div class="to-do-list"></div>';

    renderTasks(tasks);

    const listItemEls = document.querySelectorAll('.list-item');
    expect(listItemEls.length).toBe(3);

    tasks.forEach((task, index) => {
      const listItemEl = listItemEls[index];
      expect(listItemEl.querySelector('.description').textContent).toBe(task.description);
      expect(listItemEl.querySelector('.check-box').checked).toBe(task.completed);
    });
  });
});
