const fs = require('fs')

const caminho = __dirname + '/lendo_arquivos.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo)=> {
    if(err){
        console.log(`Erro ${err}`)
    }else {
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
    }
})

const config = require('./lendo_arquivos.json')
console.log(config.db)

fs.readdir(__dirname, (err, conteudo)=>{
    console.log('Conteudo da pasta')
    console.log(conteudo)
})