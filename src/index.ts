import express from "express";

import cors from "cors";
import routes from "./rotas";
import path from "path";

import rotasFront from "./rotas-front";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", rotasFront);
app.use("/api/", routes);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use((err: any, req: any, res: any, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log(err.message);
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3333, () => "server running on port 3333");
console.log("Servidor executando");
