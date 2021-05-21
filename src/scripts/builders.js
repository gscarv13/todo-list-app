const top = () => {
  const wrapper = document.createElement('div');
  const h1 = document.createElement('h1');

  wrapper.classList.add('top');
  h1.classList.add('is-size-5');
  h1.textContent = 'To-do';

  wrapper.appendChild(h1);
  return wrapper;
};

const container = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('container');
  return wrapper;
};

const navigation = () => {
  const nav = document.createElement('nav');
  const h2 = document.createElement('h2');
  const projectsContainer = document.createElement('div');
  const addProjectButton = document.createElement('button');
  const formContainer = document.createElement('div');

  h2.textContent = 'Projects';

  formContainer.id = 'projectFormContainer';

  projectsContainer.id = 'projectsList';
  projectsContainer.classList.add('mt-5');

  addProjectButton.textContent = 'Create Project';
  addProjectButton.id = 'createProject';
  addProjectButton.classList.add('button', 'button-info', 'is-small', 'mt-5');

  nav.append(h2, formContainer, projectsContainer, addProjectButton);

  return nav;
};

const main = () => {
  const main = document.createElement('main');
  const mainHeader = document.createElement('div');
  const h2 = document.createElement('h2');
  const addNew = document.createElement('button');
  const formWrapper = document.createElement('div');
  const tasksContainer = document.createElement('div');

  mainHeader.classList.add('is-flex', 'is-justify-content-space-between', 'my-5');

  h2.classList.add('is-size-5', 'has-text-weight-medium');
  h2.textContent = 'Tasks';

  addNew.classList.add('button', 'is-primary', 'is-small', 'has-text-dark');
  addNew.id = 'createTask';
  addNew.textContent = 'Create New Task';

  formWrapper.id = 'formContainer';
  tasksContainer.id = 'tasksContainer';
  tasksContainer.classList.add('is-flex', 'is-flex-wrap-wrap', 'is-justify-content-center', 'mt-5');

  mainHeader.append(h2, addNew);
  main.append(mainHeader, formWrapper, tasksContainer);

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
  const submit = document.createElement('a');

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

const fullPage = () => {
  const content = document.querySelector('#content');
  const containerDiv = container();

  containerDiv.append(navigation(), main());
  content.append(top(), containerDiv);

  return content;
};

const projectLink = (project, projectsArray) => {
  const link = document.createElement('a');
  const linkContainer = document.createElement('p');

  link.textContent = project.title;
  link.href = '#';
  linkContainer.setAttribute('data-index', projectsArray.indexOf(project));
  linkContainer.appendChild(link);
  return linkContainer;
};

const task = (task) => {
  const card = document.createElement('div');
  const cardHeader = document.createElement('div');
  const taskTitle = document.createElement('p');
  const contentWrapper = document.createElement('div');
  const contentContainer = document.createElement('div');
  const description = document.createElement('p');
  const date = document.createElement('p');
  const cardFooter = document.createElement('div');
  const priority = document.createElement('a');
  const deleteOption = document.createElement('a');
  const doneOption = document.createElement('a');

  card.classList.add('card');
  // card.setAttribute('data-attribute', );

  cardHeader.classList.add('card-header');
  taskTitle.classList.add('card-header-title');
  taskTitle.id = 'taskTitle';
  taskTitle.textContent = task.title;

  contentWrapper.classList.add('card-content');
  contentContainer.classList.add('content');
  description.id = 'description';
  description.textContent = task.description;
  date.id = 'date';
  date.textContent = task.dueDate;

  cardFooter.classList.add('card-footer');
  deleteOption.classList.add('card-footer-item');
  deleteOption.href = '#';
  deleteOption.textContent = 'Delete';
  doneOption.classList.add('card-footer-item');
  doneOption.href = '#';
  doneOption.textContent = 'Done';
  priority.classList.add('card-footer-item');
  priority.textContent = task.priority;

  cardHeader.append(taskTitle);
  contentContainer.append(description, date);
  contentWrapper.append(contentContainer);
  cardFooter.append(doneOption, deleteOption, priority);
  card.append(cardHeader, contentWrapper, cardFooter);

  return card;
};

const projectForm = () => {
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const button = document.createElement('button');

  form.classList.add('mt-5', 'box');
  form.id = 'projectForm';

  label.classList.add('label');
  label.textContent = 'New project';

  input.classList.add('input');
  input.type = 'text';

  button.classList.add('button', 'mt-5');
  button.textContent = 'Create';
  button.id = 'addProject';
  form.append(label, input, button);

  return form;
};

export {
  top, container, navigation, main, form, fullPage, projectLink, task, projectForm,
};