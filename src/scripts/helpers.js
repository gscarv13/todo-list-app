import Task from './taskClass';
import Project from './projectClass';
import * as View from './views';
import * as Builder from './builders';

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
  return new Project(title.value);
};

const addNewProject = (e, projectsArray) => {
  const titleField = document.querySelector('#projectTitle').value;
  if (e.target.id === 'addProject' && titleField !== '') {
    const project = projectCreator();
    const container = document.querySelector('#projectsList');
    projectsArray.push(project);
    View.deleteAll(container);
    View.reload(container, projectsArray, Builder.projectLink);
    View.hideForm(e, 'addProject', 'projectForm');
  }
};

export { taskCreator, projectCreator, addNewProject };