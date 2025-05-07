window.onload = setupPage;
function setupPage() {
    setChiste();
    setButtonsEvent();
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
    let buttonsEdit = document.querySelectorAll("button.btnedit").
    forEach(function(button) {
        button.addEventListener("click", function () {
            if (button.textContent == "save") {
                button.parentElement.querySelector("span").textContent = editChistes.value;
                editChistes.value = "";
                button.textContent = "edit";
            }else if (button.textContent == "Editar") {
                button.textContent = "save";
                const editChistes = document.getElementById("chisteEdit");
                editChistes.value = button.parentElement.querySelector("span").textContent;
            }
        });
    }); 

    let buttonsDel = document.querySelectorAll("button.btndel").
    forEach(function(button) {
        button.addEventListener("click", function () {
            const parent = button.parentElement;
            parent.remove();
        });
    }); 
}

function setChiste() {
    const chiste = getRandomChiste();
    const chisteElement = document.getElementById("ramdomText");
    chisteElement.innerHTML = chiste;
}   

function getRandomChiste() {
    const randomIndex = Math.floor(Math.random() * chistes.length);
    return chistes[randomIndex];
}

