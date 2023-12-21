import { Router } from "express";
import * as db from "../db/membroSetor";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("membroSetor", { dados: await db.readAll() });
});

export default routes;
