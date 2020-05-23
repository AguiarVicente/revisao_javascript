const prod = new Object() // criado um objeto
console.log(prod)

const prod1 = {}
prod1.nome = 'Celular Ultra mega'
prod1.preco = 4998.90
prod1['Desconte Legal'] = 0.40 // evitar atributos com espacos

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
}

//json
'{ "nome": "Camisa polo", "preco": 79.90 }'

console.log(prod2)