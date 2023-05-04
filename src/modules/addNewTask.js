export default (taskDescription, arrayLength) => {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: arrayLength,
  };

  return newTask;
};