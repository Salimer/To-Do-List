export default (taskDescription, tasks) => {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: tasks.length,
  };
  tasks.push(newTask);

  return tasks;
};