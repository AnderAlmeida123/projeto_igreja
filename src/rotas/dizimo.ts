import { Router } from "express";
import * as db from "../db/dizimo";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const dizimo = await db.create({
    meses: req.body.meses,
    valor: req.body.valor,
    tipoPagamento: req.body.tipoPagamento,
    pessoaId: req.body.pessoaId,
  });

  res.json(dizimo).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const dizimos = await db.readAll();
  res.json(dizimos).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const dizimo = await db.readOne(req.params.id);
  res.json(dizimo).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const dizimo = await db.update({
    id: req.params.id,
    meses: req.body.meses,
    valor: req.body.valor,
    tipoPagamento: req.body.tipoPagamento,
    pessoaId: req.body.pessoaId,
  });
  res.json(dizimo).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
