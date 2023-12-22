import { Router } from "express";
import * as db from "../db/setor";
import * as dbPessoa from "../db/pessoa";
import * as dbComunidade from "../db/comunidade";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("setor", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("setor-formulario", {
    id: "",
    descricao: "",
    setor: "",
    responsavelId: "",
    pessoas: await dbPessoa.readAll(),
    comunidadeId: "",
    comunidades: await dbComunidade.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.pessoas = await dbPessoa.readAll();
  dadosExistentes.comunidades = await dbComunidade.readAll();

  res.render("setor-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let setor;
  if (req.body.id === "") {
    setor = await db.create({
      descricao: req.body.descricao,
      setor: req.body.setor,
      responsavelId: req.body.responsavelId,
      comunidadeId: req.body.comunidadeId,
    });
  } else {
    setor = await db.update({
      id: req.body.id,
      descricao: req.body.descricao,
      setor: req.body.setor,
      responsavelId: req.body.responsavelId,
      comunidadeId: req.body.comunidadeId,
    });
  }

  res.redirect("/setor");
});

export default routes;
