let minhaPrimeiraLista = [
    "Matemática", "Química", "Geografia", "Português", "Física"];
// console.log(minhaPrimeiraLista[2])

minhaPrimeiraLista [1] = "História"
// não gosto de química

let nomeDosCompetidores = ["Maria", "Heric", "Roberta", "Rafael", "Lucas"]

// console.log(`Quem ganhou foi ${nomeDosCompetidores[0]}`)
// console.log(nomeDosCompetidores.length)
// console.log(`Quem também ganhou foi ${nomeDosCompetidores[4]}`)

let posicoesDoPodio = [1,2,3,4,5]

let podio = `E o pódio é ${posicoesDoPodio[0]}: ${nomeDosCompetidores[0]}, ${posicoesDoPodio[1]}:${nomeDosCompetidores[1]} e ${posicoesDoPodio[2]}:${nomeDosCompetidores[2]}`
// console.log(podio)

const tiposDiversos =[1.5,"String",false,10]
const tiposDiversos2 =[true,"String","boolen",'10']
  
function qualTipoDeElemento(lista){
    let listaElementos = lista
    if (typeof listaElementos[0] == "number") {
        return true
      } else if (typeof listaElementos[1] == "number"){
        return true
      } else if (typeof listaElementos[2] == "number"){
        return true
      } else if (typeof listaElementos[3] == "number"){
        return true
      } else {
        return false
      }
}
    
// console.log(qualTipoDeElemento(tiposDiversos))
// console.log(qualTipoDeElemento(tiposDiversos2))

Math.floor(Math.random() * (4 - 1) + 1)

let passageiros = ["Victor", "Guilherme", "Daniel"]

function bilhetePremiado() {
    let assento = Math.floor(Math.random() * (4 - 1) + 1)
    if (assento == 1) {
        return `Quem ganhou foi ${passageiros[0]} no assento ${assento}`
    } else if (assento == 2) {
        return `Quem ganhou foi ${passageiros[1]} no assento ${assento}`
    } else if (assento == 3) {
        return `Quem ganhou foi ${passageiros[2]} no assento ${assento}`
    } else {
        return assento
    }
}

console.log(bilhetePremiado())