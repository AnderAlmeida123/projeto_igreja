import { Router } from "express";
import * as db from "../db/membroSetor";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const membroSetor = await db.create({
    dataEntrada: new Date(req.body.dataEntrada),
    dataSaida: req.body.dataSaida ? new Date(req.body.dataSaida) : null,
    setorId: req.body.setorId,
    membroSetorId: req.body.membroSetorId,
  });

  res.json(membroSetor).status(200);
});

// READ - All
routes.get("/", async (req, res) => {
  const membroSetores = await db.readAll();
  res.json(membroSetores).status(200);
});

// READ - One
routes.get("/:setorId/:membroId", async (req, res) => {
  const membroSetor = await db.readOne(req.params.setorId, req.params.membroId);
  res.json(membroSetor).status(200);
});

// UPDATE
routes.patch("/:setorId/:membroSetorId", async (req, res) => {
  const membroSetor = await db.update({
    dataEntrada: req.body.dataEntrada ? new Date(req.body.dataEntrada) : null,
    dataSaida: req.body.dataSaida ? new Date(req.body.dataSaida) : null,
    setorId: req.params.setorId,
    membroSetorId: req.params.membroSetorId,
  });
  res.json(membroSetor).status(200);
});

// DELETE
routes.delete("/:setorId/:membroSetorId", async (req, res) => {
  await db.deleteById(req.params.setorId, req.params.membroSetorId);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
