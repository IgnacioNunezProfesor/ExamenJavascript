window.onload = setupPage;
function setupPage() {
    setChiste();
    setRemoveButtonsEvent();
}


let chistes = [
"¿Cuál es el lenguaje de programación favorito de los fantasmas? Boo-tstrap.",
"¿Por qué los programadores prefieren la oscuridad? Porque la luz consume demasiados recursos.",
"¿Cuál es el animal favorito de los programadores? El Python.",
"¿Cómo se despiden los programadores? ¡Hasta la vista, baby! Return(0).",
"¿Por qué el programador fue al terapeuta? Porque tenía demasiados problemas sin resolver."
];

function setRemoveButtonsEvent(){
    let buttons = document.querySelectorAll("button.btnRemove").
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

