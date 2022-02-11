let nome = document.querySelector('input#nome')
let idade = document.querySelector('input#idade') 
let skill = document.querySelector('input#skills')
let resposta = document.querySelector('div#resposta')

let n = []
let year = []
let skills = []

function cadastrar() {
    if(nome.value != n.length && idade.value != year.length && skill.value != skills.length) {
        n.push(nome.value)
        year.push(idade.value)
        skills.push(skill.value)
        resposta.innerHTML = `<p>Nome: ${nome.value}</p> <br>`
        resposta.innerHTML += `<p>Idade: ${idade.value}</p> <br>`
        resposta.innerHTML += `<p>Skills: ${skill.value}</p>`
    } else if(nome.value.length  == 0) {
        alert('Insira todos os dados, por favor!')
    } else if(idade.value.length == 0) {
        alert('Insira todos os dados, por favor!')
    } else if(skill.value.length == 0) {
        alert('Insira todos os dados, por favor!')
    }
}

