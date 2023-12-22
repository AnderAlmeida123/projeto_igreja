import { Router } from "express";
import * as db from "../db/pessoa";
import * as dbComunidade from "../db/comunidade";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("pessoa", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("pessoa-formulario", {
    id: "",
    nome: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    comunidadeId: "",
    comunidades: await dbComunidade.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.comunidades = await dbComunidade.readAll();

  res.render("pessoa-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let pessoa;
  if (req.body.id === "") {
    pessoa = await db.create({
      nome: req.body.nome,
      cpf: req.body.cpf,
      dataNascimento: req.body.dataNascimento,
      sexo: req.body.sexo,
      comunidadeId: req.body.comunidadeId,
    });
  } else {
    pessoa = await db.update({
      id: req.body.id,
      nome: req.body.nome,
      cpf: req.body.cpf,
      dataNascimento: req.body.dataNascimento,
      sexo: req.body.sexo,
      comunidadeId: req.body.comunidadeId,
    });
  }

  res.redirect("/pessoa");
});

export default routes;
