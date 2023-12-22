import { Router } from "express";
import * as db from "../db/tipoEvento";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("tipoEvento", { dados: await db.readAll() });
});

routes.get("/novo", async (req, res) => {
  res.render("tipoEvento-formulario", {
    id: "",
    tipoEvento: "",
  });
});

routes.get("/:id", async (req, res) => {
  let dadosExistentes = (await db.readOne(req.params.id)) || {};
  res.render("tipoEvento-formulario", dadosExistentes);
});

routes.post("/", async (req, res) => {
  let tipoEvento;
  if (req.body.id === "") {
    tipoEvento = await db.create({
      tipoEvento: req.body.tipoEvento,
    });
  } else {
    tipoEvento = await db.update({
      id: req.body.id,
      tipoEvento: req.body.tipoEvento,
    });
  }

  res.redirect("/tipoEvento");
});

export default routes;
