import * as Builder from './builders';

const displayTaskForm = () => {
  const container = document.querySelector('#formContainer');

  if (document.querySelector('#form') === null) {
    const form = Builder.form();
    container.append(form);
  }
  return container;
};

const hideTaskForm = (e) => {
  if (e.target.id === 'addTask') {
    const form = document.querySelector('#form');
    form.remove();
  }
};

const displayProjectForm = () => {
  const container = document.querySelector('#projectFormContainer');

  if (document.querySelector('#projectForm') === null) {
    const form = Builder.projectForm();
    container.append(form);
  }
  return container;
};

const hideProjectForm = (e) => {
  if (e.target.id === 'addProject') {
    const form = document.querySelector('#projectForm');
    form.remove();
  }
};

const displayProjects = (projects) => {
  const projectsContainer = document.querySelector('#projectsList');
  for (let i = 0; i < projects.length; i += 1) {
    projectsContainer.appendChild(Builder.projectLink(projects[i], projects));
  }
};

const displayTask = (task) => {
  const main = document.querySelector('#tasksContainer');
  main.append(task);
};

const displayAllTasks = (project) => {
  for (let i = 0; i < project.taskList.length; i += 1) {
    const task = Builder.task(project.taskList[i]);
    displayTask(task);
  }
};

export {
  displayTaskForm, hideTaskForm, displayProjects, displayTask,
  displayAllTasks, displayProjectForm, hideProjectForm,
};
