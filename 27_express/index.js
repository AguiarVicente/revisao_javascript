const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')

// passando parametros entre modulos
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

// comunicação direta entre modulos
app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Guilherme'))

app.use('/opa', (req, res, next) => {
  console.log('Sera que serei chamado?')
  next()
})
// a ordem das duas chamadas abaixo influiencia no retorno
// para retornar o relatorio a chamada teria que ser primeiro


//passando parametros por url com req.params
//http://localhost:3000/clientes/5 => Cliente 5 selecionado!
app.get('/clientes/:id', (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`)
})

//passando parametros com query
//http://localhost:3000/clientes/relatorio?completo=true?ano=2020 => Cliente relatorio selecionado!
app.get('/clientes/relatorio', (req, res)=> {
  res.send(`Cliente relatorio: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res)=> {
  // let corpo = ''
  // req.on('data', function(parte){
  //   corpo += parte
  // })
  // req.on('end', function(){
  //   res.send(corpo)
  // })
  // res.send(req.body.nome)
  res.send(JSON.stringify(req.body))
})

app.get('/opa', (req, res)=>{
  // res.send('<h1>Estou <b>bem</b>!</h1>')
  // res.json({
  //   name: 'iPad 32GB',
  //   price: 1899,
  //   discount: 0.20
  // })

  res.json({
    data: [
      {id: 7, name: 'Ana', position: 1},
      {id: 34, name: 'Bia', position: 2},
      {id: 73, name: 'Carlos', position: 3}
    ],
    count : 30,
    skip: 0,
    limit: 3,
    status: 200
  })
})

app.listen(3000, () => {
  console.log('Backend executando...')
})

//função midlleware -> contém (request, response, next) => {}