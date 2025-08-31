const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render("index", {title: "Home Page", user:"Rodrigo"})
})

app.listen(3000, ()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3000")
})