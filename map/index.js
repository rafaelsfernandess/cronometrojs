const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const numerosEmDobro = numeros.map((valor, indice, array)=>{
// //   console.log('valor: '+valor, ', indice: '+indice,', array: '+ array)
//     return valor * 2
// })

// console.log(numerosEmDobro)

const pessoas = [
    {nome: 'Luiz',      idade :62},
    {nome: 'Maria',     idade :23},
    {nome: 'Eduardo',   idade :55},
    {nome: 'Letícia',   idade :19},
    {nome: 'Rosana',    idade :32},
    {nome: 'Wallace',   idade :47},
]

// const retornaArrayComString = pessoas.map(obj => obj.nome)

// console.log(retornaArrayComString)

// const retornaObjIdades = pessoas.map(obj => {
//     delete obj.nome
//     return obj
// })

const retornaObjIdadesMinificada = pessoas.map(obj => ({idade : obj.idade }))

console.log(retornaObjIdadesMinificada)