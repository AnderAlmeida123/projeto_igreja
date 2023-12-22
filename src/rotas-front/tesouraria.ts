import { Router } from "express";
import * as db from "../db/tesouraria";
import * as dbComunidade from "../db/comunidade";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("tesouraria", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("tesouraria-formulario", {
    id: "",
    tipoMovimentacao: "",
    descricao: "",
    valor: "",
    dataMovimentacao: "",
    comunidadeId: "",
    comunidades: await dbComunidade.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.comunidades = await dbComunidade.readAll();

  res.render("tesouraria-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let tesouraria;
  if (req.body.id === "") {
    tesouraria = await db.create({
      tipoMovimentacao: req.body.tipoMovimentacao,
      descricao: req.body.descricao,
      valor: req.body.valor,
      dataMovimentacao: req.body.dataMovimentacao,
      comunidadeId: req.body.comunidadeId,
    });
  } else {
    tesouraria = await db.update({
      id: req.body.id,
      tipoMovimentacao: req.body.tipoMovimentacao,
      descricao: req.body.descricao,
      valor: req.body.valor,
      dataMovimentacao: req.body.dataMovimentacao,
      comunidadeId: req.body.comunidadeId,
    });
  }

  res.redirect("/tesouraria");
});

export default routes;
