const express = require("express")
const app = express()

app.options('/recursos', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("INICIANDO SERVIDOR NA PORTA 3000")
});
