import { Router } from "express";
import * as db from "../db/setor";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const setor = await db.create({
    descricao: req.body.descricao,
    setor: req.body.setor,
    responsavelId: req.body.responsavelId,
    comunidadeId: req.body.comunidadeId,
  });

  res.json(setor).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const setores = await db.readAll();
  res.json(setores).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const setor = await db.readOne(req.params.id);
  res.json(setor).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const setor = await db.update({
    id: req.params.id,
    descricao: req.body.descricao,
    setor: req.body.setor,
    responsavelId: req.body.responsavelId,
    comunidadeId: req.body.comunidadeId,
  });
  res.json(setor).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
