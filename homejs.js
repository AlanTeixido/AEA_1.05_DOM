
document.getElementById("canviText").addEventListener("click", function() {
    this.innerHTML = "Ja esta canviat...!";
});


document.getElementById("canviColor").addEventListener("click", function() {
    this.style.color = "blue";  
    this.style.fontSize = "large";  
});


const formularisug = document.getElementById("formularisug");
const campTextsug = document.getElementById("campTextsug");
const suggerimentsList = document.getElementById("suggeriments");

formularisug.addEventListener("submit", function(event) {
    event.preventDefault();

    const suggerimentText = campTextsug.value; 
    if (suggerimentText !== "") {
        const newSuggeriment = document.createElement("li");
        newSuggeriment.classList.add("suggeriment");

        const textSpan = document.createElement("span");
        textSpan.textContent = suggerimentText;

        const marcarRealitzatBtn = document.createElement("button");
        marcarRealitzatBtn.classList.add("marcarRealitzat");
        marcarRealitzatBtn.textContent = "Realitzat";
        marcarRealitzatBtn.addEventListener("click", function() {
            this.style.backgroundColor = "green";
            newSuggeriment.classList.toggle("completat");
        });

        const eliminarSuggerimentBtn = document.createElement("button");
        eliminarSuggerimentBtn.classList.add("eliminarSuggeriment");
        eliminarSuggerimentBtn.textContent = "Eliminar";
        eliminarSuggerimentBtn.addEventListener("click", function() {
            suggerimentsList.removeChild(newSuggeriment);
        });

        newSuggeriment.appendChild(textSpan);
        newSuggeriment.appendChild(marcarRealitzatBtn);
        newSuggeriment.appendChild(eliminarSuggerimentBtn);

        suggerimentsList.appendChild(newSuggeriment);
        campTextsug.value = ""; 
    }
});
