import { Router } from "express";
import comunidade from "./comunidade";
import contato from "./contato";
import endereco from "./endereco";
import pessoa from "./pessoa";
import sacramento from "./sacramento";
import tipoEvento from "./tipoEvento";
import tipoSacramento from "./tipoSacramento";

const routes = Router();

routes.use("/comunidade", comunidade);
routes.use("/contato", contato);
routes.use("/endereco", endereco);
routes.use("/pessoa", pessoa);
routes.use("/sacramento", sacramento);
routes.use("/tipoEvento", tipoEvento);
routes.use("/tipoSacramento", tipoSacramento);

export default routes;
