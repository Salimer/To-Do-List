export default (tasks, event) => {
    const { index } = event.target.parentNode.dataset;
    tasks.splice(index, 1);
    for(let i = index; i <= tasks.length; i++) {
        tasks[i].index = i;
    }
}