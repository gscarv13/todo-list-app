export default class Project {
  constructor(title) {
    this.title = title;
    this.taskList = [];
  }

  addTask(task) {
    return this.taskList.push(task);
  }

  removeTask(task) {
    const taskIndex = Number(this.taskList.indexOf(task));
    return this.taskList.splice(taskIndex, 1);
  }
}