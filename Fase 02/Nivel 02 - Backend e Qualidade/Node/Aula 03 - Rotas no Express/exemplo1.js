const express = require('express')
const app = express()

app.route('/livros')
  .get((req, res) => {
    res.send('Obter todos os livros');
  })
  .post((req, res) => {
    res.send('Adicionar um novo livro');
  })
  .put((req, res) => {
    res.send('Atualizar todos os livros');
  })
  .delete((req, res) => {
    res.send('Deletar todos os livros');
  });

app.listen(3000, ()=>{
    console.log("INICIANDO SERVIDOR NA PORTA 3000")
})