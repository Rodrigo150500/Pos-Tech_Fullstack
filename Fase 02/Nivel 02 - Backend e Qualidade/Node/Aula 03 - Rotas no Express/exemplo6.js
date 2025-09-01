const express = require('express')
const app = express()

app.head('/recurso', (req, res) => {
  res.send('Resposta HEAD');
});

app.listen(3000, ()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3000")
})
