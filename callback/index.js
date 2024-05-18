function processaArray(array, callback){
    for (let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}

function imprimeElemento(elemento, indice, array){
    console.log(`Elemento no indice ${indice} : ${elemento} || Array completo [${array}]`)
}

processaArray([10,20,30,40], imprimeElemento)