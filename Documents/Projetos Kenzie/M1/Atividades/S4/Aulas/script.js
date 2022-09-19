// let myArray = ["Hello", "Bitches"]
// let secondArray = new Array(7, 6, 42)


// let arrayVazia = []
// let arrayNumeros = [2, 4, 6, 8]
// let arrayStrings = ["Mais", "palavras", "por", "aqui"]
// let newData = ["trabalhar", "estudar", 1, true]

// // console.log(arrayVazia)
// // console.log(arrayNumeros[1])
// // console.log(arrayStrings[3])
// // console.log(newData[3])

// arrayNumeros.push(10)
// // console.log(arrayNumeros) - adiciona no final
// arrayNumeros.unshift(0)
// // console.log(arrayNumeros) - adiciona no início
// arrayNumeros.pop()
// // console.log(arrayNumeros) - último elemento removido
// // console.log(arrayNumeros.length)
// let multiArray = [2, 4, [8, 6]]
// console.log(multiArray[2][1])


//LOOPS

// const fruits = ['banana', 'maça', 'abacate']
// let i = 0
// while (i < fruits.length) {
//     console.log(fruits[i]) //valor
//     console.log(i) //índice
//     i = i + 1
// }

// Exibir os números de 1 à 5
// const n = 5;
// // looping de i = 1 até 5
// // em cada iteração, i é aumentado em 1
// for (let i = 1; i <= n; i++) {
//     console.log(i); // imprimindo o valor de i
// }

// let n = 10

// for (let i = 10; i <= 10 && i >= 0; i--)
// console.log(i)

// let states = ["Piauí", "Sergipe", "Ceará", "Alagoas", "Rio Grande do Norte", "Pernambuco", "Bahia", "Paraíba", "Maranhão"]

// for (let i = 1; i <= states.length; i++) {
//     console.log(states[states.length -i])
// }

// for (let i = 0; i < states.length; i+=2) {
//     console.log(states[i])
// }

// for (let i = states.length - 1; i >= 0 ; i--) {
//     console.log(states[i])
// }      

// let i = 0
// while (i < 3) {
//     console.log(i)
//     i++
// }

// let codiguin = prompt ("Digite o código")

// while (codiguin != 69420) {
//     alert("Código incorreto")
//     codiguin = prompt("Tente novamente")
// }

// alert("Dale")

// let evento = [prompt("Eventos de formatura")]

// while (evento.length <= 3){
//     evento.push(prompt("outro evento"))
// }

// console.log(evento)

// function funcaoContaPasso(passos){
//     if (passos < 0 || passos > 10){
//         return alert("Essa casa nem existe")
//     }
//     let i = 1
//     while(i <= passos){
//         console.log(`Visitei a ${i}ª casa`)
//         i++
//       }
// }
// funcaoContaPasso(4)

// console.log(121 ** (1/2)) -- fazendo raiz quadrada


// function casaAtual (casinha){
//     if (casinha < 0 || casinha == 1) {
//         return console.log(`Valor inválido`)
//     }
//     let i = casinha
//     while (i >= 1) {
//         console.log(`Você está na casa ${i}`)
//         i--
//     }
// }
// casaAtual(5)

// let frutas = ['maçã', 'banana', 'laranja', 'limão']
// let preferencias = ['gosto', 'odeio', 'gosto muito', 'amo']

// let indice = 0

// while (indice < frutas.length){
//     console.log(`A fruta ${frutas[indice]} eu ${preferencias[indice]}`)
//     indice++
// }

// //ATIVIDADE FICOU AQUI, MY BAD MINHA

// let nicknames = ["Nome", "José", "Josesvaldo", "Josefina", "Josefa", "Josesvaldicleidson"]

// function receberApelidos (nome){
//     let comparar = nome
//     let regex = /[A-Z]/g
//     if (nome == null){
//         return `Custava botar um nome?`
//     }
//     let tamanho = comparar.match(regex)
//     if (tamanho == null){
//         return `Pelo menos uma maiúscula`
//     } else if (nome.length < 11){
//         return `Pelo menos 11 letrinhas, chefe`
//     }
//     for (let indice = 0 ; indice < nicknames.length; indice++) {
//         if (nome == nicknames[indice]){
//             return `Apelido já cadastrado`
//         }
//     }
//     nicknames.push(nome)
//     return `Apelido inserido com sucesso`
// }

// let teste = receberApelidos(prompt("Seu apelido"))
// let cadastro = numeroCadastrados()

// function numeroCadastrados(){
//     return `Existem ${nicknames.length} pessoas cadastradas, são elas: ${nicknames}`
// }