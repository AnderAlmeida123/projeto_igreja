import { Router } from "express";
import * as db from "../db/sacramento";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("sacramento", { dados: await db.readAll() });
});

export default routes;
