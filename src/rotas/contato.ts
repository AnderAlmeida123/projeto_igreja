import { Router } from "express";
import * as db from "../db/contato";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const contato = await db.create({
    celular: req.body.celular,
    telContato: req.body.telContato,
    email: req.body.email,
    pessoaId: req.body.pessoaId,
  });

  res.json(contato).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const contatos = await db.readAll();
  res.json(contatos).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const contato = await db.readOne(req.params.id);
  res.json(contato).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const contato = await db.update({
    id: req.params.id,
    celular: req.body.celular,
    telContato: req.body.telContato,
    email: req.body.email,
    pessoaId: req.body.pessoaId,
  });
  res.json(contato).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
