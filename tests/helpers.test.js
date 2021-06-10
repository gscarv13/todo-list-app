import '@testing-library/jest-dom';
import * as helper from '../src/scripts/helpers';
import Task from '../src/scripts/taskClass';
import Project from '../src/scripts/projectClass';

describe('taskCreator()', () => {
  test('Create task from DOM inputs', () => {
    document.body.innerHTML = `
      <input id="title" value="title">
      <input id="description" value="description">
      <input id="date" value="date">
      <input id="priority" value="priority">
    `;

    const task = helper.taskCreator();
    expect(task instanceof Task).toBe(true);
  });

  test('Should fail if task title is empty', () => {
    document.body.innerHTML = `
      <input id="title" value="">
      <input id="description" value="description">
      <input id="date" value="date">
      <input id="priority" value="priority">
    `;
    const result = helper.taskCreator();
    expect(result).toBe(null);
  });
});

describe('projectCreator()', () => {
  test('Create project from DOM input', () => {
    document.body.innerHTML = `
      <input id="projectTitle" value="title">
    `;

    const project = helper.projectCreator();
    expect(project instanceof Project).toBe(true);
  });

  test('Should fail if title is empty', () => {
    document.body.innerHTML = `
      <input id="projectTitle" value="">
    `;
    const result = helper.projectCreator();
    expect(result).toBe(null);
  });
});

describe('validateField()', () => {
  test('Should add new class if invalid', () => {
    const input = document.createElement('input');
    input.value = '';
    helper.validateField(input);

    expect(input).toHaveClass('is-danger');
  });

  test('Should not change classes if valid', () => {
    const input = document.createElement('input');
    input.value = 'dummy input';
    helper.validateField(input);

    expect(input).not.toHaveClass('is-danger');
  });
});

describe('addNewTask()', () => {
  test('Should add task', () => {
    document.body.innerHTML = `
      <div id="tasksContainer"></div>
      <form id="form">
        <input id="title" value="task title">
        <input id="description" value="some description">
        <input id="date" value="2030-12-31">
        <input id="priority" value="High">
      </form>
    `;
    const tasksContainer = document.querySelector('#tasksContainer');

    const proj1 = new Project('add task project');
    proj1.addTask(new Task('title', 'description', '2030-12-31', 'High'));
    proj1.addTask(new Task('title', 'description', '2030-12-31', 'High'));
    proj1.addTask(new Task('title', 'description', '2030-12-31', 'High'));
    localStorage.setItem('projectIndex', '0');

    const projectsArray = [proj1];
    const ev = { target: { id: 'addTask' } };

    helper.addNewTask(ev, projectsArray);
    expect(tasksContainer.childNodes.length).toBe(4);
  });

  test('Should add is-danger class if failed', () => {
    document.body.innerHTML = `
      <div id="tasksContainer"></div>
      <form id="form">
        <input id="title" value="">
        <input id="date" value="2030-12-31">
      </form>
    `;
    const taskTitle = document.querySelector('#title');

    const proj1 = new Project('add task project');
    const projectsArray = [proj1];
    const ev = { target: { id: 'addTask' } };

    helper.addNewTask(ev, projectsArray);
    expect(taskTitle).toHaveClass('is-danger');
  });
});

describe('addNewProject()', () => {
  test('Should add project', () => {
    document.body.innerHTML = `
      <div id="projectsList"></div>
      <form id="projectForm">
        <input id="projectTitle" value="project title">
      </form>
    `;
    const projectContainer = document.querySelector('#projectsList');
    const projectsArray = [];
    const ev = { target: { id: 'addProject' } };

    helper.addNewProject(ev, projectsArray);
    expect(projectsArray.length).toBe(1);
    expect(projectContainer.childNodes.length).toBe(1);
  });

  test('Should be empty if failed', () => {
    document.body.innerHTML = `
    <div id="projectsList"></div>
    <form id="projectForm">
      <input id="projectTitle" value="">
    </form>
  `;

    const projectContainer = document.querySelector('#projectsList');
    const projectsArray = [];
    const ev = { target: { id: 'addProject' } };

    helper.addNewProject(ev, projectsArray);
    expect(projectsArray.length).toBe(0);
    expect(projectContainer).toBeEmptyDOMElement();
  });
});

describe('deleteTask()', () => {
  test('Should delete task', () => {
    document.body.innerHTML = `
      <div id="tasksContainer">
        <div class="card" data-attribute="0">
          <div>
            <div id="target">Delete</div>
          </div>
        </div>
      </div>
    `;
    const tasksContainer = document.querySelector('#tasksContainer');

    const proj1 = new Project('remove task project');
    proj1.addTask(new Task('title', 'description', '2030-12-31', 'High'));
    localStorage.setItem('projectIndex', '0');

    const projectsArray = [proj1];
    const target = document.querySelector('#target');
    const ev = { target };

    helper.deleteTask(ev, projectsArray);
    expect(tasksContainer).toBeEmptyDOMElement();
  });
});

describe('updateDate()', () => {
  test('Should update task date', () => {
    document.body.innerHTML = `
      <div id="tasksContainer">
        <div class="card" data-attribute="0">
          <div>
            <div>
              <input id="date" value="3000-12-25">
            </div>
          </div>
        </div>
      </div>
    `;

    const proj1 = new Project('update task date');
    proj1.addTask(new Task('title', 'description', '2021-06-15', 'High'));
    localStorage.setItem('projectIndex', '0');

    const projectsArray = [proj1];
    const target = document.querySelector('#date');
    const ev = { target };

    helper.updateDate(ev, projectsArray);
    expect(proj1.taskList[0].dueDate).toBe('3000-12-25');
  });
});

describe('updateDescription()', () => {
  test('Should update task description', () => {
    document.body.innerHTML = `
      <div id="tasksContainer">
        <div class="card" data-attribute="0">
          <div>
            <div>
              <input id="description" value="edited description">
            </div>
          </div>
        </div>
      </div>
    `;

    const proj1 = new Project('update task description');
    proj1.addTask(new Task('title', 'description', '2021-06-15', 'High'));
    localStorage.setItem('projectIndex', '0');

    const projectsArray = [proj1];
    const target = document.querySelector('#description');
    const ev = { target };

    helper.updateDescription(ev, projectsArray);
    expect(proj1.taskList[0].description).toBe('edited description');
  });
});

describe('updatePriority()', () => {
  test('Should update task priority', () => {
    document.body.innerHTML = `
      <div id="tasksContainer">
        <div class="card" data-attribute="0">
          <div>
              <input id="priority" value="Low">
          </div>
        </div>
      </div>
    `;

    const proj1 = new Project('update task priority');
    proj1.addTask(new Task('title', 'description', '2021-06-15', 'High'));
    localStorage.setItem('projectIndex', '0');

    const projectsArray = [proj1];
    const target = document.querySelector('#priority');
    const ev = { target };

    helper.updatePriority(ev, projectsArray);
    expect(proj1.taskList[0].priority).toBe('Low');
  });
});