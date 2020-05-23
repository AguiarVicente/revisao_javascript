const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os precos
const paraObjeto = josn => JSON.parse(josn)
const aprenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(aprenasPreco)
console.log(resultado)