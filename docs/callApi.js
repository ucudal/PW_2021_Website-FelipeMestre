var xhttp = new XMLHttpRequest();
var experiences = new Array();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsonValue = JSON.parse(this.responseText);
        jsonValue["experiencia-laboral"].forEach(function (jobJSON) {
            var job = new JobExperience(jobJSON.empresa, jobJSON.posicion, jobJSON.descripcion, jobJSON.fechaInicio, jobJSON.fechaFin);
            experiences.push(job);
        });
        ;
        generateExperienceCard();
    }
};
xhttp.open("GET", "https://PW2021-APINode-FelipeMestre.felipemestre.repl.co/experiencia-laboral", true);
xhttp.send();
function generateExperienceCard() {
    experiences.forEach(function (job) {
        job.generateCard();
    });
}
var JobExperience = /** @class */ (function () {
    function JobExperience(company, position, description, initialDate, finishedDate) {
        this.company = company;
        this.position = position;
        this.description = description;
        this.initialDate = initialDate;
        this.finishedDate = finishedDate;
    }
    JobExperience.prototype.generateCard = function () {
        var _this = this;
        var experienceList = document.getElementById("experiencia-lista");
        var itemList = document.createElement("li");
        itemList.id = this.company;
        var card = document.createElement("div");
        card.className = "data-card items-end flex justify-start px-12 w-11/12 rounded-xl shadow-md hover:shadow-2xl hover:px-20 cursor-pointer";
        var experienceIcon = document.createElement("div");
        experienceIcon.className = "dataIcon";
        var companyLogo = document.createElement("img");
        companyLogo.src = "assets/images/" + this.company + ".svg";
        var textDiv = document.createElement("div");
        textDiv.className = "prose";
        var companyTitle = document.createElement("h3");
        var initialDateString = this.initialDate.toString().split('T')[0];
        var finishedDateString = this.finishedDate ? this.finishedDate.toString().split('T')[0] : "actualidad";
        companyTitle.textContent = this.company + " (" + initialDateString + " - " + finishedDateString + ")";
        var jobPosition = document.createElement("p");
        jobPosition.textContent = this.position;
        textDiv.appendChild(companyTitle);
        textDiv.appendChild(jobPosition);
        experienceIcon.appendChild(companyLogo);
        card.appendChild(experienceIcon);
        card.appendChild(textDiv);
        itemList.appendChild(card);
        itemList.addEventListener('click', function () {
            _this.modal = document.createElement('modal');
            _this.modal.className = 'modal experienceModal';
            var modalTitle = document.createElement('h1');
            modalTitle.className = 'h1';
            modalTitle.textContent = 'Descripción';
            var proyectList = document.createElement('ul');
            proyectList.className = 'ul prose';
            var idalenProyect = document.createElement('li');
            idalenProyect.className = 'li';
            var idalenContent = document.createElement('p');
            idalenContent.className = 'p';
            idalenContent.textContent = _this.description;
            idalenProyect.append(idalenContent);
            proyectList.append(idalenProyect);
            var closeButton = document.createElement('button');
            closeButton.textContent = 'Cerrar';
            closeButton.className = 'button';
            closeButton.type = "button";
            closeButton.addEventListener('click', function () {
                _this.modal.remove();
                _this.modal = null;
                _this.backdrop.remove();
                _this.backdrop = null;
            });
            var buttonContainer = document.createElement('div');
            buttonContainer.appendChild(closeButton);
            _this.modal.append(modalTitle);
            _this.modal.append(proyectList);
            _this.modal.append(buttonContainer);
            _this.backdrop = document.createElement('div');
            _this.backdrop.className = 'backdrop';
            _this.backdrop.addEventListener('click', function () {
                _this.modal.remove();
                _this.modal = null;
                _this.backdrop.remove();
                _this.backdrop = null;
            });
            document.body.append(_this.modal);
            document.body.append(_this.backdrop);
        });
        experienceList.appendChild(itemList);
    };
    return JobExperience;
}());
