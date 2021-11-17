var button = document.querySelector('button');

var modal;
var backdrop;

button.addEventListener('click', showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('modal');
  modal.className = 'modal';

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
  phoneField.placeholder = 'Formato: 099999999';
  phoneField.className = 'input';
  phoneField.type = 'tel';
  phoneField.pattern = '[0-9]{9}';
  const mailField = document.createElement('input');
  mailField.id = 'mailField';
  mailField.setAttribute('style',"margin-bottom 0rem !important");
  
  mailField.placeholder = 'Email';
  mailField.className = 'input';
  mailField.type = 'email';

  nameField.setAttribute("required", ""); 
  lastNameField.setAttribute("required", ""); 
  phoneField.setAttribute("required", ""); 
  mailField.setAttribute("required", ""); 

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
  modalCancelAction.className = 'button';
  modalCancelAction.type = "button";

  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Enviar';
  modalConfirmAction.className = 'button';
  modalConfirmAction.type = "submit";
  modalConfirmAction.addEventListener('submit',submitModalHandler)
  
  const buttonContainer = document.createElement('div');
  buttonContainer.appendChild(modalConfirmAction);
  buttonContainer.appendChild(modalCancelAction);
  // compendio de todo
  modal.append(modalTitle);
  modal.appendChild(form);
  form.append(buttonContainer);

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
  event.preventDefault();
  let name = document.getElementById('nameField');
  let lastName = document.getElementById('lastNameField');
  let phone = document.getElementById('phoneField');
  let email = document.getElementById('mailField');
  let person = new Person(name,lastName,phone,email);
  person.Show();
  var payload = {
    nombreContacto:  name,
    lastName:  lastName,
    phone:  phone,
    email:  email
  }
  let payloadString = JSON.stringify(payload);
  let url = "https://PW2021-APINode-FelipeMestre.felipemestre.repl.co/enviar-formulario";
  fetch(url, 
    {
      method: "POST",
      body: payloadString,
      headers: {'Content-Type': 'application/json'}
    }
  ).then(function (response) {
      response.text().then(function (text) {  alert(text); } );  
    }
  )
  closeModalHandler();
}

class Person {

  name : String;
  lastName : String;
  phone : Number;
  mail : string;
  
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

