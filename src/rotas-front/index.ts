import { Router } from "express";

import pessoa from "./pessoa";
import comunidade from "./comunidade";
import calendario from "./calendario";
import contato from "./contato";
import dizimo from "./dizimo";
import endereco from "./endereco";
import estoque from "./estoque";
import membroSetor from "./membroSetor";
import sacramento from "./sacramento";
import setor from "./setor";
import tesouraria from "./tesouraria";
import tipoEvento from "./tipoEvento";
import tipoSacramento from "./tipoSacramento";
import turma from "./turma";

const routes = Router();

routes.use("/comunidade", comunidade);
routes.use("/calendario", calendario);
routes.use("/contato", contato);
routes.use("/dizimo", dizimo);
routes.use("/endereco", endereco);
routes.use("/estoque", estoque);
routes.use("/membroSetor", membroSetor);
routes.use("/pessoa", pessoa);
routes.use("/sacramento", sacramento);
routes.use("/setor", setor);
routes.use("/tesouraria", tesouraria);
routes.use("/tipoEvento", tipoEvento);
routes.use("/tipoSacramento", tipoSacramento);
routes.use("/turma", turma);

export default routes;
