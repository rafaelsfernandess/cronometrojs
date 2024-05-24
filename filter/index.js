// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// function callbackFilter(valor, indice, array) {
//     return (valor > 10)
// }

// const numerosFiltrados = numeros.filter(callbackFilter)
// console.log(numerosFiltrados)

// const numerosFiltradosMinificado = numeros.filter(valor => valor > 10)
// console.log(numerosFiltradosMinificado)

// const numerosFiltradosTodosParametros = numeros.filter((valor, indice, array) => {
//     console.log('valor: '+valor, ', indice: '+indice,', array: '+ array)
//     return valor > 10

// })
// console.log(numerosFiltradosTodosParametros)

const pessoas = [
    {nome: 'Luiz',      idade :62},
    {nome: 'Maria',     idade :23},
    {nome: 'Eduardo',   idade :55},
    {nome: 'Letícia',   idade :19},
    {nome: 'Rosana',    idade :32},
    {nome: 'Wallace',   idade :47},
]

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 7)
console.log(pessoasComNomeGrande)

const pessoasTerminamComA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'))

console.log(pessoasTerminamComA)
