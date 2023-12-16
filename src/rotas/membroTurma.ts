import { Router } from "express";
import * as db from "../db/membroTurma";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const membroTurma = await db.create({
    membroTurma: req.body.membroTurma,
    turmaId: req.body.turmaId,
  });

  res.json(membroTurma).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const membroTurmas = await db.readAll();
  res.json(membroTurmas).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const membroTurma = await db.readOne(req.params.id);
  res.json(membroTurma).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const membroTurma = await db.update({
    id: req.params.id,
    membroTurma: req.body.membroTurma,
    turmaId: req.body.turmaId,
  });
  res.json(membroTurma).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
