const button = document.querySelector('button');

let modal;
let backdrop;

button.addEventListener('click', showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText = document.createElement('h1');
  modalText.textContent = 'Ingrese sus datos';
  modalText.style.textAlign = "center"

  modal.style.display = "block";

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancelar';
  modalCancelAction.className = 'btn btn--alt bg-green-500 p-2 rounded-md text-white';
  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Enviar';
  modalConfirmAction.className = 'btn bg-green-500 p-2 rounded-md text-white';
  modalConfirmAction.addEventListener('click', closeModalHandler);

  const buttonContainer = document.createElement('div');
  buttonContainer.appendChild(modalCancelAction);
  buttonContainer.appendChild(modalConfirmAction);
  buttonContainer.style = 'flex justify-center'

  modal.append(modalText);
  modal.append(buttonContainer);

  document.body.append(modal);

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