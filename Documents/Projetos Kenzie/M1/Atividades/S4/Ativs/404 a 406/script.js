// function textReturn (){
//     return "Tem que colocar o script no HTML, né, imbecil"
// }

// // console.log(textReturn())

// function textReturn (text){
//     return text
// }

// console.log(textReturn("agora vai funcionar"))


// function textReturn (text){
//     console.log(text)
// }
// textReturn("Com script linkado fica muito mais fácil, né")

// function soma(valor1, valor2){
//     return valor1 + valor2
// }

// console.log(soma(14,13))

// function verificarTipo (valor1) {
//     return `O valor ${valor1} é ${typeof(valor1)}`
// }

// console.log (verificarTipo("34"))

// function somarNotas (nota1 = 10, nota2 = 0, nota3 = 0, nota4 = 0) {
    
//     if (nota1.toFixed && nota2.toFixed && nota3.toFixed && nota4.toFixed) {
//         return nota1 + nota2 + nota3 + nota4
//     } else {
//         return "Só pode meter número aqui"
//     }
// }

// let resultado = somarNotas(10, 25, 2, 5)

// console.log (resultado)

// CODE WARS - TESTE COM SPLIT DE ARRAY

// let teste2 = "what a wonderful world"

// let arrayando = teste2.split(" ")

// console.log(arrayando.includes("a"))

// CODE WARS - FIM

// function somaNotas (nota1, nota2, nota3, nota4) {
//     return nota1 + nota2 + nota3 + nota4
// }

// function mediaNotas (aluno) {
//     return aluno/4
// }

// let aluno = somaNotas(10, 5, 2, 9)
// let resultado = mediaNotas(aluno)
// console.log (`A média do aluno é ${resultado}.`)

// function convertToCelsius (tipo, num){
//     if (tipo == "Kelvin" && num.toFixed) {
//         let resultado = num - 273
//         return console.log(resultado)
//     } else if (tipo == "Fahrenheit" && num.toFixed){
//         let resultado = (num-32) / 1.8
//         return console.log(resultado)
//     } else {
//         console.log("Os valores submetidos não podem ser calculados")
//     }
// }

// function convertToKelvin (tipo, num){
//     if (tipo == "Celsius" && num.toFixed) {
//         let resultado = num + 273
//         return console.log(resultado)
//     } else if (tipo == "Fahrenheit" && num.toFixed){
//         let resultado = (num-32) * 5/9 + 273
//         return console.log(resultado)
//     } else {
//         console.log("Os valores submetidos não podem ser calculados")
//     }
// }
// function convertToFahrenheit (tipo, num){
//     if (tipo == "Celsius" && num.toFixed) {
//         let resultado = num * 1.8 + 32
//         return console.log(resultado)
//     } else if (tipo == "Kelvin" && num.toFixed){
//         let resultado = (num-273) * 1.8 + 32
//         return console.log(resultado)
//     } else {
//         console.log("Os valores submetidos não podem ser calculados")
//     }
// }

// convertToCelsius("Kelvin", 0)
// convertToFahrenheit ("Celsius", 233)
// convertToKelvin ("Celsius", -273)


// function rainAmount(mm){
//     if (mm < 40) {
//          return "You need to give your plant " + (40 - mm) + "mm of water"
//     } else {
//          return "Your plant has had more than enough water for today!"
//     }
// }

// rainAmount(30)
// console.log(rainAmount(0))

function getGrade (s1, s2, s3) {
    let media = (s1 + s2 + s3)/3
    if (media >= 90) {
        return "A"
    } else if (media < 90 && media >= 80) {
        return "B"
    } else if (media < 80 && media >=70) {
        return "C"
    } else if (media < 70 && media >= 60) {
        return "D"
    } else {
        return "F"
    }
}

console.log(getGrade(0, 0, 0))