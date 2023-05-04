export default (tasks, index) => {
    console.log(index);
    tasks.splice(3, 1);
    for(let i = index; i <= tasks.length; i++) {
        tasks[i].index = i;
    }
}