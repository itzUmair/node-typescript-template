import cors from "cors";
import express, { Express } from "express";
import router from "./routes/index";

const APP: Express = express();

const OPTIONS: cors.CorsOptions = {
  origin: "*",
  methods: "*",
  credentials: true,
};

APP.use(cors(OPTIONS));
APP.use(router);

APP.listen(8080, () => {
  console.log("[SERVER]: SERVER LISTENING ON PORT 8080");
});
