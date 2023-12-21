import { Router } from "express";
import * as db from "../db/comunidade";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("comunidade", { dados: await db.readAll() });
});

export default routes;
