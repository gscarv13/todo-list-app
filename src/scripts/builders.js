const top = () => {
  const wrapper = document.createElement('div');
  const h1 = document.createElement('h1');

  wrapper.classList.add('top', 'has-background-primary', 'container');
  h1.classList.add('is-size-5');
  h1.textContent = 'To-do';

  wrapper.appendChild(h1);
  return wrapper;
};

const container = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('container', 'container-height');
  return wrapper;
};

const navigation = () => {
  const nav = document.createElement('nav');
  const h2 = document.createElement('h2');
  const projectsContainer = document.createElement('div');
  const addProjectButton = document.createElement('button');
  const formContainer = document.createElement('div');

  nav.classList.add('box', 'border');
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

const options = () => {
  const prioritySelect = document.createElement('select');
  const op1 = document.createElement('option');
  const op2 = document.createElement('option');
  const op3 = document.createElement('option');

  prioritySelect.id = 'priority';
  prioritySelect.classList.add('input', 'field');

  op1.setAttribute('value', 'Low');
  op1.textContent = 'Low';
  op2.setAttribute('value', 'Medium');
  op2.textContent = 'Medium';
  op3.setAttribute('value', 'High');
  op3.textContent = 'High';

  prioritySelect.append(op1, op2, op3);
  return prioritySelect;
};

const taskForm = () => {
  const form = document.createElement('form');
  const titleLabel = document.createElement('label');
  const titleInput = document.createElement('input');
  const dateLabel = document.createElement('label');
  const dateInput = document.createElement('input');
  const descriptionLabel = document.createElement('label');
  const descriptionInput = document.createElement('input');
  const priorityLabel = document.createElement('label');
  const prioritySelect = options();
  const br = document.createElement('br');
  const submit = document.createElement('a');

  form.id = 'form';
  form.classList.add('mt-5', 'box');

  titleLabel.setAttribute('for', 'title');
  titleLabel.textContent = 'Title:';
  titleInput.id = 'title';
  titleInput.required = true;
  titleInput.setAttribute('type', 'text');
  titleInput.classList.add('field', 'input');

  dateLabel.setAttribute('for', 'date');
  dateLabel.textContent = 'Due date:';
  dateInput.id = 'date';
  dateInput.required = true;
  dateInput.setAttribute('type', 'date');
  dateInput.classList.add('field', 'input');

  descriptionLabel.setAttribute('for', 'description');
  descriptionLabel.textContent = 'Description:';
  descriptionInput.id = 'description';
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.classList.add('field', 'input');

  priorityLabel.setAttribute('for', 'priority');
  priorityLabel.textContent = 'Priority:';

  submit.classList.add('button', 'is-primary', 'is-small', 'has-text-dark', 'mt-5');
  submit.id = 'addTask';
  submit.textContent = 'Add Task';

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

const priorityBg = (priority) => {
  let bg = null;
  switch (priority) {
    case 'Low':
      bg = 'has-background-info-light';
      break;
    case 'Medium':
      bg = 'has-background-warning-light';
      break;
    case 'High':
      bg = 'has-background-danger-light';
      break;
    default:
      bg = null;
  }
  return bg;
};

const task = (task, project) => {
  const card = document.createElement('div');
  const index = project.indexOf(task);
  const cardHeader = document.createElement('div');
  const taskTitle = document.createElement('input');
  const buttonContainer = document.createElement('div');
  const doneButton = document.createElement('a');
  const doneButtonSpan = document.createElement('span');
  const doneIcon = document.createElement('i');
  const detailsButton = document.createElement('a');
  const detailsButtonSpan = document.createElement('span');
  const detailsIcon = document.createElement('i');
  const contentWrapper = document.createElement('div');
  const contentContainer = document.createElement('div');
  const description = document.createElement('textarea');
  const date = document.createElement('input');
  const cardFooter = document.createElement('div');
  const priority = options();
  const deleteOption = document.createElement('a');

  card.classList.add('card');
  card.setAttribute('data-attribute', index);

  cardHeader.classList.add('card-header');
  taskTitle.classList.add('card-header-title');
  taskTitle.id = 'taskTitle';
  taskTitle.value = task.title;

  buttonContainer.classList.add('is-flex', 'is-flex-direction-column', 'is-justify-content-space-between');
  doneButton.classList.add('card-header-icon');
  doneButton.id = 'done';
  doneButtonSpan.classList.add('icon');
  doneIcon.classList.add('fas', 'fa-check-circle');

  detailsButton.classList.add('card-header-icon');
  detailsButtonSpan.classList.add('icon');
  detailsButton.id = 'displayDetails';
  detailsIcon.classList.add('fas', 'fa-angle-down');

  contentWrapper.classList.add('card-content', 'hidden');
  contentContainer.classList.add('content');
  description.id = 'description';
  description.classList.add('textarea');
  description.value = task.description;
  date.id = 'date';
  date.setAttribute('value', task.dueDate.replaceAll('/', '-'));
  date.setAttribute('type', 'date');
  date.classList.add('input');

  cardFooter.classList.add('card-footer');
  deleteOption.classList.add('card-footer-item');
  deleteOption.href = '#';
  deleteOption.textContent = 'Delete';
  priority.classList.add('card-footer-item', priorityBg(task.priority));
  priority.value = task.priority;

  doneButtonSpan.append(doneIcon);
  doneButton.append(doneButtonSpan);

  detailsButtonSpan.append(detailsIcon);
  detailsButton.append(detailsButtonSpan);
  buttonContainer.append(doneButton, detailsButton);

  cardHeader.append(taskTitle, buttonContainer);
  contentContainer.append(description, date);
  contentWrapper.append(contentContainer);
  cardFooter.append(deleteOption, priority);
  card.append(cardHeader, contentWrapper, cardFooter);

  return card;
};

const projectForm = () => {
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const button = document.createElement('a');

  form.classList.add('mt-5', 'box');
  form.id = 'projectForm';

  label.classList.add('label');
  label.textContent = 'New project';

  input.classList.add('input');
  input.id = 'projectTitle';
  input.required = true;
  input.type = 'text';

  button.classList.add('button', 'mt-5');
  button.textContent = 'Create';
  button.id = 'addProject';
  form.append(label, input, button);

  return form;
};

export {
  top, container, navigation, main, taskForm, fullPage, projectLink, task,
  projectForm, priorityBg, options,
};