let valor;
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) // não pode acessar o valor de null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)