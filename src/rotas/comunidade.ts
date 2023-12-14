import { Router } from "express";
import * as db from "../Db/comunidade";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const comunidade = await db.create({
    nomeComunidade: req.body.nomeComunidade,
    bairro: req.body.bairro,
    responsavelId: req.body.responsavelId,
  });

  res.json(comunidade).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const comunidades = await db.readAll();
  res.json(comunidades).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const comunidade = await db.readOne(req.params.id);
  res.json(comunidade).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const comunidade = await db.update({
    id: req.params.id,
    nomeComunidade: req.body.nomeComunidade,
    bairro: req.body.bairro,
    responsavelId: req.body.responsavelId,
  });
  res.json(comunidade).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.status(200);
});
export default routes;
