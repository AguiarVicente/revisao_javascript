// pessoa aponta para o endereco de menoria "nome"
const pessoa = {
    nome: 'Joao'
}

pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 <-
// não pode atribuir uma unica vez
// pessoa = { nome: 'Ana' }
// console.log(pessoa)

Object.freeze(pessoa) // congela o objeto (nao consegue mais alterar o objeto)
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Maria'})
pessoaConstante.nome = 'Pedro'
console.log(pessoaConstante)