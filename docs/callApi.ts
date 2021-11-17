var xhttp = new XMLHttpRequest();
var experiences = new Array<JobExperience>();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let jsonValue = JSON.parse(this.responseText);
        
        jsonValue["experiencia-laboral"].forEach(jobJSON => {
            let job = new JobExperience(jobJSON.company,jobJSON.position,jobJSON.description, jobJSON.initialDate, jobJSON.finishedDate)
            experiences.push(job);
        });;
        generateExperienceCard();
    }
};
xhttp.open("GET", "https://PW2021-APINode-FelipeMestre.felipemestre.repl.co/experiencia", true);
xhttp.send();


function generateExperienceCard(){
    experiences.forEach(job => {
        job.generateCard();
    });
}

class JobExperience {

    private company: string;
    private position: string;
    private description: string;
    private initialDate: Date;
    private finishedDate: Date;
    private modal : HTMLElement;
    private backdrop : HTMLElement;
 
    constructor(company: string, position: string, description : string,  initialDate: Date, finishedDate: Date) {
        this.company = company ;
        this.position = position ;
        this.description = description ;
        this.initialDate =  initialDate;
        this.finishedDate =  finishedDate;
    } 

    public generateCard() : void{
        var experienceList = document.getElementById("experiencia-lista");
        let itemList = document.createElement("li");
        itemList.id = this.company;

        let card = document.createElement("div");
        card.className = "data-card items-end flex justify-start px-12 w-11/12 rounded-xl shadow-md hover:shadow-2xl hover:px-20 cursor-pointer";

        let experienceIcon = document.createElement("div");
        experienceIcon.className = "dataIcon";

        let companyLogo = document.createElement("img");
        companyLogo.src = "assets/images/" + this.company + ".svg";

        let textDiv = document.createElement("div");
        textDiv.className = "prose";

        let companyTitle = document.createElement("h3");
        companyTitle.textContent = this.company;

        let jobPosition = document.createElement("p");
        jobPosition.textContent = this.position;

        textDiv.appendChild(companyTitle);
        textDiv.appendChild(jobPosition);

        experienceIcon.appendChild(companyLogo);

        card.appendChild(experienceIcon);
        card.appendChild(textDiv);

        itemList.appendChild(card);

        itemList.addEventListener('click', () => {
            this.modal = document.createElement('modal');
            this.modal.className = 'modal experienceModal';
            var modalTitle = document.createElement('h1');
            modalTitle.className = 'h1';
            modalTitle.textContent = 'Proyectos';
        
            var proyectList = document.createElement('ul');
            proyectList.className = 'ul prose';
        
            var idalenProyect = document.createElement('li');
            idalenProyect.className = 'li';
        
            var idalenHeader = document.createElement('h2');
            idalenHeader.className = 'h2'
            idalenHeader.textContent = 'Empresa forestal Idalen';
        
            var idalenContent = document.createElement('p');
            idalenContent.className = 'p';
            idalenContent.textContent = this.description;
            
            idalenProyect.append(idalenHeader);
            idalenProyect.append(idalenContent);
            proyectList.append(idalenProyect);
        
            var closeButton = document.createElement('button');
            closeButton.textContent = 'Cerrar';
            closeButton.className = 'button';
            closeButton.type = "button";
            closeButton.addEventListener('click', () => {
                    this.modal.remove();
                    this.modal = null;
                    this.backdrop.remove();
                    this.backdrop = null;
                
            });
            var buttonContainer = document.createElement('div');
            buttonContainer.appendChild(closeButton);
            
            this.modal.append(modalTitle);
            this.modal.append(proyectList);
            this.modal.append(buttonContainer); 
            this.backdrop = document.createElement('div');
            this.backdrop.className = 'backdrop';
            this.backdrop.addEventListener('click', () => {
                this.modal.remove();
                this.modal = null;
                this.backdrop.remove();
                this.backdrop = null;
            });
            document.body.append(this.modal);
            document.body.append(this.backdrop);
        });

        experienceList.appendChild(itemList);
    }
}