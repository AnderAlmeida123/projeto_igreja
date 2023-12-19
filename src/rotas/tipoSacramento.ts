import { Router } from "express";
import * as db from "../db/tipoSacramento";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const tipoSacramento = await db.create({
    tipoSacramento: req.body.tipoSacramento,
  });

  res.json(tipoSacramento).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const tiposSacramento = await db.readAll();
  res.json(tiposSacramento).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const tipoSacramento = await db.readOne(req.params.id);
  res.json(tipoSacramento).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const tipoSacramento = await db.update({
    id: req.params.id,
    tipoSacramento: req.body.tipoSacramento,
  });
  res.json(tipoSacramento).status(200);
});

// READ - DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
