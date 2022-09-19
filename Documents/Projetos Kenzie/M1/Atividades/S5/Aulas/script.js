let teclados = [
    ["60%", "75%", "96%"],
    ["metal", "policarbonato", "madeira"],
    ["linear", "tátil"]
]

console.log(`O teclado ideal para trabalhar com números é ${teclados[0][2]}, feito de ${teclados[1][1]} e com switch ${teclados[2][0]}`)

teclados[2].push("low profile")
console.log(teclados[2])