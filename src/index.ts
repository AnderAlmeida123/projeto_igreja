import express from "express";

import cors from "cors";
import routes from "./rotas";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(3333, () => "server running on port 3333");
console.log("Servidor executando");
