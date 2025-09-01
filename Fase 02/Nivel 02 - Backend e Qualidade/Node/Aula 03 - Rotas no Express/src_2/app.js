const express = require('express')
const routes = require("./routes/user_routes")
const app = express()

app.use(express.json())
app.use("/users", routes)

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).send("Something broke")
})

app.listen(3000, ()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3000")
})