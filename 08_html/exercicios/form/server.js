const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res)=> {
    console.log(req.body)
    res.send(`<h1>Parabéns!</h1>`)
})
app.post('/usuarios/:id', (req, res)=> {
    console.log(req.body)
    console.log(req.params.id)
    res.send(`<h1>Parabéns! Usuario alterado</h1>`)
})
app.listen(3003)