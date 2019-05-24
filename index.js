 const express = require('express')
 const bodyParser = require('body-parser')
 const handlebars = require('express-handlebars')
 const app = express()

 //config body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set("view engine", 'habdlebars')
let usuarios = []

 app.get('/',(req, res )=> {
    res.render('formulario')

})

app.post('/user',(req, res)=>{
    let user = {}
    user.nome = req.body.nome
    user.id = usuarios.length
    usuarios.push(user)
    res.status(301).send('Usuario cadastrado')
    

})

 app.listen(3000, ()=>console.log('servidor no ar'))
