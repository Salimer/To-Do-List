export default (tasks, index) => {
    tasks.splice(index, 1);
    for(let i = index; i < tasks.length; i++) {
        tasks[i].index = i;
    }
}