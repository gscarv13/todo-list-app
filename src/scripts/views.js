import * as Builder from './builders';

const displayForm = (parentElementID, currentElementID, builder) => {
  const container = document.querySelector(`#${parentElementID}`);

  if (document.querySelector(`#${currentElementID}`) === null) {
    const form = builder();
    container.append(form);
  }
  return container;
};

const hideForm = (e, buttonID, formID) => {
  if (e.target.id === buttonID) {
    const form = document.querySelector(`#${formID}`);
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
    const task = Builder.task(project.taskList[i], project.taskList);
    displayTask(task);
  }
};

const deleteAll = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const reload = (container, items, builder) => {
  for (let i = 0; i < items.length; i += 1) {
    container.append(builder(items[i], items));
  }
};

const updateTasks = (e, array) => {
  if (e.target.parentElement.getAttribute('data-index') !== null) {
    const index = e.target.parentElement.getAttribute('data-index');
    const container = document.querySelector('#tasksContainer');
    localStorage.setItem('projectIndex', index);

    deleteAll(container);
    displayAllTasks(array[index]);
  }
};

const toggleDone = (e) => {
  const card = e.target.parentElement.parentElement;

  if (e.target.textContent === 'Done') {
    card.classList.toggle('done');
    card.classList.toggle('has-background-grey-light');
  }
};

export {
  displayForm, hideForm, displayProjects, displayTask,
  displayAllTasks, deleteAll, updateTasks, reload, toggleDone,
};
