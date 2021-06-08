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

  if (title.value !== '') {
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

const validateField = (field) => {
  if (field.value === '') {
    field.classList.add('is-danger');
  }
};

const addNewTask = (e, projectsArray, taskContainer) => {
  const title = document.querySelector('#title');
  const date = document.querySelector('#date');

  if (e.target.id === 'addTask') {
    if (title.value !== '' && date.value !== '') {
      const task = taskCreator();
      const container = document.querySelector('#tasksContainer');
      const index = JSON.parse(localStorage.getItem('projectIndex'));
      const project = projectsArray[index];
      project.addTask(task);
      View.deleteAll(container);
      View.displayAllTasks(project, taskContainer);
      View.hideForm(e, 'addTask', 'form');
    } else {
      validateField(title);
      validateField(date);
    }
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
    View.displayAllTasks(project, tasksContainer);
  }
};

const updateDate = (e, projectsArray) => {
  if (e.target.id === 'date') {
    const date = e.target.value;
    const index = e.target.parentElement.parentElement.parentElement.getAttribute('data-attribute');
    const project = projectsArray[JSON.parse(localStorage.getItem('projectIndex'))];
    project.taskList[index].dueDate = date;
  }
};

const updateDescription = (e, projectsArray) => {
  if (e.target.id === 'description') {
    const description = e.target.value;
    const index = e.target.parentElement.parentElement.parentElement.getAttribute('data-attribute');
    const project = projectsArray[JSON.parse(localStorage.getItem('projectIndex'))];
    project.taskList[index].description = description;
  }
};

const updateTitle = (e, projectsArray) => {
  if (e.target.id === 'taskTitle') {
    const title = e.target.value;
    const index = e.target.parentElement.parentElement.getAttribute('data-attribute');
    const project = projectsArray[JSON.parse(localStorage.getItem('projectIndex'))];
    project.taskList[index].title = title;
  }
};

const updatePriority = (e, projectsArray) => {
  if (e.target.id === 'priority') {
    const classes = e.target.classList;
    const priority = e.target.value;
    const index = e.target.parentElement.parentElement.getAttribute('data-attribute');
    const project = projectsArray[JSON.parse(localStorage.getItem('projectIndex'))];

    classes.replace(classes[classes.length - 1], Builder.priorityBg(e.target.value));
    project.taskList[index].priority = priority;
  }
};

export {
  addNewProject, addNewTask, deleteTask, updateDate, updateDescription, updateTitle,
  updatePriority,
};