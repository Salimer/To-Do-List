export default (tasks) => {
    tasks = tasks.filter(item => item.completed === false);
    console.log(tasks);
    let i = 0;
    tasks.forEach((task) => {
        task.index = i;
        i += 1;
    })
    return tasks;
}