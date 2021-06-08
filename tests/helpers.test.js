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

    expect(input.classList.contains('is-danger')).toBe(true);
  });

  test('Should not change classes if valid', () => {
    const input = document.createElement('input');
    input.value = 'dummy input';
    helper.validateField(input);

    expect(input.classList.contains('is-danger')).not.toBe(true);
  });
});
