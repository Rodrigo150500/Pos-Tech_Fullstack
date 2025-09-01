const express = require('express')
const app = express()

app.trace('/path', (req, res) => {
  res.set('Content-Type', 'message/http');
  res.send(`${req.method} ${req.originalUrl} HTTP/${req.httpVersion}\r\n` +
           Object.entries(req.headers).map(([k, v]) => `${k}: ${v}`).join('\r\n') +
           '\r\n\r\n');
});

app.listen(3000, ()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3000")
})
