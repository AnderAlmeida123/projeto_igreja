import { Router } from "express";
import * as db from "../db/membroTurma";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const membroTurma = await db.create({
    membroId: req.body.membroId,
    turmaId: req.body.turmaId,
    status: req.body.status,
  });

  res.json(membroTurma).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const membroTurmas = await db.readAll();
  res.json(membroTurmas).status(200);
});

// READ - One
routes.get("/:membroId/:setorId", async (req, res) => {
  const membroTurma = await db.readOne(req.params.membroId, req.params.setorId);
  res.json(membroTurma).status(200);
});

// UPDATE
routes.patch("/:turmaId/:membroId", async (req, res) => {
  const membroTurma = await db.update({
    membroId: req.params.membroId,
    turmaId: req.params.turmaId,
    status: req.body.status,
  });
  res.json(membroTurma).status(200);
});

// DELETE
routes.delete("/:membroId/:turmaId", async (req, res) => {
  await db.deleteById(req.params.membroId, req.params.turmaId);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
