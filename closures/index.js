// const criaContador = () =>{
//     let count = 0
//     return(()=>{
//         count++
//         return count
//     })
// } 

// const contador = criaContador()
// console.log(contador())
// console.log(contador())
// console.log(contador())

// function geraSaudacao(nome) {
//     return (() => {
//         return `Olá, ${nome}`
//     })()
// }

// const saudacaoParaRafael = geraSaudacao('Rafael')
// console.log(saudacaoParaRafael)
// const saudacaoParaJoao = geraSaudacao('João')
// console.log(saudacaoParaJoao)

// function criaAdicionador(x){
//     return function(y){
//         return x+y
//     }
// }
// const adicionar = criaAdicionador(5)
// const adicionar10 = adicionar(10)
// console.log(adicionar10)

// function criaFiltro(filtro) {
//     return function (array) {
//         return array.filter(filtro)
//     }
// }

// const pares = criaFiltro(numero => numero % 2 == 0)
// console.log(pares([1,2,3,4,5,6]))

// function criaMultiplicador(x){
//     return function (y){
//         return x*y
//     }
// }

// const multiplicarPor2 = criaMultiplicador(2)
// const vezes = multiplicarPor2(4)
// console.log(vezes)

function filtrarOi (filtro){
    return function (palavra){
        return palavra.filter(filtro)
    }
}

const criaFiltro = filtrarOi(palavra => palavra == 'oi'? false : true)
console.log(criaFiltro(['oi', 'tchau', 'pode']))