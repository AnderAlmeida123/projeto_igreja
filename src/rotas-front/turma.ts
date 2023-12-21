import { Router } from "express";
import * as db from "../db/turma";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("turma", { dados: await db.readAll() });
});

export default routes;
