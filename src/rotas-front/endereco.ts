import { Router } from "express";
import * as db from "../db/endereco";
import * as dbPessoa from "../db/pessoa";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("endereco", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("endereco-formulario", {
    id: "",
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    referencia: "",
    pessoaId: "",
    pessoas: await dbPessoa.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.pessoas = await dbPessoa.readAll();

  res.render("endereco-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  const dadosDoCep = await db.procuraCep(req.body.cep);
  let endereco;
  if (req.body.id === "") {
    endereco = await db.create({
      cep: req.body.cep,
      estado: dadosDoCep.uf,
      cidade: dadosDoCep.localidade,
      bairro: dadosDoCep.bairro,
      rua: dadosDoCep.logradouro,
      numero: req.body.numero,
      referencia: req.body.referencia,
      pessoaId: req.body.pessoaId,
    });
  } else {
    endereco = await db.update({
      id: req.body.id,
      cep: req.body.cep,
      estado: dadosDoCep.uf,
      cidade: dadosDoCep.localidade,
      bairro: dadosDoCep.bairro,
      rua: dadosDoCep.logradouro,
      numero: req.body.numero,
      referencia: req.body.referencia,
      pessoaId: req.body.pessoaId,
    });
  }
  res.redirect("/endereco");
});

export default routes;
