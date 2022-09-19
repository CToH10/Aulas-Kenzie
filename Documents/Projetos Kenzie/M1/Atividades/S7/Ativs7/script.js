// // let kata1 = document.querySelector("#root")

// // let kata2 = document.querySelector("#root")
// // kata2.innerText = "Repetir"

// // let kata2 = document.querySelector("#root")
// // let kata4 = document.createElement("span")
// // kata2.appendChild(kata4)

// // kata4.innerText = "Repetir mais ainda"

// let produto = {
//     nome: 'Notebook',
//     valor: 3000.00,
//     liquidacao: true,
//     distribuidor: 'lojadakenzie.com.br'
// }

// let main = document.querySelector("#root")

// let listaDesordenada = document.createElement("ul")
// let elementoLista    = document.createElement("li")

// main.appendChild(listaDesordenada)
// listaDesordenada.appendChild(elementoLista)

// function renderizarTela(){
//     elementoLista.innerHTML = `${produto.nome}<br>
//         ${produto.valor}<br>
//         Distribuído por:<br>
//         <a class = "link" href="http://" target="_blank" rel="noopener noreferrer">${produto.distribuidor}</a>`
//     let selecionaLink = document.querySelector(".link")
//     if (produto.liquidacao == true){
//         selecionaLink.addEventListener("click", function(event){
//             event.preventDefault()
//             event.stopPropagation()
//             alert(`O preço promocional é ${produto.valor * 0.7}`)
//         })
//     }
// };
// renderizarTela()


// function maior(um, dois){
//     let i = um
//     let jota = dois
//     let comparacao = (i > jota)
//     console.log(comparacao)
//     comparacao ? console.log("maior") : console.log("menor")
// }
// maior(1, 3)

let adicionarTarefa = document.querySelector(".adicionarTarefa")
let botaoAdicionar  = document.querySelector(".submit")
let nomeTarefa      = document.querySelector(".nomeTarefa")
let prioridadeTarefa = document.querySelector(".prioridadeTarefa")
let listaTarefas     = document.querySelector("ul")
let urgentePrioritario = []
let normais = []
let tarefas = []
function adicionarLista (){
    let objTarefa = {nome :nomeTarefa.value, prioridade: prioridadeTarefa.value}
    if (prioridadeTarefa.value == "urgente"){
        urgentePrioritario.unshift(objTarefa)
    } else if (prioridadeTarefa.value == "prioritario"){
        urgentePrioritario.push(objTarefa)
    } else {
        normais.push(objTarefa)
    }
    tarefas = urgentePrioritario.concat(normais)
    exibirLista()
}

function exibirLista(){
    listaTarefas.innerHTML = ""
    for (let i = 0; i < tarefas.length; i++){
        let itensLista = document.createElement("li")
        itensLista.innerHTML = `${tarefas[i].nome}`
        listaTarefas.appendChild(itensLista)
    }
}

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault()
    adicionarLista()
})
exibirLista()