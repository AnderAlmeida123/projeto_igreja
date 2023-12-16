import { Router } from "express";
import * as db from "../db/turma";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const turma = await db.create({
    dataInicio: req.body.dataInicio,
    dataTermino: req.body.dataTermino,
    turma: req.body.turma,
    professorId: req.body.professorId,
    setorId: req.body.setorId,
  });

  res.json(turma).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const turmas = await db.readAll();
  res.json(turmas).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const turma = await db.readOne(req.params.id);
  res.json(turma).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const turma = await db.update({
    id: req.params.id,
    dataInicio: req.body.dataInicio,
    dataTermino: req.body.dataTermino,
    turma: req.body.turma,
    professorId: req.body.professorId,
    setorId: req.body.setorId,
  });
  res.json(turma).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
