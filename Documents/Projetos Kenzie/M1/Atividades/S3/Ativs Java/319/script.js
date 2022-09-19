// let salarioMinimo = parseInt(prompt("Salário Mínimo"));
// let quilowattsGastos = parseInt(prompt("Gasto de Kw"));

// let valorKwReais = (salarioMinimo/700);

// let valorPago = (quilowattsGastos*valorKwReais);

// let valorDesconto = (valorPago*0.9);

// alert("Cada QuiloWatt custa R$"+valorKwReais.toFixed(2));
// alert("Sua conta é R$"+valorPago);
// alert("Com desconto, o valor é R$"+valorDesconto);


// let precoProduto = parseInt(prompt("Valor original do produto"));
// let desconto = 0.91;
// let novoPrecoProduto = precoProduto*desconto;
// alert("O novo preço desse produto é R$"+novoPrecoProduto.toFixed(2));


// let a = prompt("Insira seu nome");
// let b = prompt("Insira seu sobrenome");
// [a, b] = [b, a];
// a;
// b;
// alert("Seu nome no sistema japonês será "+a+" "+b)


let contaCorrente = parseInt(prompt("Insira os três dígitos de conta", "Apenas três dígitos"));
let contaCorrenteInvertida = 0;
contaCorrenteInvertida = Number(String(contaCorrente).split('').reverse().join(''));

let baseDigito = contaCorrente + contaCorrenteInvertida;
let baseSeparada = String(baseDigito).split('')
array = baseSeparada

let primeiroBaseSeparada = baseSeparada[0]
let segundoBaseSeparada = baseSeparada[1]
let terceiroBaseSeparada = baseSeparada[2]
let quartoBaseSeparada

if (baseSeparada.includes(baseSeparada[3])) {
    quartoBaseSeparada = baseSeparada [3]
}

let somaDigitos = Number(primeiroBaseSeparada)

if (baseSeparada.includes(baseSeparada[3])){
    somaDigitos = (Number(primeiroBaseSeparada))+ (Number(segundoBaseSeparada)*2) + (Number(terceiroBaseSeparada)*3) + (Number(quartoBaseSeparada)*4)
} else if (baseSeparada.includes(baseSeparada[2])){
    somaDigitos = (Number(primeiroBaseSeparada))+ (Number(segundoBaseSeparada)*2) + (Number(terceiroBaseSeparada)*3)
} else if (baseSeparada.includes(baseSeparada[1])) {
    somaDigitos = (Number(primeiroBaseSeparada))+ (Number(segundoBaseSeparada)*2)
}

let digitosMultiplicadosSeparados = String(somaDigitos).split('')

let digitoVerificador = digitosMultiplicadosSeparados.slice(-1)