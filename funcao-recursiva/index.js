// function recursiva (max){
//     console.log(max)
//     if(max >= 10) return
//     max++
//     recursiva(max)
// }

// recursiva(1)

const calculaFibonacci = (n) => {
    if(n === 0){
        return 0
    }else if(n === 1){
        return 1
    }
    return calculaFibonacci(n-1) + calculaFibonacci(n-2)
}

console.log(calculaFibonacci(6))