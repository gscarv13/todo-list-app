export default class Project {
  constructor(title) {
    this.title = title;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(taskIndex) {
    this.taskList.splice(taskIndex, 1);
  }
}