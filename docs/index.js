const button = document.querySelector('button');

let modal;
let backdrop;

button.addEventListener('click', showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('modal');
  modal.className = 'modal';
  modal.style.display = "block";

  //Titulos
  const modalTitle = document.createElement('h1');
  modalTitle.className = 'h1'
  modalTitle.textContent = 'Ingrese sus datos';
  
  const nameTitle = document.createElement('nameTitle');
  nameTitle.className = 'h2'
  nameTitle.textContent = 'Nombre';

  const lastNameTitle = document.createElement('lastNameTitle');
  lastNameTitle.className = 'h2'
  lastNameTitle.textContent = 'Apellido';

  const phoneTitle = document.createElement('phoneTitle');
  phoneTitle.className = 'h2'
  phoneTitle.textContent = 'Telefono';

  const mailTitle = document.createElement('mailTitle');
  mailTitle.className = 'h2'
  mailTitle.textContent = 'Mail';

  const form = document.createElement('form');
  form.className = 'form';
  form.style = 'display: inline-grid ; margin-left: 4rem ; height : 75%';
  form.addEventListener('submit', submitModalHandler);
  form.id = 'contactForm';
  form.action = '';
  form.method = 'POST';

  //Inputs
  const nameField = document.createElement('input');
  nameField.id = 'nameField';
  nameField.placeholder = 'Nombre';
  nameField.className = 'input';
  nameField.type = 'text';
  const lastNameField = document.createElement('input');
  lastNameField.id = 'lastNameField'
  lastNameField.placeholder = 'Apellido';
  lastNameField.className = 'input';
  lastNameField.type = 'text';
  const phoneField = document.createElement('input');
  phoneField.id = 'phoneField';
  phoneField.placeholder = 'Telefono';
  phoneField.className = 'input';
  phoneField.type = 'tel';
  phoneField.pattern = '[0-9]{9}';
  const mailField = document.createElement('input');
  mailField.id = 'mailField';
  mailField.style = 'margin-bottom : 0rem !important;';
  mailField.placeholder = 'Email';
  mailField.className = 'input';
  mailField.type = 'email';

  form.append(nameTitle);
  form.append(nameField);
  form.append(lastNameTitle);
  form.append(lastNameField);
  form.append(phoneTitle)
  form.append(phoneField);
  form.append(mailTitle);
  form.append(mailField);

  // botones
  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancelar';
  modalCancelAction.className = 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 m-4';
  modalCancelAction.style = 'float : right;';
  modalCancelAction.type = "button";

  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Enviar';
  modalConfirmAction.className = 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 m-4';
  modalConfirmAction.style = 'float : right;';
  modalConfirmAction.type = "submit";
  
  // compendio de todo
  modal.append(modalTitle);
  form.append(modalConfirmAction);
  form.append(modalCancelAction);
  modal.appendChild(form);

  document.body.appendChild(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  backdrop.addEventListener('click', closeModalHandler);

  document.body.append(backdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}

function submitModalHandler(){
  var name = document.getElementById('nameField');
  var lastName = document.getElementById('lastNameField');
  var phone = document.getElementById('phoneField');
  var email = document.getElementById('mailField');
  var person = new Person(name,lastName,phone,email);
  person.Show();
  closeModalHandler();
}

class Person {
  constructor(name,lastName,phone,mail){
    this.name = name.value;
    this.lastName = lastName.value;
    this.phone = phone.value;
    this.mail = mail.value;
  }

  Show() {
    console.log("La persona es: " + this.name + " " + this.lastName + ", su telefono es: " + this.phone + ", su mail: " + this.mail);
  }
}

