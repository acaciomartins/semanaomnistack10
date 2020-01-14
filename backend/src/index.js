const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// Para todas as rotas - Aceita Json no body
app.use(express.json());
app.use(routes);


app.listen(3333);


// Métodos HTTP, GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: req.query (filtros, ordenacao, paginacao) .../users/?search=Diego
// Route Params: req.params (Identificar recurso na alteracao ou remoção ).../user/1
// Body: req.body (dados para criacao ou alteracao de um recurso)