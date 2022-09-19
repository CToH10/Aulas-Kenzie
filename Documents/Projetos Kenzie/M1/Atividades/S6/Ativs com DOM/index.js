let body = document.querySelector("body")

// let paragrafoTeste = document.createElement("p")

// body.appendChild(paragrafoTeste)

// paragrafoTeste.innerText = "Uma tag criada pelo JS, a fim de teste - Nível fácil"

// let testeInput = document.createElement("input")
// testeInput.placeholder = "Digite seu texto bem aqui, seu maluco"
// let testeFormulario = document.querySelector("form")
// let botaoTesteFormulario = document.createElement("button")
// botaoTesteFormulario.innerText = "Intermediário + Botão"
// testeFormulario.appendChild(testeInput)
// testeFormulario.appendChild(botaoTesteFormulario)

// let artigoTeste =  document.createElement("article")
// body.appendChild(artigoTeste)

// let tituloTeste = document.createElement("h1")
// artigoTeste.appendChild(tituloTeste)
// tituloTeste.innerText = "Título do Post - Avançado"

// let paragrafoTeste = document.createElement("p")
// artigoTeste.appendChild(paragrafoTeste)
// paragrafoTeste.innerText = "Descrição do Post"

// let ancoraTeste = document.createElement("a")
// artigoTeste.appendChild(ancoraTeste)
// ancoraTeste.innerText = "Ver post completo"
// ancoraTeste.href = "#"


let listFrutas = ["Limão", "Mamão", "Romã", "Maçã"]
let ul = document.getElementsByClassName('list-itens')[0];


function createElementeItens(){
for(let i = 0; i < listFrutas.length; i++){

  let element = document.createElement("li")
  element.innerText = `${listFrutas[i]}`
  ul.appendChild(element)
}
}

function addFrutas(novaFruta){
    listFrutas.push(novaFruta)
}

function removeFrutas(fruta){
    for (let i  =  0; i < listFrutas.length; i++){
        if (listFrutas[i] == fruta){
            listFrutas.splice(i, 1)
        }
    }
    console.log(listFrutas)
}
addFrutas("Melão")
// createElementeItens()
removeFrutas("Melão")
createElementeItens()