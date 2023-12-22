import { Router } from "express";
import * as db from "../db/membroSetor";
import * as dbPessoa from "../db/pessoa";
import * as dbSetor from "../db/setor";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("membroSetor", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("membroSetor-formulario", {
    id: "",
    dataEntrada: "",
    dataSaida: "",
    setorId: "",
    setores: await dbSetor.readAll(),
    membroSetorId: "",
    pessoas: await dbPessoa.readAll(),
  });
});

routes.get("/:setorId/:membroSetorId", async (req, res) => {
  let dadosExistentes: any =
    (await db.readOne(req.params.setorId, req.params.membroSetorId)) || {};
  dadosExistentes.pessoas = await dbPessoa.readAll();
  dadosExistentes.setores = await dbSetor.readAll();

  res.render("membroSetor-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let membroSetor;
  if (req.body.id === "") {
    membroSetor = await db.create({
      dataEntrada: req.body.celular,
      dataSaida: req.body.dataSaida,
      setorId: req.body.setorId,
      membroSetorId: req.body.membroSetorId,
    });
  } else {
    membroSetor = await db.update({
      dataEntrada: req.body.celular,
      dataSaida: req.body.dataSaida,
      setorId: req.body.setorId,
      membroSetorId: req.body.membroSetorId,
    });
  }

  res.redirect("/membroSetor");
});

export default routes;
