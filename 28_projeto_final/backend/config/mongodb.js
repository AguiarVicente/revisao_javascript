const { MongoDB_URL } = require('../.env')

const mongoose = require('mongoose')
mongoose.connect(MongoDB_URL, {
  useNewUrlParser: true
}).catch(e => {
  //destaque no terminal quando o mongo não estiver conectado
  const msg = 'ERRO! -> NÃO FOI POSSÍVEL CONECTAR COM O MONGODB'
  console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})