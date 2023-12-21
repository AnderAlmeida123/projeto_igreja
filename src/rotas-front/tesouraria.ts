import { Router } from "express";
import * as db from "../db/tesouraria";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("tesouraria", { dados: await db.readAll() });
});

export default routes;
