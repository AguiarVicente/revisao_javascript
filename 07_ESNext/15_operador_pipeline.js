
const dobro = (n) => n * 2
const triplo = (n) => n * 3

// console.log(5 |> dobro |> dobro |> triplo)

console.log(triplo(dobro(dobro(2))))