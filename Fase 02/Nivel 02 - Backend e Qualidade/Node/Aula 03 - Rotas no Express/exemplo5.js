const express = require('express')
const app = express()

app.patch('/recurso/:id', (req, res) => {
  res.send('Recurso parcialmente atualizado');
});

app.listen(3000, ()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3000")
})
