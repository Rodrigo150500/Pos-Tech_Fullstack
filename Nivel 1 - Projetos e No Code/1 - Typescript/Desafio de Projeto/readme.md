# 📚 Sistema de Gerenciamento de Biblioteca

Sistema de gerenciamento de biblioteca desenvolvido com TypeScript, com foco na criação de uma API RESTful para gerenciamento de livros. O projeto implementa operações CRUD (Create, Read, Update, Delete) e se conecta a um banco de dados relacional ou não relacional.

---

## 🎯 Objetivo

Desenvolver uma API utilizando a versão mais recente do **TypeScript**, com foco em boas práticas e integração com banco de dados (SQL ou NoSQL). A API permitirá que aplicações Front-end gerenciem os dados da biblioteca de forma eficiente.

---

## ✅ Funcionalidades

- Criar, visualizar, atualizar e deletar livros.
- Estrutura básica da entidade **Livro**:
  - `título`: string
  - `autor(a)`: string
  - `ISBN`: string
  - `ano de publicação`: number
- (Opcional) Entidade **Editora**:
  - Um livro pode pertencer a uma editora.
  - Uma editora pode ter vários livros associados.

---

## 🛠️ Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/) (última versão)
- Banco de dados:
  - [PostgreSQL](https://www.postgresql.org/) (via [Supabase](https://supabase.com/)) **ou**
  - Qualquer banco **NoSQL** como MongoDB
- Docker (opcional, para facilitar o ambiente de desenvolvimento)

---

