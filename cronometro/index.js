const cronometro = document.querySelector('#cronometro')
const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')
let contador = 0
let timer
let piscar

const formatatempo = (contador) =>{
    segundos = new Date(contador * 1000)
    return segundos.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    })
     
}

const renderizaCronometro = (contador)=>{
    cronometro.innerHTML = formatatempo(contador)
}

document.addEventListener('click', (e)=>{
    btn = e.target

    if(btn.id === 'iniciar'){
        cronometro.classList.remove('piscar')
        cronometro.classList.remove('pausar')
        clearInterval(piscar)
        timer = setInterval(()=>{
            contador ++
            renderizaCronometro(contador)
        },1000)
    }
    if(btn.id === 'pausar'){
        clearInterval(timer)
        clearInterval(piscar)
        let i = 0
        piscar = setInterval(()=>{
            i++
            if(i%2==0){
                cronometro.classList.add('piscar')
                cronometro.classList.add('pausar')

            }else{
                cronometro.classList.remove('piscar')
            }

        }, 500)
    }
    if(btn.id === 'zerar'){
        contador = 0
        cronometro.innerHTML = formatatempo(contador)

    }



})