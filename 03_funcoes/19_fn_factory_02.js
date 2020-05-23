function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('TV', 1.490))
console.log(criarProduto('Notebook', 3.490))