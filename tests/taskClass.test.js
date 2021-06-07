import Task from '../src/scripts/taskClass';

test('Task must be an instance of Task class', () => {
  const task = new Task('Title', 'Task description', '2021-06-09', 'High');
  expect(task instanceof Task).toBe(true);
});