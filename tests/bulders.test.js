import * as builder from '../src/scripts/builders';

test('top() should return an HTMLDivElement', () => {
  const topContainer = builder.top();
  expect(topContainer instanceof HTMLDivElement);
});

test('container() should return an HTMLDivElement', () => {
  const cont = builder.container();
  expect(cont instanceof HTMLDivElement);
});

test('navigation() should return an HTMLElement', () => {
  const navigation = builder.navigation();
  expect(navigation instanceof HTMLElement);
});

test('main() should return an HTMLElement', () => {
  const main = builder.main();
  expect(main instanceof HTMLElement);
});

test('options() should return an HTMLSelectElement', () => {
  const options = builder.options();
  expect(options instanceof HTMLSelectElement);
});

describe('HTML card task element', () => {
  const dummyTask = {
    title: 'Title',
    description: 'description',
    dueDate: '2000-12-31',
    priority: 'low',
  };

  const dummyProject = {
    taskList: [],
  };

  test('task() should return an HTMLDivElement', () => {
    dummyProject.taskList.push(dummyTask);

    const taskElement = builder.task(dummyTask, dummyProject.taskList);
    expect(taskElement instanceof HTMLDivElement);
  });

  test('task() should throw an error if projects parameter is missing', () => {
    expect(() => builder.task(dummyTask)).toThrow(Error);
  });

  test('task() should throw an error if task parameter is missing', () => {
    expect(() => builder.task(dummyProject.taskList)).toThrow(Error);
  });
});

test('form() should return an HTMLFormElement', () => {
  const form = builder.projectForm();
  expect(form instanceof HTMLFormElement);
});