import './assets/stylesheet/style.css';

import Task from './scripts/taskClass';
import Project from './scripts/projectClass';

import * as Builder from './scripts/builders';
import * as View from './scripts/views';

// variables
const projectsArray = [];

// build the initial HTML
Builder.fullPage();
projectsArray.push(new Project('Default'));

View.displayProjects(projectsArray);

// Listeners
const createNewTaskButton = document.querySelector('#createTask');
const addNewTaskButton = document.querySelector('main');
const createNewProjectButton = document.querySelector('#createProject');
const addNewProjectButton = document.querySelector('nav');

createNewTaskButton.addEventListener('click', View.displayTaskForm);
addNewTaskButton.addEventListener('click', View.hideTaskForm);
createNewProjectButton.addEventListener('click', View.displayProjectForm);
addNewProjectButton.addEventListener('click', View.hideProjectForm);
