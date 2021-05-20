import * as Builder from './builders';

const displayForm = () => {
  const main = document.querySelector('main');

  if (document.querySelector('#form') === null) {
    const form = Builder.form();
    main.append(form);
  }
  return main;
};

const hideForm = (e) => {
  if (e.target.id === 'addTask') {
    const form = document.querySelector('#form');
    form.remove();
  }
};

const displayProjects = (projects) => {
  const projectsContainer = document.querySelector('#task-list');
  for (let i = 0; i < projects.length; i += 1) {
    projectsContainer.appendChild(Builder.project(projects[i], projects));
  }
};

export { displayForm, hideForm, displayProjects };
