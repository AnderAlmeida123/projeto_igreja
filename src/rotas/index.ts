import {Router} from "express";
import tipoEvento from './tipoEvento';

const routes = Router()

routes.use('tipoEvento', tipoEvento);

export default routes;