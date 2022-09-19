// const listDepartment = [
//     {
//       departamentName: 'Financial',
//       employees:
//       [
//         {
//           name: 'Rose',
//           age: 26,
//           responsibility: 'Financial director',
//           salary: 5600
//         },
//         {
//           name: 'Stevem',
//           age: 32,
//           responsibility: 'Financial manager',
//           salary: 4200
//         },
//         {
//           name: 'Beca',
//           age: 26,
//           responsibility: 'Financial analyst',
//           salary: 2800
//         }
//       ],
//       working: true
//     },
//     {
//       departamentName: 'expedition',
//       employees:
//       [
//         {
//           name: 'Rooper',
//           age: 35,
//           responsibility: 'Expedition director',
//           salary: 5600
//         },
//         {
//           name: 'Maggie',
//           age: 22,
//           responsibility: 'Expedition manager',
//           salary: 4200
//         },
//         {
//           name: 'Thompson',
//           age: 41,
//           responsibility: 'Expedition analyst',
//           salary: 2800
//         }
//       ],
//       working: true
//     },
//     {
//       departamentName: 'capitation',
//       employees:
//       [
//         {
//           name: 'Saory',
//           age: 35,
//           responsibility: 'Capitation director',
//           salary: 5600
//         },
//         {
//           name: 'Silvia',
//           age: 22,
//           responsibility: 'Capitation manager',
//           salary: 4200
//         },
//         {
//           name: 'Sonem',
//           age: 41,
//           responsibility: 'Capitation analyst',
//           salary: 2800
//         },
//         {
//           name: 'Havi',
//           age: 41,
//           responsibility: 'Trainee Capitation manager',
//           salary: 1500
//         },
//         {
//           name: 'Margie',
//           age: 25,
//           responsibility: 'Capitation analyst',
//           salary: 2800
//         },
//         {
//           name: 'Victoria',
//           age: 18,
//           responsibility: 'Trainee Capitation analyst',
//           salary: 1500
//         }
//       ],
//       working: true
//     },
// ]

// function acessarEmpregado(lista, nome){
//     for (let i = 0; i < lista.length; i++){
//         let controle = lista[i].employees
//         for (let e = 0; e < controle.length; e++){
//             if (controle[e].name == nome) {
//                 return controle[e]
//             }
//         }
//     }
// }

// function howManyDepartments(lista){
//     let contagem = 0
//     for (let i = 0; i < lista.length; i++){
//         // console.log(lista[i].departamentName)
//         if (typeof(lista[i].departamentName) == "string"){
//             contagem ++
//         }
//     }
//     return contagem
// }

// function changeDepartmentName(lista, departamento, novoNomeDepartamento){
//     for (let i = 0; i < lista.length; i++){
//         if (lista[i].departamentName == departamento){
//             lista[i].departamentName = novoNomeDepartamento
//         } else {
//             return `Departamento não encontrado`
//         }
//     }
// }

// function giveDepartmentBreak(lista, departamento){
//     for (let i = 0; i < lista.length; i++){
//         if (lista[i].departamentName == departamento){
//             lista[i].working == true ? lista[i].working = false : lista[i].working = true
//         }
//     }
// }

// function addDepartment(novoDepartamento, novosEmpregados, novoTrabalho){
//     if (typeof(novoDepartamento) != "string" || typeof(novosEmpregados) != "object" || typeof(novoTrabalho) != "boolean"){
//         return `Formato inválido`
//     }
//     listDepartment.push({
//         departamentName: novoDepartamento,
//         employees: novosEmpregados,
//         working: novoTrabalho
//     })
// }

// addDepartment('Marketing', [], true)

// function inserNewEmployeeInDepartament(departamento, nomeEmpregadoNovo, idadeEmpregadoNovo, repsonsabilidadeEmpregadoNovo, salarioEmpregadoNovo){
//     if (typeof(departamento) != "string" || typeof(nomeEmpregadoNovo) != "string" || typeof(idadeEmpregadoNovo) != "number" || typeof(repsonsabilidadeEmpregadoNovo) != "string" || typeof(salarioEmpregadoNovo) != "number"){
//         return `Tente outra vez`
//     }

//     for (let i = 0; i < listDepartment.length; i++){
//         if (listDepartment[i].departamentName == departamento){
//             listDepartment[i].employees.push({
//                 name:nomeEmpregadoNovo,
//                 age:idadeEmpregadoNovo,
//                 responsibility: repsonsabilidadeEmpregadoNovo,
//                 salary: salarioEmpregadoNovo
//             })
//             return `Departamento atualizado`
//         }
//     }
//     return `Departamento não encontrado`
// }

// inserNewEmployeeInDepartament('Marketing', "Joni", 24, "marketeiro", 1100)

// function howManyEmployeesInDepartament (lista, departamento){
//     let numeroEmpregados = 0
//     for (let i = 0; i < lista.length; i++){
//         if (lista[i].departamentName == departamento){
//             // console.log(lista[i])
//             numeroEmpregados = lista[i].employees.length
//             return numeroEmpregados
//         }
//     }
//     return `Departamento não encontrado`
// }
    
// howManyEmployeesInDepartament(listDepartment, "Marketing")

// function departamentPayroll (lista, departamento){
//     let folhaSalarial = 0
//     let achouDepartamento = false
//     for (let i = 0; i < lista.length; i++){
//         if (lista[i].departamentName == departamento){
//             let empregados = lista[i].employees
//         for (let e = 0; e < empregados.length; e++){
//             folhaSalarial += empregados[e].salary
//             achouDepartamento = true
//         }
//         }
//     }
//     if (achouDepartamento == false){
//         return `Departamento não encontrado`
//     }
//     return folhaSalarial
    
// }

// let pessoa = {
//     nome: "clara",
//     anoNascimento: 1996,
//     nomeDeUsuario: "CLARA_GOMES",
//     temCarro: true,
//     valeCombustivel: "R$ 0,00",
//     distanciaDoTrabalho: "120km",
//     endereco: []
// }


// function idadeDaPessoa (objPessoa) {
//     let anoAtual = new Date()
//     let idadeAtual = anoAtual.getFullYear() - objPessoa.anoNascimento
//     return idadeAtual
// }

// function normalizandoNome (objPessoa){
//     let nomeANormalizar = objPessoa.nome.split("")
//     nomeANormalizar[0] = nomeANormalizar[0].toUpperCase()
//     let nomeNormalizado = nomeANormalizar.join("")
//     return nomeNormalizado
// }

// console.log()

// let listaDeUsuarios = []

// function criandoListaDeUsuarios (nome, anoNascimento, nomeDeUsuario, temCarro, valeCombustivel, distanciaDoTrabalho, endereco){
//     let novoUsuario = {nome: nome,
//         anoNascimento: anoNascimento,
//         nomeDeUsuario: nomeDeUsuario.toLowerCase(),
//         temCarro: temCarro,
//         valeCombustivel: valeCombustivel,
//         distanciaDoTrabalho: distanciaDoTrabalho,
//         endereco: endereco
//     }
//     listaDeUsuarios.push(novoUsuario)
    
//     novoUsuario.nome = normalizandoNome(novoUsuario)
//     return listaDeUsuarios
// }

// criandoListaDeUsuarios("Luis", 1998, "demonQB", false, "R$ 0,00", "560km", [])
// criandoListaDeUsuarios("Ian", 1999, "palhaço", true, "R$ 0,00", "560km", [])
// criandoListaDeUsuarios("clara", 1996, "CLARA_GOMES", true, "R$ 0,00", "120km", [])

// function calculaVale(objPessoa){
//     let distanciaEmNumero = parseInt(objPessoa.distanciaDoTrabalho.slice(0, (objPessoa.distanciaDoTrabalho.length - 2)))
//     if (objPessoa.temCarro == true){
//         let valorVale = 0
//         let precoCombustivel = 6.99
//         valorVale = (precoCombustivel * distanciaEmNumero).toFixed(2)
//         return `R$ ${valorVale},00`
//     }
//     return `Não há vale a receber`
// }

// let endereco = {
//     cidade: 'Curitiba',
//     logradouro: 'Rua Dali',
//     numero: 10,
//     tipo:[]
// }

// function inserirTipo (objEndereco, tipoEndereco){
//     objEndereco.tipo.push(tipoEndereco)
//     return objEndereco
// }

// inserirTipo(endereco, "Casa")

// function adicionarEnderecoPessoa (objEndereco, objPessoa){
//     objPessoa.endereco.push(objEndereco)
//     return objPessoa
// }


// const carros = [
//     {
//     modelo:"Ka",
//     marca:"Ford",
//     ano:"2000",
//     cor:"Branco",
//     completo: false,
//     acessorios: ['Vidro Elétrico'],
//     preco: 'R$ 6.799,33'
//     },
//     {
//     modelo:"Gol",
//     marca:"VW",
//     ano:"1996",
//     cor:"Preto",
//     completo: false,
//     acessorios: ['Trava'],
//     preco: 'R$ 12.199,13'
//     },
//     {
//     modelo:"Palio",
//     marca:"Fiat",
//     ano:"1995",
//     cor:"Verde",
//     completo: false,
//     acessorios: [],
//     preco: 'R$ 11.099,11'
//     },
//     {
//     modelo:"Monza",
//     marca:"Chevrolet",
//     ano:"1993",
//     cor:"Vinho",
//     completo: false,
//     acessorios: [],
//     preco: 'R$ 14.578,25'
//     },
//     {
//     modelo:"Saveiro",
//     marca:"VW",
//     ano:"2013",
//     cor:"Prata",
//     completo: false,
//     acessorios: [],
//     preco: 'R$ 28.399,13'
//     },
//     {
//     modelo:"Gol",
//     marca:"VW",
//     ano:"1996",
//     cor:"Preto",
//     completo: true,
//     acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
//     preco: 'R$ 14.350,45'
//     },
//     {
//     modelo:"Gol",
//     marca:"VW",
//     ano:"2013",
//     cor:"Preto",
//     completo: true,
//     acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
//     preco: 'R$ 22.109,21'
//     },
//     {
//     modelo:"Montana",
//     marca:"Chevrolet",
//     ano:"2011",
//     cor:"Azul",
//     completo: false,
//     acessorios: [],
//     preco: 'R$ 15.999,13'
//     },
//     {
//     modelo:"Stilo",
//     marca:"Fiat",
//     ano:"2000",
//     cor:"Preto",
//     completo: false,
//     acessorios: [],
//     preco: 'R$ 17.251,36'
//     }
// ]

// function contaTotal(estoque){
//     return estoque.length
// }

// function precoTotal (estoque){
//     let somaPreco = 0
//     let controlandoPreco = 0
//     for (let i = 0; i < estoque.length; i++){
//         controlandoPreco = estoque[i].preco.replaceAll(".", "").replaceAll(",", ".").slice(3)
//         somaPreco += parseFloat(controlandoPreco)
//     }
//     let valorRetorno = somaPreco.toFixed(2).toString().replace(".", ",")
//     return `O valor total é R$ ${valorRetorno}`
// }

// function filtraPorMarca(estoque, marcaProcurada){
//     let listaMarca = []
//     for (let i = 0; i < estoque.length; i++){
//         if (estoque[i].marca == marcaProcurada){
//             listaMarca.push(estoque[i])
//         }
//     }
//     return listaMarca
// }

// function filtraPorAcessorio(estoque, acessorioProcurado){
//     let listaAcessorios = []
//     for (let i = 0; i < estoque.length; i++){
//         let acessoriosCarro = estoque[i].acessorios
//         for (let m = 0; m < acessoriosCarro.length; m ++){
//             if (acessoriosCarro[m] ==  acessorioProcurado){
//                 listaAcessorios.push(estoque[i])
//             }
//         }
//     }
//     return listaAcessorios
// }

// function seCarroCompleto(estoque){
//     let listaCompletos = []
//     for (let i = 0; i < estoque.length; i++){
//         if (estoque[i].completo == true){
//             listaCompletos.push(estoque[i])
//         }
//     }
//     return listaCompletos
// }

// function adicionarCarro(modelo, marca, ano, cor, completo, acessorios, preco){
//     carros.push({
//         modelo,
//         marca,
//         ano,
//         cor,
//         completo,
//         acessorios,
//         preco
//     })
//     return carros
// }
// adicionarCarro("Linea", "Fiat", "2008", "Azul", true, [], "R$ 12.221,10")

// function removerCarro(estoque, indice){
//     if (indice > estoque.length - 1){
//         return `Não existe no estoque`
//     }
//     estoque.pop(estoque[indice])
//     return estoque
// }

// function insereDono (estoque, posicao, pessoa){
//     estoque[posicao].dono = [pessoa]
//     return estoque
// }


// let pessoaAtiv = {
//     nome: "",
//     anoNascimento: 0,
//     cidade: "",

//     criarPessoa(nome, anoNascimento, cidade){
//         this.nome =  nome,
//         this.anoNascimento = anoNascimento,
//         this.cidade = cidade

//         return pessoaAtiv
//     },

//     apresentar (){
//         let anoCorrente = new Date ()
//         return `Olá eu sou ${this.nome}, tenho ${anoCorrente.getFullYear() - this.anoNascimento} anos de idade e moro em ${this.cidade}`
//     }
// }


// let elevadorAtiv = {
//     andarAtual: 0,
//     totalAndares: 13,
//     capacidadeElevador: 10,
//     ocupacaoAtual: 0,

//     entrarElevador (pessoasEntrando){
//         this.ocupacaoAtual += parseInt(pessoasEntrando)
//         if (this.capacidadeElevador < this.ocupacaoAtual){
//             return `Ocupação excedida em ${this.ocupacaoAtual - this.capacidadeElevador} pessoas`
//         }
//         return `Ocupação atual ${this.ocupacaoAtual} pessoas`
//     },

//     sairElevador(pessoasSaindo){
//         this.ocupacaoAtual -= pessoasSaindo
//         return `Ocupação atual ${this.ocupacaoAtual} pessoas`
//     },

//     mudarAndares(andarDesejado){
//         if (andarDesejado > this.totalAndares || andarDesejado < 0){
//             return `Andar inexistente`
//         }
//         if (andarDesejado > this.andarAtual){
//             this.andarAtual = andarDesejado
//             return `Subindo ao ${andarDesejado}º andar`
//         }
//         this.andarAtual = andarDesejado
//         return `Descendo ao ${andarDesejado}º andar`
//     }
// }

// let televisaoAtiv = {
//     canalAtual: 0,
//     volume: 0,

//     mudarVolume(sinal){
//         if (sinal == "+" || sinal == "aumentar"){
//             this.volume++
//             if (this.volume == 10){
//                 this.volume = 10
//                 return `Volume máximo`
//             }
//             return `Volume atual: ${this.volume}`
//         }
//         if (sinal == "-" || sinal == "diminuir"){
//             this.volume--
//             if (this.volume == 0){
//                 this.volume = 0
//                 return `Volume mínimo`
//             }
//             return `Volume atual: ${this.volume}`
//         }
//     },
//     // mudar canal é a mesma coisa

//     consultarCanal(){
//         console.log(this.canalAtual)
//     },
//     //consultar volume é a mesma coisa
// }

// let slenzie = {
//     nameEvent: "",
//     questions: ["user", "userQuestion", 0],
// }

// function createEvent(objeto, nomeEvento){
//     if (typeof(nomeEvento) != "string" || nomeEvento.length < 5){
//         return `Evento inválido`
//     }
//     objeto.nameEvent = nomeEvento
//     return objeto
// }

// createEvent(slenzie, "Teste do evento")

// function addQuestion(objeto, usuario, pergunta){
//     if (pergunta.length == 0){
//         return `Pergunta inválida`
//     }
//     if (usuario.length == 0){
//         return `Usuário não pode ser vazio`
//     }
//     for (let i = 0; i < objeto.questions.length; i++){
//         if (objeto.questions[i] == "user"){
//             objeto.questions[i] = usuario
//         }
//         if (objeto.questions[i] == "userQuestion"){
//             objeto.questions[i] = pergunta
//         }
//     }
//     objeto.questions.push("user")
//     objeto.questions.push("userQuestion")
//     objeto.questions.push(0)

//     return objeto
// }

// addQuestion(slenzie, "DQB", "Qual rota?")

// function addVoteToQuestion(objeto, voto){
//     if (voto+1 > objeto.questions.length || voto <= 0){
//         return `Pergunta inválida`
//     }
//     objeto.questions[voto + 1] = +1
//     return `Voto na pergunta "${objeto.questions[voto]}" registrado com sucesso`
// }

// function questionAnswered(objeto, pergunta, resposta){
//     if (pergunta < 0){
//         return `Valor inválido`
//     }
//     if (resposta){
//         objeto.questions[pergunta] = {
//             pergunta: objeto.questions[pergunta],
//             respondida: true
//         }
//     } else {
//         objeto.questions[pergunta] = {
//             pergunta: objeto.questions[pergunta],
//             respondida: false
//         }
//     }
    
// }

// questionAnswered(slenzie, 1)

// function questionUnanswered (objeto){
//     let listaNaoRespondida = []
//     for (let valores in objeto.questions){
//         if (objeto.questions[valores].respondida == false){
//             listaNaoRespondida.push(objeto.questions[valores])
//         }
//         // console.log(objeto.questions[valores])
//     }
//     return listaNaoRespondida
// }

// let agendinha = {
//     nome: "",
//     contatos: []
// }

// function formatarContato(nome, numero){
//     let novoContato = {
//         nome: nome,
//         numero: numero
//     }
//     return novoContato
// }

// function addContato(contatoAdicionar){
//     for (let numeros of agendinha.contatos){
//         if (contatoAdicionar.numero == numeros.numero){
//             return `Numero já existe`
//         }
//     }
//     agendinha.contatos.push(contatoAdicionar)
//     return agendinha.contatos
// }

// // function listarContatos(){
    
// //     return 
// // }

// function editarContato(contato, numero, nome){
//     for (let valores of agendinha.contatos){
//         if (typeof(numero) != "number"){
//             valores.numero = valores.numero
//         }
//         if (nome == null){
//             valores.nome = valores.nome
//         }
//         if (valores.nome == contato){
//             valores.nome = nome
//             valores.numero = numero
//         }
//     }
//     return `Contato modificado com sucesso`
// }

// formatarContato("Lisca", 2939402404)
// addContato(formatarContato("Lisca", 2939402404))
// addContato(formatarContato("Lemos", 2132324343))
// editarContato("Lemos", 86994303213, "Merdinha")