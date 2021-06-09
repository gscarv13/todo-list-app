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
localStorage.setItem('projectIndex', 0);

const tasksContainer = document.querySelector('#tasksContainer');
projectsArray[0].addTask(new Task('Take out trash', 'Do it after lunch', '2030-12-05', 'Low'));
projectsArray[0].addTask(new Task('Check TypeScript', 'Set up an initial project', '2030-12-05', 'Medium'));
projectsArray[0].addTask(new Task('Study HTTP/TCP protocol', 'Difference between TCP and UDP', '2030-12-05', 'High'));
View.displayAllTasks(projectsArray[0], tasksContainer);
View.displayProjects(projectsArray);

// Listeners
const createNewTaskButton = document.querySelector('#createTask');
const addNewTaskButton = document.querySelector('main');
const createNewProjectButton = document.querySelector('#createProject');
const addNewProjectButton = document.querySelector('nav');
const projectListListener = document.querySelector('#projectsList');
const cardElements = document.querySelector('#tasksContainer');

createNewTaskButton.addEventListener('click', () => View.displayForm('formContainer', 'form', Builder.taskForm));
addNewTaskButton.addEventListener('click', (e) => { Helper.addNewTask(e, projectsArray); });
createNewProjectButton.addEventListener('click', () => View.displayForm('projectFormContainer', 'projectForm', Builder.projectForm));
addNewProjectButton.addEventListener('click', (e) => Helper.addNewProject(e, projectsArray));
projectListListener.addEventListener('click', (e) => View.updateTasks(e, projectsArray, tasksContainer));
cardElements.addEventListener('click', (e) => { Helper.deleteTask(e, projectsArray); });
cardElements.addEventListener('click', (e) => { View.toggleDone(e); });
cardElements.addEventListener('click', (e) => { View.toggleDescription(e); });

// Update task details
cardElements.addEventListener('input', (e) => { Helper.updateDate(e, projectsArray); });
cardElements.addEventListener('input', (e) => { Helper.updateDescription(e, projectsArray); });
cardElements.addEventListener('input', (e) => { Helper.updateTitle(e, projectsArray); });
cardElements.addEventListener('input', (e) => { Helper.updatePriority(e, projectsArray); });