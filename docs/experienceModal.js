var card = document.getElementById('experiencia');
card.addEventListener('click', showExperienceHandler);
var experience;

function showExperienceHandler() {
    if (experience) {
        return;
    }
    experience = document.createElement('modal');
    experience.className = 'modal';
    var modalTitle = document.createElement('h1');
    modalTitle.className = 'h1';
    modalTitle.textContent = 'Proyectos';

    proyectList = document.createElement('proyectLists');
    proyectList.className = 'ul';

    idalenProyect = document.createElement('idalenProyect');
    idalenProyect.className = 'li';

    idalenHeader = document.createElement('idalentHeader');
    idalenHeader.className = 'h2'
    idalenHeader.textContent = 'Empresa forestal Idalen';

    idalenContent = document.createElement('p');
    idalenContent.className = 'p';
    idalenContent.textContent = "Mi rol consistio en ser desarrollador junior haciendo frontend con angular, backend con ASP.net y con dos bases de datos en " +
    "sql server. El proyecto consistio en un sistema de gestion de viajes entre cosechas de madera, acopios intermedios y Montevideo.";
    
    idalenContentP2 = document.createElement('p');
    idalenContentP2.className = 'p';
    idalenContentP2.textContent = "Desarrolle funcionalidades a lo largo de sprints de dos semanas durante cuatro meses. Entre estas funcionalidades " +
    "estan un sistema de notificaciones, la integracion este este sistema con otro mediante requests http y un modulo de gestion documentacion " +
    "que verifica la correctitud de la misma para los viajes a realizarse." ;
    
    idalenProyect.append(idalenHeader);
    idalenProyect.append(idalenContent);
    idalenProyect.append(idalenContentP2);
    proyectList.append(idalenProyect);

    // botones
    // var experienceCancelAction = document.createElement('button');
    // experienceCancelAction.textContent = 'Cancelar';
    // experienceCancelAction.className = 'button';
    // experienceCancelAction.type = "button";
    // experienceCancelAction.addEventListener('click', closeexperienceHandler);
    // var experienceConfirmAction = document.createElement('button');
    // experienceConfirmAction.textContent = 'Enviar';
    // experienceConfirmAction.className = 'button';
    // experienceConfirmAction.type = "submit";
    // experienceConfirmAction.addEventListener('submit', submitexperienceHandler);
    // var buttonContainer = document.createElement('div');
    // buttonContainer.appendChild(experienceConfirmAction);
    // buttonContainer.appendChild(experienceCancelAction);
    // // compendio de todo
    // experience.append(experienceTitle);
    // experience.appendChild(form);
    // form.append(buttonContainer);
    // document.body.appendChild(experience);
    
    experience.append(modalTitle);
    experience.append(proyectList);
    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    backdrop.addEventListener('click', closeexperienceHandler);
    document.body.append(experience);
    document.body.append(backdrop);
}
function closeexperienceHandler() {
    experience.remove();
    experience = null;
    backdrop.remove();
    backdrop = null;
}
function submitexperienceHandler() {
    var name = document.getElementById('nameField');
    var lastName = document.getElementById('lastNameField');
    var phone = document.getElementById('phoneField');
    var email = document.getElementById('mailField');
    var person = new Person(name, lastName, phone, email);
    person.Show();
    closeexperienceHandler();
}