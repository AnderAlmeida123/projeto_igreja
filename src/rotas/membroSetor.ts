import { Router } from "express";
import * as db from "../db/membroSetor";

const routes = Router();

//CRUD = Create, Read, Update, Delete

// CREATE
routes.post("/", async (req, res) => {
  const membroSetor = await db.create({
    dataEntrada: new Date(req.body.dataEntrada),
    dataSaida: new Date(req.body.dataSaida),
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
routes.get("/:id", async (req, res) => {
  const membroSetor = await db.readOne(req.params.id);
  res.json(membroSetor).status(200);
});

// UPDATE
routes.patch("/:id", async (req, res) => {
  const membroSetor = await db.update({
    id: req.params.id,
    dataEntrada: new Date(req.body.dataEntrada),
    dataSaida: new Date(req.body.dataSaida),
    setorId: req.body.setorId,
    membroSetorId: req.body.membroSetorId,
  });
  res.json(membroSetor).status(200);
});

// DELETE
routes.delete("/:id", async (req, res) => {
  await db.deleteById(req.params.id);
  res.send("Excluído com sucesso").status(200);
});
export default routes;
