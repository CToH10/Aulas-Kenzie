// let conjuntoPessoas = []

// function createPerson(name){
//     const Person = {
//       name:name || 'Person',
//       age: 18,
//       status: 'spare',
//     }
//     return conjuntoPessoas.push(Person)
// }
    

// function alterName(newName, person){
//     for (let i = 0; i < conjuntoPessoas.length; i++){
//         if (person == conjuntoPessoas[i]){
//             person.name = newName;
//         }
//     }
//     }
    

// function alterStatus(person){
//     person[status] == 'busy' ? person.status = 'spare': person.status = 'busy'
//     console.log(person)
// }
      // COMEÇANDO COM DOM
      
const body = document.querySelector("body")

// const card = document.createElement("div")

// card.id = "div_card"

// body.appendChild(card)

// const container_photo = document.createElement("div")
// container_photo.id = "div_photo"

// const container_description = document.createElement("div")
// container_description.id = "div_description"

// card.appendChild(container_photo)
// card.appendChild(container_description)

// const text = document.createElement("p")
// text.id = "p_text"

// text.innerText = "Funcionário em treinamento"

// container_description.appendChild(text)

// const container_list = document.createElement("div")
// container_list.id = "div_list"

let artigo = document.createElement("article")
let tituloArtigo = document.createElement("h2")
let resumoArtigo = document.createElement("p")
let botaoArtigo = document.createElement("button")

body.appendChild(artigo)
artigo.appendChild(tituloArtigo)
artigo.appendChild(resumoArtigo)
artigo.appendChild(botaoArtigo)

tituloArtigo.innerText = "Como criar elementos HTML de forma dinâmica, utilizando Javascript"
resumoArtigo.innerText = "Nesse post vamos aprender como criar elementos utilizando o DOM"
botaoArtigo.innerText = "Acesse o conteúdo"