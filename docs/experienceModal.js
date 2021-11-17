var card = document.getElementById('inzol');
card.addEventListener('click', showExperienceHandler);
var experience;

function showExperienceHandler() {
    if (experience) {
        return;
    }
    experience = document.createElement('modal');
    experience.className = 'modal experienceModal';
    var modalTitle = document.createElement('h1');
    modalTitle.className = 'h1';
    modalTitle.textContent = 'Proyectos';

    proyectList = document.createElement('ul');
    proyectList.className = 'ul prose';

    idalenProyect = document.createElement('li');
    idalenProyect.className = 'li';

    idalenHeader = document.createElement('h2');
    idalenHeader.className = 'h2'
    idalenHeader.textContent = 'Empresa forestal Idalen';

    idalenContent = document.createElement('p');
    idalenContent.className = 'p';
    idalenContent.textContent = "Mi rol consistio en ser desarrollador junior haciendo frontend con angular, backend con ASP.net y con dos bases de datos en " +
    "sql server. El proyecto fue un sistema de gestion de viajes entre cosechas de madera, acopios intermedios y Montevideo.";
    
    idalenContentP2 = document.createElement('p');
    idalenContentP2.className = 'p';
    idalenContentP2.textContent = "Desarrolle funcionalidades a lo largo de sprints de dos semanas durante cuatro meses. Entre estas funcionalidades " +
    "estan un sistema de notificaciones, la integracion este este sistema con otro mediante requests http y un modulo de gestion documentacion " +
    "que verifica la correctitud de la misma para los viajes a realizarse." ;
    
    idalenProyect.append(idalenHeader);
    idalenProyect.append(idalenContent);
    idalenProyect.append(idalenContentP2);
    proyectList.append(idalenProyect);

    //botones
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.className = 'button';
    closeButton.type = "button";
    closeButton.addEventListener('click', closeexperienceHandler);
    var buttonContainer = document.createElement('div');
    buttonContainer.appendChild(closeButton);
    
    experience.append(modalTitle);
    experience.append(proyectList);
    experience.append(buttonContainer); 
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