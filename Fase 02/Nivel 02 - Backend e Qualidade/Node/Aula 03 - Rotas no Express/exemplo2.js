const express = require('express')
const app = express()

app.all('/api', (req, res)=>{
    res.send("Esta rota aceita qualquer método")
})

app.listen(3000, ()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3000")
})