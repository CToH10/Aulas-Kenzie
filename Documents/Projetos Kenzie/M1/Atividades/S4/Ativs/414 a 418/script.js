// function calculaIdade (ano) {
//     let anoAtual = new Date()
//     let idade = anoAtual.getFullYear() - Number(ano)
//     return idade
// }
//  console.log(calculaIdade(prompt("Seu ano de nascimento")))

// function calculaDiferençaAno (a, b) {
//     let diferença = a - b
//     return  Math.abs(diferença)
// }

// console.log(calculaDiferençaAno(1, 4))

// function valorAPagar (maças){
//     let preço = 0
//     if (maças >= 12) {
//         preço = 1
//     } else {
//         preço = 1.3
//     }
//     return maças * preço
// }

// console.log(valorAPagar(12))
// console.log(valorAPagar(11))

// function calculaValorSalario (salarioFuncionario, vendasMensais) {
//     let comissao = 0
//     let comissaoMensal = 0
//     if (vendasMensais <= 1500) {
//         comissao = 1.03
//         comissaoMensal = vendasMensais * comissao
//     } else {
//         comissao = 1.05
//         comissaoMensal = vendasMensais * comissao
//     }

//     return salarioFuncionario + comissaoMensal
// }

// console.log(calculaValorSalario(1200, 1800))
// console.log(calculaValorSalario(1000, 1500))

// let arrayNotas =  [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]
// function notaDaPosicao (indice){
//     return arrayNotas[indice]
// }

// console.log(notaDaPosicao(0))

// let arrayNotas =  [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]

// function aprovadoReprovado (indice){
//     if (arrayNotas[indice] >= 7){
//         return `Você está aprovado`
//     } else {
//         return `Você está reprovado`
//     }
// }

// console.log(aprovadoReprovado(1))


// let arrayNotas =  [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]

// function adicionaNota (novaNota) {
//     if (novaNota > 0 && novaNota <= 10) {
//         arrayNotas.push(novaNota)
//         console.log(arrayNotas)
//     } else {
//         return `Nota inválida`
//     }
// }

// console.log(adicionaNota(1))

// let arrayNotas =  [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]

// function alteraNota (indice, novaNota) {
//     if (novaNota <= 10 && novaNota > 0) {
//         arrayNotas[indice] = novaNota
//         return console.log(arrayNotas)
//     } else {
//         return console.log(`Nota inválida`)
//     }
// }
 
// alteraNota(0, 3)
// alteraNota(1, 12)
// let arrayNotas =  [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]

// function verificaTamanhoLista (lista) {
//     return console.log(`O tamanho da lista é ${lista.length}.`)
// }

// verificaTamanhoLista(arrayNotas)


//415


// function acharPares () {
//     let arr = [5, 4, 7, 30, 16, 89]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i])
//         }
//     }
// }

// acharPares()

// function somarArray () {
//     let arr = [1, '4', 9, 18]
//     for (let i = 0; i< arr.length; i++) {
//         arr[i] = parseInt(arr[i])
//     }
//     return console.log(arr[0] + arr[1] + arr[2] + arr[3])
// }

// somarArray()

// function monkeyCount(n) {
//     let monkeyNum = [n]
//     monkeyNum.length = n
//     for (let i = 1; i < monkeyNum.length ; i++){
//         monkeyNum[i] = i + 1
//     } 
//     return monkeyNum
// }

// monkeyCount(10)
// monkeyCount(1)

//const arr = N => [ /* the numbers 0 to N-1 */ ];

// let arraying = []
// function arr (n) {
//     if (n != null){
//         arraying.length = n
//     }    
//     for (i = 0; i < arraying.length; i++) {
//         arraying[i] = i
//     }
//     return arraying
// }

// console.log(arr())
// console.log(arraying)

// function sum (numbers) {
//     "use strict";
//     if (numbers == 0){
//         return 0
//     }
    
//     // for (let i = numbers.length; i >= 0; i--){
//     //     let soma = numbers[i-i] + + numbers[i-1]
    
//     //     return soma
//     // }
//     let sum = numbers.reduce(myFunction)
//     function myFunction(total, value) {
//         return total + value;
//       }
//     return sum
// }

// console.log(sum([1]))


// function getCount(str) {
//     // let base = Array.from(str)
//     // let vogais = base
    
//     // return isVowel.length;
//     let contagem = str.toString()
//     if (contagem.match(/[aeiouã]/gi)){
//         let contando = contagem.match(/[aeiouã]/gi).length
//         return contando
//     } else {
//         return 0
//     }
// }
// console.log(getCount("yrtnkzjsdnlkmnnzvxc"))


// let teste = [ 100, 101, 5, 5, 1, 1 ]
// function squareOrSquareRoot(array) {
//     for (let i = 0; i < array.length; i++){
//         if (Number.isInteger(array[i]**(1/2))){
//             array[i] = array[i]**(1/2)
//         } else{
//             array[i] = array[i]**2
//         }
//     }
//     return array;  
// }
// console.log(squareOrSquareRoot(teste))

// let base = ["bottom", "middle", "top"]
// function fixTheMeerkat(arr) {
//     // for (let index = 0; index < arr.length; i++){

//     // }
//     [arr[0], arr[2]] = [arr[2], arr[0]]
//     arr[0], arr[2]
//     return arr
//    }
// console.log(fixTheMeerkat(base))


// let binario = '45385593107843568'
// function fakeBin(x){
//     let base = x.toString().split('')
//     // let separado = base.split('')
//     for (let i = 0; i< base.length; i++){
//         if (base[i] >= 5){
//             base[i] = 1
//         } else {
//             base[i]=0
//         }
//     }
//     return base.join('')
// }
// console.log(fakeBin(binario))

// // var countSheep = function (num){
// //         let i = 0
// //         let answer = ""
// //         if (num == 0) {
// //             return ""
// //         } else {
// //         while (i <= num - 1){
// //             i++
// //             answer += `${i} sheep...`
// //         }
// //     }
// let sheep = "" __________ resolução do hudson, mais simples
// for (let i = 1; i >= num; i++){
//     sheep += `${i} sheep...`
// }
// //     return answer
// // }

// // console.log(countSheep(34))


// let controle = [0,1,2,3,4,5,6,7,8,9,10]
// // let controle = [0,1,5,3,2]
// function nextId(ids){
//     let maiorNumero = 0
//     for (let i = 0; i < ids.length; i++){
//         let numeroAtual = ids[i]
//         if(numeroAtual > maiorNumero){
//             maiorNumero = numeroAtual
//         }
//     }
//     for (let i = 0; i < ids.length; i++){
//         if (ids[i] < maiorNumero) {
//             return ids[i]
//         } else {
//           return maiorNumero + 1
//         }
//     }
//     return maiorNumero
// }

// console.log(nextId(controle))

//primo é divisivel somente por 1 e ele mesmo

// if (num % (any number other than num or 1) == 0)

// function isPrime(n) {
//     for (var i = 2; i < n; i++) { // se for 2, não cumpre condicional e cai fora
//       if(n % i === 0)
//       return false
//     }
//     return n > 1 // se for 1, falso
// }

// function roundToNext5(n){
//   while (n % 5 != 0){
//     n++
//   }
//   return n
// }
// console.log(roundToNext5(97))

// let kata = [3,4,3,2,3,1,3,3]
// function dominator(arr) {
//   let besta = 0
//   for (let i = 0; i < arr.length; i++){
//     // if (arr[i] == arr[i]){
//     //   besta +1
//     // }
//     besta.push(arr.filter(arr[i]))
//   }
//   return besta
// }

// console.log(dominator(kata))

let someando = [-10, -8, -16, -18, -19]
function largestPairSum (numbers) {
  // let maiorNumero = 0
  //     for (let i = 0; i < numbers.length; i++){
  //         let numeroAtual = numbers[i]
  //         if(numeroAtual > maiorNumero){
  //             maiorNumero = numeroAtual
  //         }
  //     }
  //   let segundoMaiorNumero = 0
  //   for (let i = 0; i < numbers.length; i++){
  //     let numeroAtual = numbers[i]
  //     if(numeroAtual > segundoMaiorNumero && numeroAtual != maiorNumero){
  //         segundoMaiorNumero = numeroAtual
  //     }
  // }
  // // console.log(segundoMaiorNumero)
  // return maiorNumero + segundoMaiorNumero
  let w3s = numbers.sort(function(a, b) {return a - b})
  return w3s[numbers.length - 1] + numbers[numbers.length - 2]
}

console.log(largestPairSum(someando))