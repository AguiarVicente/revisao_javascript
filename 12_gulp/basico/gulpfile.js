const gulp = require('gulp')
const { series } = require('gulp')

function copiar(cb){
  console.log('Tarefa de copiar!')
  return cb()
}

//criando uma task default
module.exports.default = series(copiar)