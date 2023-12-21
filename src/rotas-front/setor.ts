import { Router } from "express";
import * as db from "../db/setor";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("setor", { dados: await db.readAll() });
});

export default routes;
