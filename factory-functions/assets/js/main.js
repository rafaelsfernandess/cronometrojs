function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),





        inicia() {
            this.cliqueBtns()
            this.pressionaEnter()
            this.display.focus()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e=>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        
        realizaConta() {
            let conta = this.display.value
            try {
                conta = eval(conta)
                if (!conta) {
                    alert('Conta inválida')
                    return
                }

                this.display.value = conta
            } catch (e) {
                alert('Conta inválida')
                return
            }
            this.display.focus()

        },
        clearDisplay() {
            this.display.value = ''
            this.display.focus()

        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
            this.display.focus()

        },



        cliqueBtns() {
            document.addEventListener('click', e => {

                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            })

        },

        btnParaDisplay(valor) {
            this.display.value += valor
            this.display.focus()

        },
        

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()