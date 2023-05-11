export default (tasks, index, newDescription) => {
  tasks[index].description = newDescription;
  return tasks;
};