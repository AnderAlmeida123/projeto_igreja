import { Router } from "express";
import comunidade from "./comunidade";
import contato from "./contato";
import endereco from "./endereco";
import pessoa from "./pessoa";
import sacramento from "./sacramento";
import tipoEvento from "./tipoEvento";
import tipoSacramento from "./tipoSacramento";
import calendario from "./calendario";
import setor from "./setor";
import membroSetor from "./membroSetor";
import turma from "./turma";
import MembroTurma from "./membroTurma";
import tesouraria from "./tesouraria";
import dizimo from "./dizimo";
import estoque from "./estoque";

const routes = Router();

routes.use("/comunidade", comunidade);
routes.use("/contato", contato);
routes.use("/endereco", endereco);
routes.use("/pessoa", pessoa);
routes.use("/sacramento", sacramento);
routes.use("/tipoEvento", tipoEvento);
routes.use("/tipoSacramento", tipoSacramento);
routes.use("/calendario", calendario);
routes.use("/setor", setor);
routes.use("/membroSetor", membroSetor);
routes.use("/turma", turma);
routes.use("/membroTurma", MembroTurma);
routes.use("/tesouraria", tesouraria);
routes.use("/dizimo", dizimo);
routes.use("/estoque", estoque);

export default routes;
