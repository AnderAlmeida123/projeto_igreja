import { Router } from "express";
import * as db from "../Db/sacramento";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const sacramento = await db.create({
    tipoSacramentoId: req.body.tipoSacramentoId,
    localSacramento: req.body.localSacramento,
    pessoaId: req.body.pessoaId,
    dataHoraSacramento: req.body.dataHoraSacramento,
  });

  res.json(sacramento).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const sacramentos = await db.readAll();
  res.json(sacramentos).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const sacramento = await db.readOne(req.params.id);
  res.json(sacramento).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const sacramento = await db.update({
    id: req.params.id,
    tipoSacramentoId: req.body.tipoSacramentoId,
    localSacramento: req.body.localSacramento,
    pessoaId: req.body.pessoaId,
    dataHoraSacramento: req.body.dataHoraSacramento,
  });
  res.json(sacramento).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.status(200);
});
export default routes;
