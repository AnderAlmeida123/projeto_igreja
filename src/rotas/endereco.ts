import { Router } from "express";
import * as db from "../db/endereco";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const endereco = await db.create({
    cep: req.body.cep,
    estado: req.body.estado,
    cidade: req.body.cidade,
    bairro: req.body.bairro,
    rua: req.body.rua,
    numero: req.body.numero,
    referencia: req.body.referencia,
    pessoaId: req.body.pessoaid,
  });

  res.json(endereco).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const enderecos = await db.readAll();
  res.json(enderecos).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const endereco = await db.readOne(req.params.id);
  res.json(endereco).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const endereco = await db.update({
    id: req.params.id,
    cep: req.body.cep,
    estado: req.body.estado,
    cidade: req.body.cidade,
    bairro: req.body.bairro,
    rua: req.body.rua,
    numero: req.body.numero,
    referencia: req.body.referencia,
    pessoaId: req.body.pessoaid,
  });
  res.json(endereco).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
