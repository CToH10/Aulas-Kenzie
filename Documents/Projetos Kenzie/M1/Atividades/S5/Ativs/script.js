// let primeiroAmigo = ["higiente", 2, 3, 4, 5, 6]
// let segundoAmigo = ["alimentação", 2, 3, 4, 5]
// let terceiroAmigo = ["cuidados médicos", 2, 3, 4, 5]
// let quartoAmigo = ["lazer", 2, 3, 4]

// let suprimentos = [primeiroAmigo, segundoAmigo, terceiroAmigo, quartoAmigo]

// for (let i = 0; i < suprimentos.length; i++){
//     if (suprimentos[i].length != 5) {
//     console.log(`O ${suprimentos[i]} tem que colocar 5 itens`)
//     }
// }

// let arrayTeste = [0, -1, 4, -23, 84, -3, 5, -10]
// function quantosNegativos (array) {
//     let quantidade = 0
//     for (let i = 0; i < array.length; i++){
//         if (array[i] < 0){
//             quantidade++
//         }
//     }
//     return quantidade
// }
// console.log(quantosNegativos(arrayTeste))

// function somaNegativos (array){
//     let soma = 0
//     for (let i = 0; i <array.length; i++){
//         if (array[i] < 0){
//             soma = soma + array[i]
//         }
//     }
//     return soma
// }
// console.log(somaNegativos(arrayTeste))

// function paresAteNumero (numero){
//     let resultado = []
//     for (let i = 0; i <= numero; i++){
//         if (i > 0 && i % 2 == 0) {
//             resultado.push(i)
//         }
//     }
//     return resultado
// }
// console.log(paresAteNumero(12))

// function arrayNegativos (array){
//     let negativos = []
//     for (let i = 0; i < array.length; i++){
//         if (array[i] < 0){
//             negativos.push(array[i])
//         }
//     }
//     return negativos
// }
// console.log(arrayNegativos(arrayTeste))

// function somaPositiva (array){
//     let soma = 0
//     for (let i = 0; i < array.length; i++) {
//         soma = soma + array[i]
//     }
//     if (soma > array.length) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(somaPositiva(arrayTeste))

// function plusFive (array){
//     // let novoArray = []
//     for (let i = 0; i < array.length; i++){
//         // novoArray.push(array[i] + 5)
//         array[i] += 5
//     }
//     // return novoArray
//     return array
// }
// console.log(plusFive(arrayTeste))

// function mediaValores (array) {
//     let soma = 0
//     for (let i = 0; i < array.length; i++){
//         soma += array[i]
//     }
//     let media = soma / array.length
//     return media
// }

// function testandoMedia (array) {
//     let passouControle = []
//     let controle = mediaValores(array)
//     for (let i = 0; i< array.length; i++){
//         if (array[i] > controle) {
//             passouControle.push(array[i])
//         }
//     }
//     return passouControle
// }

// console.log(testandoMedia(arrayTeste))


// ---------------- ARRAY DE STRINGS ---------------

// let stringTeste = `Essa é uma template string para teste das demais funções`

// function contarLetra (string){
//     let quantidade = 0
//     for (let i = 0; i < string.length; i++){
//         if (string[i] == `a`){
//             quantidade ++
//         }
//     }
//     return quantidade
// }
// console.log(contarLetra(stringTeste))

// function somenteString (string){
//     for (let i = 0; i < string.length; i++){
//         if (typeof(string[i]) != "string") {
//             return `Só string, papai`
//         }
//         let somaDasStrings = 0
//         for (let c = 0; c < string.length; c++){
//             somaDasStrings += string[c].length
//         }
//         return somaDasStrings
//     }
// }
// console.log(somenteString([`Valorant`, `cobrança indevida`, `javascriptado`]))

// function stringMaior(parametro){
//     let impar = parametro.split(" ")
//     let mostrar = []
//     for (let i = 0; i < impar.length; i++){
//         if (impar[i].length % 2 != 0){
//             mostrar.push(impar[i])
//         }
//     }
//     return mostrar
// }
// console.log(stringMaior("Essa é uma nova string, para testar se tá funcionando"))

// function replaceString(parametro){
//     let funcionar = parametro.toString("").replaceAll("o", "0")
//     return funcionar
// }
// console.log(replaceString("O mundo é o planeta inteiro"))

//two ways
// function replaceString(parametro){
//     let funcionar = parametro.toString("").replaceAll("p", "P")
//     return funcionar
// }
// console.log(replaceString("O mundo é o planeta inteiro"))

// function upperCasing (parametro){
//     let controle = parametro.toString("")
//     let chato = []
//     for (let i = 0; i < controle.length; i++){
//         chato.push(controle[i])
//         if (chato[i] == "p"){
//             chato[i] = "P"
//         }
//     }
//     return chato.join("")
// }
// console.log(upperCasing("apenas testando os parametros da string"))

// teste para entrega - retornando em coment pra deixar salvo, sla pq
// function add(a, b){
//     return a + b
// }

// function multiply (a, b){
//     let resultado = 0
//     let multiplicador = b
//     let multiplicado = a
//     if (b > a){
//         multiplicado = b
//         multiplicador = a
//     }
//     for (let i = 1; i <= multiplicador; i = add(i, 1)){
//         resultado += add(multiplicado, 0)
//     }
//     return resultado
// }
// // console.log(multiply(4, 6))

// function power (a, b){
//     let primeira = a
//     let atual = 0
//     if (b == 0){
//         return 1
//     } else if (b == 1){
//         return a
//     }
//     for (let i = 1; i < b; i = add(i, 1)){
//         atual = multiply(primeira, a)
//         primeira = atual
//     }
//     return atual
// }

// function factorial(num){
//     let numeros = []
//     let proxima = 0
//     for (let i = 1; i <= num; i = add(i, 1)) {
//         numeros.push(i)
//     }
//     for (let j = 1; j < numeros.length; j = add(j, 1)) {
//         numeros[j] = multiply(numeros[j], numeros[add(j,-1)])
//         proxima = numeros[j]
//     }
//     return proxima
// }

// // console.log(`A soma de 2 e 4 resulta em ${add(2, 4)}, já a multiplicação de 6 e 8 retorna o resultado de ${multiply(6, 8)}; enquanto isso, 2 elevado a 8 resulta em ${power(2, 8)} e o fatorial de 4 é ${factorial(4)}.`)

// function fibonacci (num){
//     let numeros = [0, 1]
//     for (let j = 0; j < numeros.length; j = add(j, 1)) {
//         if (num >= numeros.length) {
//             numeros.push(add(numeros[add(numeros.length, -1)],numeros[add(numeros.length, -2)]))
//         } else {
//             return numeros[num]
//         }
//     }
//     return numeros[num]
// }
// console.log(fibonacci(7))

// CODEWARS - QUE TÁ FORA DO AR
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (distanceToPump > (mpg * fuelLeft)){
//         return false
//     }
//     return true
// };

// function updateLight(current) {
//     if (current == "green"){
//         return "yellow"
//     } else if (current == "yellow"){
//         return "red"
//     } else if (current == "red"){
//         return "green"
//     }
// };

// function remainder(n, m){
//     let resto = n % m
//     if (m > n){
//         resto = m % n
//     }
//     return resto
// };

// function lovefunc(flower1, flower2){
//     if ((flower1 % 2) != (flower2 % 2)){
//         return true
//     }
//     return false
// };

// let garden = [
//     [0,0,0,"G"],
//     [0,0,"G",0],
//     [0,"G",0,0],
//     ["G",0,0,0]
//     ]

// function trimTheGrass (arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++){
//             if (arr[i][j] == "G"){
//                 arr[i][j] = 0
//             }
//         }
//     }
//     return "Tarefa concluída"
// }
// function checharGrama (grama){
//     if (grama == "Tarefa concluída"){
//         return "Tá de boa"
//     }
//     return "Ainda falta cortar"
// }
// console.log(trimTheGrass(garden))

// console.log(checharGrama(trimTheGrass(garden)))

// function binRota(arr){
//     // if (arr != []){
//     //     return `Test failed`
//     // }
//     let receber = []
//     for (let i = 0; i < arr.length; i++){
//        for (let j = 0; j <= arr[i].length; j++){
//         console.log(arr[i][j])
//         if (j == arr[i].length){
//             for (let j = arr[i].length - 1; j > 0; j--){
//                 console.log(arr[i][j])
//             }
//         }
//        }
//     }
//     return receber
// }
// console.log(binRota([["nome"], ["nome2", "nome3", "nome4"]]))

// function calorie (member){
//     let nome            = member[0]
//     let genero          = member[1]
//     let idade           = member[2]
//     let altura          = member[3]
//     let peso            = member[4]
//     let atividade       = member[5]
//     let fatorAtividade  = 0
//     let rmrAgender      = 10 * peso + 6.25 * altura - 5 * idade
//     let rmr             = 0
//     let caloriasDiarias = 0
//     if (genero == "m"){
//         rmr = rmrAgender + 5
//     } else {
//         rmr = rmrAgender - 161
//     }
//     if (atividade == "little activity"){
//         fatorAtividade = 1.2
//     } else if (atividade == "moderately active"){
//         fatorAtividade = 1.55
//     } else if (atividade == "very active"){
//         fatorAtividade = 1.7
//     } else if (atividade == "extremely active"){
//         fatorAtividade = 1.900007167
//     }
//     caloriasDiarias = (rmr * fatorAtividade).toFixed(2)

//     return `${nome}´s daily calorie requirement is ${caloriasDiarias} kcal.`
// }

// console.log(calorie(["Sandra", "f", 17, 165, 61, "extremely active"]))

// let teste = {name: "Hero",
//     position: "00",
//     health: 100,
//     damage: 5,
//     experience: 0}
// function Hero (name) {
//     let hero = {
//         name: "",
//         position: "00",
//         health: 100,
//         damage: 5,
//         experience: 0
//     }
//     // if (name == undefined){
//     //     hero.name = "Hero"
//     // } else {
//     //     hero.name = name
//     // }
//     hero.name = name || "Hero"
//     return hero
// }

// function boredom(staff){
//     let valores = Object.values(staff)
//     let moral = 0
//     for (let i = 0; i < valores.length; i++) {
//         if (valores[i] == "accounts"){
//             moral += 1
//         } else if (valores[i] == "finance") {
//             moral += 2
//         } else if (valores[i] == "canteen") {
//             moral += 10
//         } else if (valores[i] == "regulation") {
//             moral += 3
//         } else if (valores[i] == "trading" || valores[i] == "change") {
//             moral += 6
//         } else if (valores[i] == "IS") {
//             moral += 8
//         } else if (valores[i] == "retail") {
//             moral += 5
//         } else if (valores[i] == "cleaning") {
//             moral += 4
//         } else if (valores[i] == "pissing about") {
//             moral += 25
//         }
//     }
//     if (moral <=80) {
//         return "kill me now"
//     } else if (moral < 100 && moral > 80) {
//         return "i can handle this"
//     } else if (moral >= 100) {
//         return "party time!!"
//     }
// }

// const whosOnline = (friends) => {
//     if (friends == undefined){
//         return {}
//     }
//     let quemTaOn = {
//         online: "",
//         offline: "",
//         away: ""
//     }
//     let paiTaOn = []
//     let paiTaOff = []
//     let paiTaAway = []
//     for (let i = 0; i < friends.length; i++){
//         if (friends[i].status == "offline"){
//             paiTaOff.push(friends[i].username)
//         } else if (friends[i].status == "away" || friends[i].lastActivity > 10){
//             paiTaAway.push(friends[i].username)
//         } else if (friends[i].status == "online"){
//             paiTaOn.push(friends[i].username)
//         }
//     }
//     Object.defineProperty(quemTaOn, "online", {value: paiTaOn})
//     Object.defineProperty(quemTaOn, "offline", {value: paiTaOff})
//     Object.defineProperty(quemTaOn, "away", {value: paiTaAway})
//     if (quemTaOn.online == ""){
//         delete quemTaOn.online
//     }
//     if (quemTaOn.offline == ""){
//         delete quemTaOn.offline
//     }
//     if (quemTaOn.away == ""){
//         delete quemTaOn.away
//     }
//     return quemTaOn
// }

// function aliasGen(primeiroNome, segundoNome){
//     let primeiroNomeTratado  = primeiroNome.toLowerCase()
//     let segundoNomeTratado   = segundoNome.toLowerCase()
//     let nomeHackerson        = []
//     let comparacacaoPrimeiro = Object.values(firstName)
//     let comparacacaoSegundo  = Object.values(surname)
//     for (let i = 0; i < comparacacaoPrimeiro.length; i++){
//         if (primeiroNomeTratado[0] == comparacacaoPrimeiro[i][0].toLowerCase()){
//             nomeHackerson.push(comparacacaoPrimeiro[i])
//         }
//     }
//     for (let s = 0; s < comparacacaoSegundo.length; s++){
//         if (segundoNomeTratado[0] == comparacacaoSegundo[s][0].toLowerCase()){
//             nomeHackerson.push(comparacacaoSegundo[s])
//         }
//     }
//     if (nomeHackerson.length != 2){
//         return "Your name must start with a letter from A - Z."
//     }
//     return nomeHackerson.join(" ")
// }

// const languages = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
// }
// function greet(language) {
// 	let linguas = Object.keys(languages)
//     let palavras = Object.values(languages)
//     let cumprimento = "Welcome"
//     for (let i = 0; i< linguas.length; i++){
//         if (language == linguas[i]){
//             cumprimento = palavras[i]
//         }
//     }
//     return cumprimento
// }

// function well(x){
//     let count = 0
//     for (let i = 0; i < x.length; i++){
//         let arr = x[i]
//         for (let j = 0; j < arr.length; j++){
//             let comparacao = arr[j]
//             if (typeof(comparacao) == "string"){
//                 comparacao = comparacao.toLowerCase()
//             }
//             if (comparacao == "good"){
//                 count ++
//             }
//         }
//     }
//     if (count <= 2 && count > 0) {
//         return `Publish!`
//     } else if (count > 2){
//         return `I smell a series!`
//     }
//     return `Fail!`
// }

// var list1 = [
//     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
//   ];

// function getFirstPython(list) {
//     let first = ""
//     for (let i = 0; i < list.length; i++){
//         if (list[i].language == `Python`){
//             first = `${list[i].firstName}, ${list[i].country}`
//             return first
//         }
//     }
//     return `There will be no Python developers`
// }

// function killer(suspectInfo, dead) {
//     let suspeitando = Object.keys(suspectInfo)
//     let tiveramContato = Object.values(suspectInfo)
//     let suspeitoAssassinado = []
//     for (let i = 0; i < tiveramContato.length; i++){
//         let contatoValor = tiveramContato[i]
//         for (let j = 0; j < contatoValor.length; j++){
//             for (let k = 0; k < dead.length; k++){
//                 if (contatoValor[j] == dead[k]){
//                     suspeitoAssassinado.push(suspeitando[i])
//                 }
//             }
//         }
//     }
//     for (let l = 0; l < suspeitoAssassinado.length; l++){
//         if (suspeitoAssassinado[l] != suspeitoAssassinado[l-1]){
//             return suspeitoAssassinado[l]
//         }
//     }
//     return suspeitoAssassinado.toString()
// }

// const alunoCurso = {
//     nome: "João",
//     idade: 31,
//     curso: "FullStack",
//     instituicao: "Kenzie Br",
//     materias: ["Html", "Css", "JavaScript", "Python"],
//     situacaoMatricula: true,
// };

// function carteiraAluno(cursoAluno, materiaAluno, situacaoMatriculaAluno, criarCarteira){
//     if (cursoAluno != 1){
//         return `Formato inválido`
//     } else if (materiaAluno != 2){
//         return `Formato inválido`
//     } else if (situacaoMatriculaAluno != 3){
//         return `Formato inválido`
//     } else if (criarCarteira != 4){
//         return `Formato inválido`
//     }
//     let acessarMateria = getTheSubjects(alunoCurso)
//     let acessarSituacao = registrationStatus(alunoCurso)
//     let acessarCurso = getTheCurse(alunoCurso)
//     let criarCarteiraEstudante = generateStudentCard(alunoCurso)
//     return criarCarteiraEstudante
// }

// function getTheCurse (cursoDoAluno){
//     return alert(cursoDoAluno.curso)
// }

// function getTheSubjects(materiaAluno){
//     let materiasTratadas = materiaAluno.materias.join(", ")
//     return alert(materiasTratadas)
// }

// function registrationStatus(situacaoMatriculaAluno){
//     if (situacaoMatriculaAluno.situacaoMatricula == true){
//         return alert(`Aluno ativo`)
//     }
//     return alert(`Aluno inativo`)
// }

// function generateStudentCard(infoAluno){
//     let cardInformation = `Nome: ${infoAluno.nome}, idade: ${infoAluno.idade}, curso: ${infoAluno.curso}, instituição: ${infoAluno.instituicao}`
//     return cardInformation
// }

// const user = {
//     name: "Jhon Doyle Fox",
//     savingsBalance: 500,
//     cardsInformation: [
//         {
//           number: "5160 4196 4843 3388",
//           creditBalance: 1000,
//           ensign: "American Express",
//         },
//       ],
// };

// function menu(usuario, contaEscolhida, operacao, valor){
//     let valorTratado = (parseInt(valor))
//     if (typeof(valor) == "number"){
//         if (Number.isInteger(valor) == false){
//             alert(`O caixa não aceita decimais, a operação seguirá com R$ ${valorTratado},00`)
//         }
//         if (valorTratado < 5) {
//             return alert(`Valor inválido.
//             Movimentação mínima de R$ 5,00`)
//         }
//     }
//     let enviarUsuario = usuario
//     console.log(enviarUsuario)
//     let enviarContaEscolhida = ""
//     if (contaEscolhida == "savingsBalance" || contaEscolhida == "poupança" || contaEscolhida == "savings" || contaEscolhida == "poupanca"){
//         enviarContaEscolhida = "savings"
//     } else {
//         enviarContaEscolhida = "credit"
//     }
    
//     if (operacao == 1){
//         saque(valorTratado, enviarContaEscolhida, enviarUsuario)
//     } else if (operacao == 2){
//         saldo(enviarContaEscolhida, enviarUsuario)
//     } else if (operacao == 3){
//         if (valorTratado > 500){
//             return `Movimentação máxima de R$ 500,00`
//         }
//         deposito(valorTratado, enviarUsuario)
//     }
    
// }

// function saque(valor, contaEscolhida, usuario){
//     if (contaEscolhida == "savings"){
//         if (valor > usuario.savingsBalance){
//             return alert(`Saldo da poupança é insuficiente.`)
//         }
//         usuario.savingsBalance += -(valor)
//         return alert(`R$ ${valor},00 retirado.
//         Novo saldo R$ ${usuario.savingsBalance},00`)
//     }
//     if (contaEscolhida == "credit"){
//         if (valor > usuario.cardsInformation[0].creditBalance){
//             return alert(`Crédito insuficiente.`)
//         }
//         usuario.cardsInformation[0].creditBalance += -(valor)
//         return alert(`R$ ${valor},00 retirado.
//         Novo saldo R$ ${usuario.cardsInformation[0].creditBalance},00`)
//     }
//     return "Operação não reconhecida"
// }

// function saldo(contaEscolhida, usuario){
//     let saldoEscolhido = 0
//     if (contaEscolhida == "credit"){
//         saldoEscolhido = usuario.cardsInformation[0].creditBalance
//         return alert(`Crédito disponível: R$ ${saldoEscolhido},00`)
//     }
//     if (contaEscolhida == "savings"){
//         saldoEscolhido = usuario.savingsBalance
//         return alert(`Saldo disponível R$ ${saldoEscolhido},00`)
//     }
// }

// function deposito(valor, usuario){
//     usuario.savingsBalance += valor
//     return alert(`Valor depositado com sucesso.
//     Novo saldo: R$ ${usuario.savingsBalance},00`)
// }

// function solution(a, b){
//     let tamanhoUm = a.length
//     let tamanhoDois = b.length
//     if (tamanhoDois < tamanhoUm){
//         return `${b}${a}${b}`
//     }
//     return `${a}${b}${a}`
// }

// function pairs(ar){
//     let retorno = 0
//     let tamanho = ar.length
//     let percorrerPares = 0
//     if (tamanho % 2 == 0){
//         percorrerPares = (ar.length) / 2
//         for (let i = percorrerPares; i <= percorrerPares; i++){
//             for (let j = 0; j < tamanho; j += 2){
//                 if ((ar[j+1]) - (ar[j]) == 1 || (ar[j+1]) - (ar[j]) == -1){
//                     retorno++
//                 }
//             }
//         }
//     } else {
//         percorrerPares = (ar.length-1) / 2
//         for (let i = percorrerPares; i <= percorrerPares; i++){
//             for (let j = 0; j < tamanho - 1; j += 2){
//                 console.log((ar[j+1]) - (ar[j]))
//                 if ((ar[j+1]) - (ar[j]) == 1 || (ar[j+1]) - (ar[j]) == -1){
//                     retorno++
//                 }
//             }
//         }
//     }
//     return retorno
// }
