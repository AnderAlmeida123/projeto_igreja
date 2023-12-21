import { Router } from "express";
import * as db from "../db/estoque";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("estoque", { dados: await db.readAll() });
});

export default routes;
