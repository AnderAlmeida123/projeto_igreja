import { Router } from "express";
import * as db from "../db/calendario";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const calendario = await db.create({
    tituloEvento: req.body.tituloEvento,
    dataHora: new Date(req.body.dataHora),
    descricao: req.body.descricao,
    comunidadeId: req.body.comunidadeId,
    tipoEventoId: req.body.tipoEventoId,
  });

  res.json(calendario).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const calendarios = await db.readAll();
  res.json(calendarios).status(200);
});

// READ - One
routes.get("/:id", async (req, res) => {
  const calendario = await db.readOne(req.params.id);
  res.json(calendario).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const calendarioUpdate: any = {
    id: req.params.id,
    tituloEvento: req.body.tituloEvento,
    descricao: req.body.descricao,
    comunidadeId: req.body.comunidadeId,
    tipoEventoId: req.body.tipoEventoId,
  };

  if (req.body.dataHora) {
    calendarioUpdate.dataHora = new Date(req.body.dataHora);
  }

  const calendario = await db.update(calendarioUpdate);
  res.json(calendario).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
