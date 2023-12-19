import { Router } from "express";
import * as db from "../db/pessoa";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const pessoa = await db.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    dataNascimento: new Date(req.body.dataNascimento),
    sexo: req.body.sexo,
    comunidadeId: req.body.comunidadeId,
  });

  res.json(pessoa).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const pessoas = await db.readAll();
  res.json(pessoas).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const pessoa = await db.readOne(req.params.id);
  res.json(pessoa).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const pessoa = await db.update({
    id: req.params.id,
    nome: req.body.nome,
    cpf: req.body.cpf,
    dataNascimento: new Date(req.body.dataNascimento),
    sexo: req.body.sexo,
    comunidadeId: req.body.comunidadeId,
  });
  res.json(pessoa).status(200);
});

//  DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
