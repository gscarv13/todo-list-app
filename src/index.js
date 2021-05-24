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

projectsArray[0].addTask(new Task('Take out trash', 'Do it after lunch', '31/12/2030', 'High'));
projectsArray[0].addTask(new Task('Check TypeScript', 'Set up an initial project', '31/12/2030', 'High'));
projectsArray[0].addTask(new Task('Study HTTP/TCP protocol', 'Difference between TCP and UDP', '31/12/2030', 'High'));
View.displayAllTasks(projectsArray[0]);
View.displayProjects(projectsArray);

// Listeners
const createNewTaskButton = document.querySelector('#createTask');
const addNewTaskButton = document.querySelector('main');
const createNewProjectButton = document.querySelector('#createProject');
const addNewProjectButton = document.querySelector('nav');
const projectListListener = document.querySelector('#projectsList');
const cardButtons = document.querySelector('#tasksContainer');

createNewTaskButton.addEventListener('click', () => View.displayForm('formContainer', 'form', Builder.taskForm));
addNewTaskButton.addEventListener('click', (e) => { Helper.addNewTask(e, projectsArray); });
createNewProjectButton.addEventListener('click', () => View.displayForm('projectFormContainer', 'projectForm', Builder.projectForm));
addNewProjectButton.addEventListener('click', (e) => Helper.addNewProject(e, projectsArray));
projectListListener.addEventListener('click', (e) => View.updateTasks(e, projectsArray));
cardButtons.addEventListener('click', (e) => { Helper.deleteTask(e, projectsArray); });
cardButtons.addEventListener('click', (e) => { View.toggleDone(e); });