const contadorA = require('./instancia_unica')
const contadorB = require('./instancia_unica')

const contadorC = require('./instancia_nova')()
const contadorD = require('./instancia_nova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)