import { Router } from "express";
import * as db from "../Db/tipoEvento";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const tipoEvento = await db.create({
    tipoEvento: req.body.tipoEvento,
  });

  res.json(tipoEvento).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const tiposEvento = await db.readAll();
  res.json(tiposEvento).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const tipoEvento = await db.readOne(req.params.id);
  res.json(tipoEvento).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const tipoEvento = await db.update({
    id: req.params.id,
    tipoEvento: req.body.tipoEvento,
  });
  res.json(tipoEvento).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.status(200);
});
export default routes;
