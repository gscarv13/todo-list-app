import Project from '../src/scripts/projectClass';

const project = new Project('Title');
const dummyTask = { title: 'dummy task' };

test('Project must be an instance of Project class', () => {
  expect(project instanceof Project).toBe(true);
});

test('Should be able to add elements into a taskList', () => {
  project.addTask(dummyTask);
  expect(project.taskList.length).toBe(1);
});

test('Should be able to elements from taskList', () => {
  project.removeTask(dummyTask);
  expect(project.taskList.length).toBe(0);
});