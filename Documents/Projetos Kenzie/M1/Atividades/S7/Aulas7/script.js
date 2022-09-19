// const titulo = document.querySelector("h1")


// titulo.addEventListener('mouseenter', function() {
//     titulo.innerHTML = "Com mouse por cima"
// });

// titulo.addEventListener("mouseleave", function(){
//     titulo.innerHTML = "Sem mouse por cima"
// });
let button = document.querySelector("button")

let classStyle = "button-black"

button.addEventListener("click", function(){
    const classResult = button.classList.toggle(classStyle) 
    if(classResult){
      button.textContent = "Classe Adicionada"
    }else{
      button.textContent = "Classe Removida"
    }
})