const topDiv = () => {
  const wrapper = document.createElement('div');
  const h1 = document.createElement('h1');

  wrapper.classList.add('top');
  h1.classList.add('is-size-5');
  h1.textContent = 'To-do';

  wrapper.appendChild(h1);
  return wrapper;
};

const containerDiv = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('container');
  return wrapper;
};

const navigationSection = () => {
  const nav = document.createElement('nav');
  const h2 = document.createElement('h2');
  const tasksContainer = document.createElement('p');
  const addProjectButton = document.createElement('button');

  h2.textContent = 'Projects';

  tasksContainer.id = 'task-list';
  tasksContainer.classList.add('mt-5');

  addProjectButton.textContent = 'Create Task';
  addProjectButton.id = 'createTask';
  addProjectButton.classList.add('button', 'button-info', 'is-small', 'mt-5');

  nav.append(h2, tasksContainer, addProjectButton);

  return nav;
};

const mainSection = () => {
  const main = document.createElement('main');
  const h2 = document.createElement('h2');
  const tableWrapper = document.createElement('div');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const thCheckBox = document.createElement('th');
  const thTitle = document.createElement('th');
  const thDate = document.createElement('th');
  const thDelete = document.createElement('th');
  const tbody = document.createElement('tbody');
  const addNew = document.createElement('button');

  h2.classList.add('is-size-5', 'has-text-weight-medium');
  h2.textContent = 'Tasks';

  tableWrapper.classList.add('columns', 'is-centered', 'mt-5');
  table.classList.add('table', 'is-striped', 'mx-auto');

  tbody.id = 'tasksOutput';

  thTitle.textContent = 'Title';
  thDate.textContent = 'Date';
  thDelete.textContent = 'Delete';

  addNew.classList.add('button', 'is-primary', 'is-small', 'has-text-dark');
  addNew.textContent = 'Create New Task';

  tr.append(thCheckBox, thTitle, thDate, thDelete);
  thead.appendChild(tr);
  table.append(thead, tbody);
  tableWrapper.appendChild(table);
  main.append(h2, table, addNew);

  return main;
};

const form = () => {
  const form = document.createElement('form');
  const titleLabel = document.createElement('label');
  const titleInput = document.createElement('input');
  const dateLabel = document.createElement('label');
  const dateInput = document.createElement('input');
  const descriptionLabel = document.createElement('label');
  const descriptionInput = document.createElement('input');
  const priorityLabel = document.createElement('label');
  const prioritySelect = document.createElement('select');
  const op1 = document.createElement('option');
  const op2 = document.createElement('option');
  const op3 = document.createElement('option');
  const br = document.createElement('br');
  const submit = document.createElement('button');

  form.id = 'form';
  form.classList.add('mt-5', 'box');

  titleLabel.setAttribute('for', 'title');
  titleLabel.textContent = 'Title';
  titleInput.id = 'title';
  titleInput.setAttribute('type', 'text');
  titleInput.classList.add('field', 'input');

  dateLabel.setAttribute('for', 'date');
  dateLabel.textContent = 'Date';
  dateInput.id = 'date';
  dateInput.setAttribute('type', 'date');
  dateInput.classList.add('field', 'input');

  descriptionLabel.setAttribute('for', 'description');
  descriptionLabel.textContent = 'Description';
  descriptionInput.id = 'description';
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.classList.add('field', 'input');

  priorityLabel.setAttribute('for', 'priority');
  priorityLabel.textContent = 'Priority';
  prioritySelect.id = 'priority';
  prioritySelect.classList.add('input', 'field');

  op1.setAttribute('value', 'low');
  op1.textContent = 'Low';
  op2.setAttribute('value', 'medium');
  op2.textContent = 'Medium';
  op3.setAttribute('value', 'high');
  op3.textContent = 'High';

  submit.setAttribute('type', 'submit');
  submit.classList.add('button', 'is-primary', 'is-small', 'has-text-dark', 'mt-5');
  submit.id = 'addTask';
  submit.textContent = 'Add Task';

  prioritySelect.append(op1, op2, op3);

  form.append(
    titleLabel, titleInput, dateLabel,
    dateInput, descriptionLabel,
    descriptionInput, priorityLabel,
    prioritySelect, br, submit,
  );

  return form;
};

export { topDiv, containerDiv, navigationSection, mainSection, form };