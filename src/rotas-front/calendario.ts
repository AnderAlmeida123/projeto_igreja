import { Router } from "express";
import * as db from "../db/calendario";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("calendario", { dados: await db.readAll() });
});

export default routes;
