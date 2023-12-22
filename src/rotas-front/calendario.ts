import { Router } from "express";
import * as db from "../db/calendario";
import * as dbComunidade from "../db/comunidade";
import * as dbTipoEvento from "../db/tipoEvento";
const routes = Router();

routes.get("/", async (req, res) => {
  res.render("calendario", {
    dados: await db.readAll(),
  });
});

routes.get("/novo", async (req, res) => {
  res.render("calendario-formulario", {
    id: "",
    dataHora: "",
    tituloEvento: "",
    descricao: "",
    comunidadeId: "",
    comunidades: await dbComunidade.readAll(),
    tipoEventoId: "",
    tiposEvento: await dbTipoEvento.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.comunidades = await dbComunidade.readAll();
  dadosExistentes.tiposEvento = await dbTipoEvento.readAll();

  res.render("calendario-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let calendario;
  if (req.body.id === "") {
    calendario = await db.create({
      dataHora: req.body.dataHora,
      tituloEvento: req.body.tipoEvento,
      descricao: req.body.descricao,
      comunidadeId: req.body.comunidadeId,
      tipoEventoId: req.body.tipoEventoId,
    });
  } else {
    calendario = await db.update({
      id: req.body.id,
      dataHora: req.body.dataHora,
      tituloEvento: req.body.tipoEvento,
      descricao: req.body.descricao,
      comunidadeId: req.body.comunidadeId,
      tipoEventoId: req.body.tipoEventoId,
    });
  }

  res.redirect("/comunidade");
});

export default routes;
