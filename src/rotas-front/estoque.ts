import { Router } from "express";
import * as db from "../db/estoque";
import * as dbPessoa from "../db/pessoa";
import * as dbSetor from "../db/setor";
import * as dbComunidade from "../db/comunidade";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("estoque", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("estoque-formulario", {
    id: "",
    produto: "",
    quantidade: "",
    setorId: "",
    setores: await dbSetor.readAll(),
    responsavelId: "",
    pessoas: await dbPessoa.readAll(),
    comunidadeId: "",
    comunidades: await dbComunidade.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.setores = await dbSetor.readAll();
  dadosExistentes.pessoas = await dbPessoa.readAll();
  dadosExistentes.comunidades = await dbComunidade.readAll();

  res.render("estoque-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let estoque;
  if (req.body.id === "") {
    estoque = await db.create({
      produto: req.body.produto,
      quantidade: req.body.quantidade,
      setorId: req.body.setorId,
      responsavelId: req.body.responsavelId,
      comunidadeId: req.body.comunidadeId,
    });
  } else {
    estoque = await db.update({
      id: req.body.id,
      produto: req.body.produto,
      quantidade: req.body.quantidade,
      setorId: req.body.setorId,
      responsavelId: req.body.responsavelId,
      comunidadeId: req.body.comunidadeId,
    });
  }

  res.redirect("/estoque");
});

export default routes;
