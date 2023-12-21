import { Router } from "express";
import * as db from "../db/contato";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("contato", { dados: await db.readAll() });
});

export default routes;
