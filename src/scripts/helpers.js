import Task from './taskClass';
import Project from './projectClass';

const taskCreator = () => {
  const title = document.querySelector('#title');
  const description = document.queryCommandValue('#description');
  const dueDate = document.querySelector('#date');
  const priority = document.querySelector('#priority');
  let task = null;

  if (title.value !== '' && description.value !== '' && dueDate.value !== '') {
    task = new Task(title.value, description.value, dueDate.value, priority.value);
  }
  return task;
};

const projectCreator = () => {
  const title = document.querySelector('#projectTitle');
  let project = null;

  if (title.value !== '') {
    project = new Project(title.value);
  }

  return project;
};