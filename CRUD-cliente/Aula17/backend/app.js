const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const Cliente = require("./models/cliente");

mongoose
  .connect(
    "mongodb+srv://banco:12345@cluster0.oh43u.mongodb.net/app-mean?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conexão OK");
  })
  .catch(() => {
    console.log("Conexão NOK");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE",
    "OPTIONS"
  );
  next();
});

app.post("/api/clientes", (req, res, next) => {
  const cliente = new Cliente({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
  });
  cliente.save().then((clienteInserido) => {
    res.status(201).json({
      mensagem: "Cliente inserido",
      id: clienteInserido._id,
    });
  });
});

// app.use("/api/clientes", (req, res, next) => {
//   res.status(200).json({
//     mensagem: "Tudo OK",
//     clientes: clientes,
//   });
// });

app.get("/api/clientes", (req, res, next) => {
  Cliente.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      clientes: documents,
    });
  });
});

app.delete("/api/clientes/:id", (req, res, next) => {
  Cliente.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({ mensagem: "Cliente removido" });
  });
});

module.exports = app;
