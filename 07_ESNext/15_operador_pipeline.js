const dobro = (n) => n * 2
const triplo = (n) => n * 3

// chamada de função de dentro para fora 1º dobro, 2º dobro 3º triplo
// console.log(5 |> dobro |> dobro |> triplo)

console.log(triplo(dobro(dobro(2))))