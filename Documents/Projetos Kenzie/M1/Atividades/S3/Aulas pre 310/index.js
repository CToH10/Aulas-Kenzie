// console.log("Estou no arquivo HTML, arquivo JS externo")

// let primeiroNumero = 11;
// let segundoNumero = 13;

// console.log(primeiroNumero + segundoNumero);
// primeiroNumero = 19;
// console.log(`A soma é: ${primeiroNumero + segundoNumero}`)

// console.log(typeof(primeiroNumero))

// let testeAspas = "José Valdo"
// console.log(testeAspas)

let nome = "Luís";
console.log("Olá eu sou", nome);

let sobrenome = "Nunes";
console.log("Olá eu sou", nome, sobrenome);

let nomeCompleto = `${nome} ${sobrenome}`
console.log("Ayo, eu sou", nomeCompleto)

let idade = 24;
console.log("Olá, eu sou", nomeCompleto, "e tenho", idade, "anos de idade");

console.log("Testando a barra invertida nas \"aspas\"")

let preco1 = 170;
let preco2 = 200;
let precoTotal = preco1 + preco2;
console.log("Comprei um teclado por", preco1, "reais e switches por", preco2, "reais, gastando um total de", precoTotal, "reais.");

console.log("O exercício 5 é igual ao 4...");

// let contador = 0
// console.log(contador)

// if (contador === 0) {
//     let contador = 1;
//     console.log(contador);
//     if (contador === 1) {
//         let contador = 2;
//         console.log(contador);
//         if (contador === 2) {
//             let contador = 3;
//             console.log(contador);
//           }
//       }
//   }
let contador = 0
console.log(contador);
contador ++;
console.log(contador);
contador ++;
console.log(contador);
contador ++;
console.log(contador);
contador ++;
console.log(contador);
contador ++;
console.log(contador);
  
let anoAtual = 2022;
let anoNasc = 1998;
let idadeAtual = anoAtual - anoNasc;
  console.log("Em", anoAtual, "tenho", idadeAtual, "anos de idade.");

let alturaRetangulo = 5;
let larguraRetangulo = 7;
let areaRetangulo = alturaRetangulo * larguraRetangulo;
console.log("Um retângulo com", alturaRetangulo,"unidades de medida de altura e com", larguraRetangulo, "unidades de medida de largura, tem", areaRetangulo, "unidades de medida ao quadrado de área");

// let diaAtual = "08"
// let mesAtual = 08
let dataAtualFormatada = "diaAtual, mesAtual, anoAtual"
console.log("Atividade 09 me pegou sem chances de fazer");

let valorA = 91;
let valorB = 97;
[valorA, valorB] = [valorB, valorA];
valorA;
valorB;
console.log("Antes o ValorA possuía o valor de", valorB, "agora possui o valor de", valorA);
console.log("Antes o ValorB possuía o valor de", valorA, "agora possui o valor de", valorB);