const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Middleware logger
const logger = (req, res, next) =>{
    console.log(`${req.method} ${req.url}`)
    next()
}

app.use(logger)

//Body parsers
app.use(bodyParser.json())

//Rotas
app.get('/', (req, res)=>{
    res.send("Home Page")
})

app.get("/about", (req, res)=>{
    res.send("About page")
})

app.post("/users", (req, res)=>{
    res.status(201).send("User created")
})

app.listen(3000, ()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3000")
})
