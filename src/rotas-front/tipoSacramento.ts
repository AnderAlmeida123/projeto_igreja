import { Router } from "express";
import * as db from "../db/tipoSacramento";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("tipoSacramento", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("tipoSacramento-formulario", {
    id: "",
    tipoSacramento: "",
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes = (await db.readOne(req.params.id)) || {};
  res.render("tipoSacramento-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let tipoSacramento;
  if (req.body.id === "") {
    tipoSacramento = await db.create({
      tipoSacramento: req.body.tipoSacramento,
    });
  } else {
    tipoSacramento = await db.update({
      id: req.body.id,
      tipoSacramento: req.body.tipoSacramento,
    });
  }

  res.redirect("/tipoSacramento");
});

export default routes;
