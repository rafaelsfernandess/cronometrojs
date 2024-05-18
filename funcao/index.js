// function criaMultiplicador(multiplicador){
//     return function(numero){
//         return numero * multiplicador
//     }
// }
// const duplica = criaMultiplicador(2)
// const triplica = criaMultiplicador(3)
// const quadriplica = criaMultiplicador(4)

// console.log(duplica(3))
// console.log(triplica(3))
// console.log(quadriplica(3))

// function createGreeting(nome) {
//     return function () {
//         console.log(`${nome}, seja bem vindo(a)`)
//     }
// }

// const boasvindas = createGreeting('Rafael')
// boasvindas()

// function counter(){
//     let count = 0
//     return function(){
//         count ++
//         console.log(count)
//     }
// }

// const contador = counter()
// contador()
// contador()
// contador()

function criaFiltro(teste){
    return function(array){
        return array.filter(teste)
    }
}

const pares = numero => numero % 2 ==0
const filtrarPares = criaFiltro(pares)
console.log(filtrarPares([1,2,3,4,5,6]))

const positivos = numero => numero > 0
const  filtraPositivos = criaFiltro(positivos)
console.log(filtraPositivos([-1,-2, 0, 2, 1, 4]))

