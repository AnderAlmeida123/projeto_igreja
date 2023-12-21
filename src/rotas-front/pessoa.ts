import { Router } from "express";
import * as db from "../db/pessoa";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("pessoa", { dados: await db.readAll() });
});

export default routes;
