console.log(soma(3, 4))
// function declaration
function soma(x, y){
    return x + y
}
// console.log(sub(3, 4)) // não pode acessar sub antes de inicializar
// function expression
const sub = function (x, y){
    return x - y
}

// console.log(mult(3, 4)) // não pode acessar mult antes de inicializar
//named function expression
const mult = function mult(x, y){
    return x * y
}