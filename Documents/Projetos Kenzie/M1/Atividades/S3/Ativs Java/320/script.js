let nome = prompt("Informe seu nome", "Seu nome aqui");
let idade = parseInt(prompt("Informe sua idade"));
let estaAcompanhado = prompt("Está acompanhado?", "s ou n")
if (estaAcompanhado == "s") {
    estaAcompanhado = true
} else if (estaAcompanhado == "n") {
    estaAcompanhado = false
} else {
    alert("Recarregue a págine e informe corretamente")
}

if (idade < 18) {
    alert("Entrada não permitida para "+nome+".Menor de idade")
    location.reload()
} else if (estaAcompanhado == true) {
    alert("Entrada permitida para "+nome+". Conceder desconto.")
} else {
    alert("Entrada permitida para "+nome+". Valor integral.")
}