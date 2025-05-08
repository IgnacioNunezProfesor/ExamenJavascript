window.onload = setupPage;

function setupPage() {
    setDailyChiste();
    setButtonsEvent();
    createChistesList(chistes);
}

let chistes = [
    "¿Cuál es el lenguaje de programación favorito de los fantasmas? Boo-tstrap.",
    "¿Por qué los programadores prefieren la oscuridad? Porque la luz consume demasiados recursos.",
    "¿Cuál es el animal favorito de los programadores? El Python.",
    "¿Cómo se despiden los programadores? ¡Hasta la vista, baby! Return(0).",
    "¿Por qué el programador fue al terapeuta? Porque tenía demasiados problemas sin resolver."
];

var id = "";

function setButtonsEvent(){
    const buttonsEdit = document.querySelectorAll("button.btnedit");
    buttonsEdit.forEach(
        cButton => {
            setSaveEditEvent(cButton);
        }
    );
    let buttonsDel = document.querySelectorAll("button.btndel");
    buttonsDel.forEach(
        cButton => {
            setRemoveEvent(cButton);
        }   
    ); 
    const addButton = document.getElementById("btnNew");
    addButton.addEventListener("click", function () {
        const chisteInput = document.getElementById("chisteEdit");
        const chiste = chisteInput.value;
        if (chiste) {
            addChiste(chiste);
            chisteInput.value = "";
        } else {
            alert("Por favor, ingresa un chiste.");
        }
    });

}

function setRemoveEvent(button){
    button.addEventListener("click", function () {
        button.parentElement.remove();
    });    
}

function setSaveEditEvent(button) {
    button.addEventListener("click", function () {
        const editChistes = document.getElementById("chisteEdit");
        if (button.textContent == "Guardar") {
            button.textContent = "Editar";
            button.parentElement.querySelector("span").textContent = editChistes.value;
            editChistes.value = "";                
        }else if (button.textContent == "Editar") {
            button.textContent = "Guardar";
            editChistes.value = button.parentElement.querySelector("span").textContent;                
        }                        
    });
}

function createChistesList(chistes) {
    chistes.forEach(chiste => {
        addChiste(chiste)
    });
}

function setDailyChiste() {
    const chiste = getRandomChiste();
    const chisteElement = document.getElementById("ramdomText");
    chisteElement.innerHTML = chiste;
}   

function getRandomChiste() {
    const randomIndex = Math.floor(Math.random() * chistes.length);
    return chistes[randomIndex];
}

function addChiste(chiste) {

    const chisteList = document.getElementById("chistesList");
    const newChiste = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = chiste;

    const editButton = document.createElement("button");
    editButton.className = "btnedit";
    editButton.textContent = "Editar";
    setSaveEditEvent(editButton);


    const deleteButton = document.createElement("button");
    deleteButton.className = "btndel";
    deleteButton.textContent = "Eliminar";
    setRemoveEvent(deleteButton);     

    newChiste.appendChild(span);
    newChiste.appendChild(deleteButton);
    newChiste.appendChild(editButton);

    chisteList.appendChild(newChiste);
}
