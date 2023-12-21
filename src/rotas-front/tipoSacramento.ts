import { Router } from "express";
import * as db from "../db/tipoSacramento";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("tipoSacramento", { dados: await db.readAll() });
});

export default routes;
