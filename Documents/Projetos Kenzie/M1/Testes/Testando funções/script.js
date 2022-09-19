//a função não quis funcionar como eu pretendia

let nomeAluno = prompt("Qual o seu nome?", "Insira um nome de pelo menos 5 letras")
if (nomeAluno.length < 5) {
    alert("O nome deve ter 5 caracteres");
    location.reload(index.html)
}

let presencaAluno = parseFloat(prompt("Qual sua presença?", "Insira valor entre 1 e 10"))
if (presencaAluno <= 0 || presencaAluno > 10) {
    alert("Presença inválida")
    location.reload(index.html)
}

let materia1 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia1.nota < 0 || materia1.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let materia2 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia2.nota < 0 || materia2.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let materia3 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia3.nota < 0 || materia3.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let materia4 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia4.nota < 0 || materia4.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let materia5 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia5.nota < 0 || materia5.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let materia6 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia6.nota < 0 || materia6.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let materia7 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia7.nota < 0 || materia7.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let materia8 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia8.nota < 0 || materia8.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let materia9 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia9.nota < 0 || materia9.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let materia10 = {
    materia: prompt("Digite a matéria", "Insira cada matéria apenas uma vez"),
    nota: parseFloat(prompt("Qual sua nota?", "Insira um valor entre 0 e 10")),
}
if (materia10.nota < 0 || materia10.nota > 10) {
    alert("Nota Inválida")
    location.reload()
}

let somaNotas = materia1.nota + materia2.nota + materia3.nota + materia4.nota + materia5.nota + materia6.nota + materia7.nota + materia8.nota + materia9.nota + materia10.nota

let mediaNotas = somaNotas/10

if (mediaNotas >= 8 && presencaAluno >= 6) {
    alert("A nota do aluno "+nomeAluno+" é de "+mediaNotas+" e sua presença de "+presencaAluno+" :Aluno aprovado")
} else {
    alert("A nota do aluno "+nomeAluno+" é de "+mediaNotas+" e sua presença de "+presencaAluno+" :Aluno aprovado")
}