import { Router } from "express";
import * as db from "../db/sacramento";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const sacramento = await db.create({
    tipoSacramentoId: req.body.tipoSacramentoId,
    localSacramento: req.body.localSacramento,
    pessoaId: req.body.pessoaId,
    dataHoraSacramento: new Date(req.body.dataHoraSacramento),
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
  const sacramentoUpdate: any = {
    id: req.params.id,
    localSacramento: req.body.localSacramento,
  };

  if ((req.body.dataHoraSacramento, req.body.tipoSacramentoId)) {
    sacramentoUpdate.dataHoraSacramento = new Date(req.body.dataHoraSacramento);
    sacramentoUpdate.tipoSacramentoId = req.body.tipoSacramentoId;
  }

  const sacramento = await db.update(sacramentoUpdate);
  res.json(sacramento).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
