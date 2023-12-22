import { Router } from "express";
import * as db from "../db/turma";
import * as dbPessoa from "../db/pessoa";
import * as dbSetor from "../db/setor";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("turma", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("turma-formulario", {
    id: "",
    dataInicio: "",
    dataTermino: "",
    turma: "",
    professorId: "",
    professores: await dbPessoa.readAll(),
    setorId: "",
    setores: await dbSetor.readAll(),
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes: any = (await db.readOne(req.params.id)) || {};
  dadosExistentes.professores = await dbPessoa.readAll();
  dadosExistentes.setores = await dbSetor.readAll();

  res.render("turma-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let turma;
  if (req.body.id === "") {
    turma = await db.create({
      dataInicio: req.body.dataInicio,
      dataTermino: req.body.dataTermino,
      turma: req.body.turma,
      professorId: req.body.professorId,
      setorId: req.body.setorId,
    });
  } else {
    turma = await db.update({
      id: req.body.id,
      dataInicio: req.body.dataInicio,
      dataTermino: req.body.dataTermino,
      turma: req.body.turma,
      professorId: req.body.professorId,
      setorId: req.body.setorId,
    });
  }

  res.redirect("/turma");
});

export default routes;
