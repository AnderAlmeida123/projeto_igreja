import { Router } from "express";
import * as db from "../db/dizimo";
import * as dbPessoa from "../db/pessoa";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("dizimo", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("dizimo-formulario", {
    id: "",
    meses: "",
    valor: "",
    tipoPagamento: "",
    pessoaId: "",
    pessoas: await dbPessoa.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.dizimo = await dbPessoa.readAll();

  res.render("dizimo-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let dizimo;
  if (req.body.id === "") {
    dizimo = await db.create({
      meses: req.body.meses,
      valor: req.body.valor,
      tipoPagamento: req.body.tipoPagamento,
      pessoaId: req.body.pessoaId,
    });
  } else {
    dizimo = await db.update({
      id: req.body.id,
      meses: req.body.meses,
      valor: req.body.valor,
      tipoPagamento: req.body.tipoPagamento,
      pessoaId: req.body.pessoaId,
    });
  }

  res.redirect("/dizimo");
});

export default routes;
