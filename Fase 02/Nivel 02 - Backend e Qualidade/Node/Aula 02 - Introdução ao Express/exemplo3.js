const express = require('express')
const app = express()


//Middleware normal 
app.use((req, res, next)=>{
    console.log("Middleware 1")
    next()
})


//Middleware normal
app.use((req, res, next)=>{
    console.log("Middleware 2")
    next()
})

//Rota que gera erro
app.get("/error", (req, res, next)=>{
    const err = new Error("Falhou aqui")
    next(err)
})


//Middleware de erro 1
app.use((err, req, res, next)=>{
    console.log("Tratador de erro 1")
    next(err)
})

app.use((err, req, res, next)=>{
    console.log("Tratador de erro 2")
    res.status(500).send("Erro tratado pelo middleware 2")
})


app.listen(3000,(()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3000")
}))