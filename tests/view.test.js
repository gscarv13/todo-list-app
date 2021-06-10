import '@testing-library/jest-dom';
import * as view from '../src/scripts/views';
import Project from '../src/scripts/projectClass';
import Task from '../src/scripts/taskClass';

describe('displayForm()', () => {
  const mockBuilder = jest.fn(() => document.createElement('form'));
  document.body.innerHTML += `
      <main id="container">
        <div id="target">
        </div>
      </main>
    `;

  test('Should return a form ', () => {
    const htmlElement = view.displayForm('container', 'target', mockBuilder);
    expect(htmlElement instanceof HTMLFormElement);
  });

  test('Should throw error if missing id', () => {
    expect(() => view.displayForm('target', mockBuilder)).toThrow(Error);
  });

  test('Should throw TypeError if missing callback', () => {
    expect(() => view.displayForm('target')).toThrowError(/builder/);
  });
});

describe('hideForm', () => {
  const eventObj = {
    target: {
      id: 'buttonID',
    },
  };

  document.body.innerHTML += `
  <form id="formID">
    <button id="buttonID"></button>
  </form>
`;

  test('Should remove the form from the DOM', () => {
    const body = document.querySelector('body');
    const form = document.querySelector('#formID');
    view.hideForm(eventObj, 'buttonID', 'formID');
    expect(body.contains(form)).toBe(false);
  });

  test('Should throw error if missing paramenters', () => {
    expect(() => view.hideForm(eventObj, 'buttonID')).toThrowError();
  });
});

describe('displayProjects()', () => {
  const proj1 = new Project('Project 1');
  const proj2 = new Project('Project 1');
  const projects = [proj1, proj2];
  document.body.innerHTML += '<div id="projectsList"></div>';

  test('Should add all projects to the element to dom', () => {
    const container = document.querySelector('#projectsList');
    view.displayProjects(projects);
    expect(container.childNodes.length).toBe(2);
  });
});

describe('displayTask()', () => {
  const task = new Task('Task 1');
  const task2 = new Task('Task 2');
  document.body.innerHTML += '<div id="tasksContainer"></div>';

  test('Should add parameter to the dom', () => {
    const tasksContainer = document.querySelector('#tasksContainer');
    view.displayTask(task, tasksContainer);
    view.displayTask(task2, tasksContainer);
    expect(tasksContainer.childNodes.length).toBe(2);
  });
});

describe('deleteAll()', () => {
  document.body.innerHTML += `
      <div class="items-to-delete">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </div>
  `;
  const container = document.querySelector('.items-to-delete');
  test('should delete all elements from a container', () => {
    view.deleteAll(container);
    expect(container.childNodes.length).toBe(0);
  });
});

describe('reload()', () => {
  document.body.innerHTML += `
      <div class="links"></div>
  `;

  const container = document.querySelector('.links');
  const items = ['item1', 'item2', 'item3'];
  const builder = jest.fn(() => document.createElement('p'));

  test('should add to the dom the elements passed as argument', () => {
    view.reload(container, items, builder);
    expect(container.childNodes.length).toBe(3);
  });
});

describe('updateTasks()', () => {
  // add DOM elements
  const container = document.createElement('div');
  container.classList.add('tasksContainer');
  container.append(document.createElement('p'));
  document.body.append(container);

  const project = new Project('Project 5');
  const projectsArray = [project];

  test('should remove all current elements and add to the dom the elements passed as argument', () => {
    // emulate the event object
    const event = container.firstChild;
    const ev = {
      target: event,
    };
    view.updateTasks(ev, projectsArray, container);
    expect(container.childNodes.length).toBe(1);
  });
});

describe('toggleDone()', () => {
  // add DOM elements
  const card = document.createElement('div');
  const wrapper1 = document.createElement('div');
  const wrapper2 = document.createElement('div');
  const wrapper3 = document.createElement('div');
  const wrapper4 = document.createElement('div');
  const target = document.createElement('div');

  wrapper3.id = 'done';
  target.id = 'toggle-target';
  wrapper4.append(target);
  wrapper3.append(wrapper4);
  wrapper2.append(wrapper3);
  wrapper1.append(wrapper2);
  card.append(wrapper1);

  // emulate the event object
  const ev = {
    target,
  };

  test('should add done and has-background-grey-light classes', () => {
    view.toggleDone(ev);
    expect(card).toHaveClass('done');
    expect(card).toHaveClass('has-background-grey-light');
  });

  test('should remove done and has-background-grey-light classes', () => {
    view.toggleDone(ev);
    expect(card).not.toHaveClass('done');
    expect(card).not.toHaveClass('has-background-grey-light');
  });
});

describe('toggleDescription()', () => {
  // add DOM elements
  const card = document.createElement('div');
  const cardfooter = document.createElement('div');
  const cardDescription = document.createElement('div');
  const wrapper1 = document.createElement('div');
  const wrapper2 = document.createElement('div');
  const wrapper3 = document.createElement('div');
  const wrapper4 = document.createElement('div');
  const target = document.createElement('div');

  wrapper3.id = 'displayDetails';
  target.id = 'toggle-target';
  wrapper4.append(target);
  wrapper3.append(wrapper4);
  wrapper2.append(wrapper3);
  wrapper1.append(wrapper2);
  card.append(wrapper1, cardDescription, cardfooter);

  // emulate the event object
  const ev = {
    target,
  };

  test('should add hidden class', () => {
    view.toggleDescription(ev);
    expect(cardDescription).toHaveClass('hidden');
  });

  test('should remove hidden class', () => {
    view.toggleDescription(ev);
    expect(cardDescription).not.toHaveClass('hidden');
  });
});