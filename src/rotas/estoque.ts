import { Router } from "express";
import * as db from "../db/estoque";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const estoque = await db.create({
    produto: req.body.produto,
    quantidade: req.body.quantidade,
    setorId: req.body.setorId,
    responsavelId: req.body.responsavelId,
    comunidadeId: req.body.comunidadeId,
  });

  res.json(estoque).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const estoques = await db.readAll();
  res.json(estoques).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const estoque = await db.readOne(req.params.id);
  res.json(estoque).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const estoque = await db.update({
    id: req.params.id,
    produto: req.body.produto,
    quantidade: req.body.quantidade,
    setorId: req.body.setorId,
    responsavelId: req.body.responsavelId,
    comunidadeId: req.body.comunidadeId,
  });
  res.json(estoque).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
