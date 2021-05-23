import Task from './taskClass';
import Project from './projectClass';
import * as View from './views';
import * as Builder from './builders';

const taskCreator = () => {
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
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
  return new Project(title.value);
};

const addNewProject = (e, projectsArray) => {
  const titleField = document.querySelector('#projectTitle');
  if (e.target.id === 'addProject' && titleField.value !== '') {
    const project = projectCreator();
    const container = document.querySelector('#projectsList');
    projectsArray.push(project);
    View.deleteAll(container);
    View.reload(container, projectsArray, Builder.projectLink);
    View.hideForm(e, 'addProject', 'projectForm');
  }
};

const addNewTask = (e, projectsArray) => {
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const date = document.querySelector('#date');

  if (e.target.id === 'addTask' && title.value !== '' && description.value !== '' && date.value !== '') {
    const task = taskCreator();
    const container = document.querySelector('#tasksContainer');
    const index = JSON.parse(localStorage.getItem('projectIndex'));
    const project = projectsArray[index];
    project.addTask(task);
    View.deleteAll(container);
    View.displayAllTasks(project);
    View.hideForm(e, 'addTask', 'form');
  }
};

const deleteTask = (e, projectsArray) => {
  if (e.target.textContent === 'Delete') {
    const taskIndex = e.target.parentElement.parentElement.getAttribute('data-attribute');
    const tasksContainer = document.querySelector('#tasksContainer');
    const projectIndex = JSON.parse(localStorage.getItem('projectIndex'));
    const project = projectsArray[projectIndex];
    project.removeTask(taskIndex);
    View.deleteAll(tasksContainer);
    View.displayAllTasks(project);
  }
};

export { addNewProject, addNewTask, deleteTask };