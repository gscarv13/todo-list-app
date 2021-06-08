import * as builder from '../src/scripts/builders';

// variables
const dummyTask = {
  title: 'Title',
  description: 'description',
  dueDate: '2000-12-31',
  priority: 'low',
};

const dummyProject = {
  taskList: [],
};

const dummyProjectsArray = [dummyProject];

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

test('taskForm() should return an HTMLFormElement', () => {
  const taskForm = builder.taskForm();
  expect(taskForm instanceof HTMLFormElement);
});

test('fullPage() should return an HTMLSelectElement', () => {
  document.body.innerHTML = '<div id="content"></div>';
  const options = builder.fullPage();
  expect(options instanceof HTMLSelectElement);
});

describe('Project links', () => {
  test('projectLink() should be return an HTMLParagraphElement', () => {
    const link = builder.projectLink(dummyProject, dummyProjectsArray);
    expect(link instanceof HTMLParagraphElement).toBe(true);
  });

  test('projectLink() should throw an error if missing projectsArray', () => {
    expect(() => builder.projectLink(dummyProject)).toThrow(Error);
  });

  test('projectLink() should throw an error if project', () => {
    expect(() => builder.projectLink(dummyProjectsArray)).toThrow(Error);
  });
});

describe('Priority background color', () => {
  test('should return null if priority is invalid', () => {
    expect(builder.priorityBg('invalid')).toBeNull();
  });

  test('should css class if priority is valid', () => {
    expect(builder.priorityBg('High')).toBe('has-background-danger-light');
  });

  test('should css class if priority is valid', () => {
    expect(builder.priorityBg('Medium')).toBe('has-background-warning-light');
  });

  test('should css class if priority is valid', () => {
    expect(builder.priorityBg('Low')).toBe('has-background-info-light');
  });
});