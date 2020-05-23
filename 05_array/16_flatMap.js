const escola = [
    {
        nome: 'Turma M1',
        alunos: [
            {
                nome: 'Gustavo',
                nota: 8.1
            },
            {
                nome: 'Ana',
                nota: 9.3
            }
        ]
    },{
        nome: 'Turma M2',
        alunos: [
            {
                nome: 'Rebeca',
                nota: 8.9
            },
            {
                nome: 'Roberto',
                nota: 7.3
            }
        ]
    }
]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// flatMap
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)

console.log(notas2)

// utilizando flatMap nativo = equivalente ao map
// const arr = [ 1, 2, 3]
// console.log(arr.flatMap(
//     a => a * 2
// ))
// console.log(arr)