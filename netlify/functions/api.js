import express, { Router } from "express";
import serverless from "serverless-http";
import pokeRouter from "../../controllers/pokemonRouter.js";
const api = express();

//router.get("/", (req, res) => res.send("Hello World!"));

api.use('/', express.static('./FRONT/dist'));


api.use("/api/pokemon", pokeRouter);

export const handler = serverless(api);
