import { Router } from "express";
import * as db from "../db/tesouraria";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const tesouraria = await db.create({
    tipoMovimentacao: req.body.tipoMovimentacao,
    descricao: req.body.descricao,
    valor: req.body.valor,
    dataMovimentacao: req.body.dataMovimentacao,
    comunidadeId: req.body.comunidadeId,
    dizimoId: req.body.dizimoId,
  });

  res.json(tesouraria).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const tesourarias = await db.readAll();
  res.json(tesourarias).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const tesouraria = await db.readOne(req.params.id);
  res.json(tesouraria).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const tesouraria = await db.update({
    id: req.params.id,
    tipoMovimentacao: req.body.tipoMovimentacao,
    descricao: req.body.descricao,
    valor: req.body.valor,
    dataMovimentacao: req.body.dataMovimentacao,
    comunidadeId: req.body.comunidadeId,
    dizimoId: req.body.dizimoId,
  });
  res.json(tesouraria).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
