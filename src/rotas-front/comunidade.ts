import { Router } from "express";
import * as db from "../db/comunidade";
import * as dbPessoa from "../db/pessoa";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("comunidade", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("comunidade-formulario", {
    id: "",
    nomeComunidade: "",
    bairro: "",
    responsavelId: "",
    pessoas: await dbPessoa.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.pessoas = await dbPessoa.readAll();

  res.render("comunidade-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let comunidade;
  if (req.body.id === "") {
    comunidade = await db.create({
      nomeComunidade: req.body.nomeComunidade,
      bairro: req.body.bairro,
      responsavelId: req.body.responsavelId,
    });
  } else {
    comunidade = await db.update({
      id: req.body.id,
      nomeComunidade: req.body.nomeComunidade,
      bairro: req.body.nomeComunidade,
      responsavelId: req.body.responsavelId,
    });
  }

  res.redirect("/comunidade");
});

export default routes;
