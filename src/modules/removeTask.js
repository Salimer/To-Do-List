export default (tasks, index) => {
  tasks.splice(index, 1);
  let i = index;
  while (i < tasks.length) {
    tasks[i].index = i;
    i += 1;
  }
};