/*
var aceita redeclarar a variável ( evitar usar var)
let não aceita recriar a variável
const é somente leitura, não aceita novo valor
*/

var a = 3
let b = 4

var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50 
console.log(c)