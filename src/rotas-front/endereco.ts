import { Router } from "express";
import * as db from "../db/endereco";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("endereco", { dados: await db.readAll() });
});

export default routes;
