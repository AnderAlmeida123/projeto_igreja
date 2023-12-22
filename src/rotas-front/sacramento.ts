import { Router } from "express";
import * as db from "../db/sacramento";
import * as dbPessoa from "../db/pessoa";
import * as dbTipoSacramento from "../db/tipoSacramento";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("sacramento", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("sacramento-formulario", {
    id: "",
    localSacramento: "",
    dataHoraSacramento: "",
    pessoaId: "",
    pessoas: await dbPessoa.readAll(),
    tipoSacramentoId: "",
    tipoSacramentos: await dbTipoSacramento.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.pessoas = await dbPessoa.readAll();
  dadosExistentes.tipoSacramentos = await dbTipoSacramento.readAll();

  res.render("sacramento-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let sacramento;
  if (req.body.id === "") {
    sacramento = await db.create({
      localSacramento: req.body.localSacramento,
      dataHoraSacramento: req.body.dataHoraSacramento,
      pessoaId: req.body.pessoaId,
      tipoSacramentoId: req.body.tipoSacramentoId,
    });
  } else {
    sacramento = await db.update({
      id: req.body.id,
      localSacramento: req.body.localSacramento,
      dataHoraSacramento: req.body.dataHoraSacramento,
      pessoaId: req.body.pessoaId,
      tipoSacramentoId: req.body.tipoSacramentoId,
    });
  }

  res.redirect("/sacramento");
});

export default routes;
