const aventura = {
    nome: 'Montanha',
    urso: {
        nome: 'Catatau'
    },
    falar: () => {
        return 'Miau!'
    }
}

const dog = aventura.animal?.nome

console.log(dog) // returna undefined

console.log(aventura.methodoNaoExistente()?.()) // return undefined

console.log(aventura?.falar()) // return 'Miau!'