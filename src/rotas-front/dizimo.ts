import { Router } from "express";
import * as db from "../db/dizimo";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("dizimo", { dados: await db.readAll() });
});

export default routes;
