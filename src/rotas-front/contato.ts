import { Router } from "express";
import * as db from "../db/contato";
import * as dbPessoa from "../db/pessoa";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("contato", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("contato-formulario", {
    id: "",
    celular: "",
    telContato: "",
    email: "",
    pessoaId: "",
    pessoas: await dbPessoa.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.pessoas = await dbPessoa.readAll();

  res.render("contato-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let contato;
  if (req.body.id === "") {
    contato = await db.create({
      celular: req.body.celular,
      telContato: req.body.telContato,
      email: req.body.email,
      pessoaId: req.body.pessoaId,
    });
  } else {
    contato = await db.update({
      id: req.body.id,
      celular: req.body.celular,
      telContato: req.body.telContato,
      email: req.body.email,
      pessoaId: req.body.pessoaId,
    });
  }

  res.redirect("/contato");
});

export default routes;
