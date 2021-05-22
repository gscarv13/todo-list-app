import './assets/stylesheet/style.css';

import Task from './scripts/taskClass';
import Project from './scripts/projectClass';

import * as Builder from './scripts/builders';
import * as View from './scripts/views';
import * as Helper from './scripts/helpers';

// variables
const projectsArray = [];

// build the initial HTML
Builder.fullPage();
projectsArray.push(new Project('Default'));
projectsArray.push(new Project('TeSTESSSS'));

for (let i = 0; i < 10; i += 1) {
  projectsArray[0].addTask(new Task('title', 'description', 'duedate', 'priority'));
}

for (let i = 0; i < 10; i += 1) {
  projectsArray[1].addTask(new Task(`${i}+askduhaks`, 'description', 'duedate', 'priority'));
}

View.displayProjects(projectsArray);

// Listeners
const createNewTaskButton = document.querySelector('#createTask');
const addNewTaskButton = document.querySelector('main');
const createNewProjectButton = document.querySelector('#createProject');
const addNewProjectButton = document.querySelector('nav');
const projectListListener = document.querySelector('#projectsList');

createNewTaskButton.addEventListener('click', () => View.displayForm('formContainer', 'form', Builder.form));
addNewTaskButton.addEventListener('click', (e) => View.hideForm(e, 'addTask', 'form'));
createNewProjectButton.addEventListener('click', () => View.displayForm('projectFormContainer', 'projectForm', Builder.projectForm));
addNewProjectButton.addEventListener('click', (e) => Helper.addNewProject(e, projectsArray));
projectListListener.addEventListener('click', (e) => View.updateTasks(e, projectsArray));