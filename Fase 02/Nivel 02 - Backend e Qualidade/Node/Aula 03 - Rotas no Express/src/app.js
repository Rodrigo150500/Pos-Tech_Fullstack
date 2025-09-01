const express = require('express')
const app = express()
const user_route = require("./routes/user_routes")
const PORT = process.env.PORT || 3030

app.use(express.json())
app.use('/users', user_route)

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).send("something broke")
})

app.listen(PORT, ()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3030")
})