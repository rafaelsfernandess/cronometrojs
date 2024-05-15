inputTarefa = document.querySelector('.input_nova_tarefa')
btnTarefa = document.querySelector('.btn_add_tarefa')
listaTarefa = document.querySelector('.lista_tarefa')
formTarefas = document.querySelector('#form_tarefas')

let arraytarefas = []

function criaBtnLista(li, index) {
    li.innerText += ' '
    const apagar = document.createElement('button')
    apagar.innerText = 'Apagar'
    apagar.setAttribute('onclick', 'apagar(' + index + ')')
    li.appendChild(apagar)
}

function criaItensLista() {
    const li = document.createElement('li')
    return li
}

function criaTarefas(tarefa) {
    arraytarefas.push(tarefa)
}

function mostrarTarefas() {
    listaTarefa.innerHTML = '';

    arraytarefas.forEach((e, i) => {
        const li = criaItensLista(); // Cria um novo elemento <li> para cada item da lista
        li.innerText = e;
        listaTarefa.appendChild(li);
        criaBtnLista(li, i);
    });
}

function apagar(index) {
    // Remove a tarefa do array pelo índice
    arraytarefas.splice(index, 1);
    
    // Atualiza a exibição das tarefas
    mostrarTarefas();
}

btnTarefa.addEventListener('click', (e) => {
    e.preventDefault()
    criaTarefas(inputTarefa.value)
    mostrarTarefas()
})


