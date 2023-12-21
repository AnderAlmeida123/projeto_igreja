import { Router } from "express";
import * as db from "../db/tipoEvento";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("tipoEvento", { dados: await db.readAll() });
});

export default routes;
