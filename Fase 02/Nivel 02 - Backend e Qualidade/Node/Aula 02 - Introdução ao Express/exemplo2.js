const express = require('express')
const app = express()

app.get("/error-next", (req, res, next)=>{
    const err = new Error("Erro via next")
    next(err)
})

app.get("/about", (req, res, next))

app.use((err, req, res, next) =>{
    console.error(err.stack)
    res.status(500).send("Something broken")
})

app.listen(3000, ()=>{
    console.log("Iniciando servidor na porta 3000")
})