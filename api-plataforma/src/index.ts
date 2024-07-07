import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import usuarioRoutes from "./routes/usuario";
import partidaRoutes from "./routes/partida";
import temarioRoutes from "./routes/temario";
import logroRoutes from "./routes/logro";

import * as Knex from "knex";
import { Model } from "objection";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '50mb'}))

const corsConfig = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
  exposedHeaders: 'Content-Disposition'
};

const knex = Knex.knex({
  client: process.env.DB_CONNECTION,
  connection: {
    database: process.env.DB_DATABASE,
    user:     process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  }
});

Model.knex(knex);

app.use(cors(corsConfig));

app.use('/usuario', usuarioRoutes);
app.use('/temario', temarioRoutes);
app.use('/partida', partidaRoutes);
app.use('/logro', logroRoutes);


app.listen(port, () => {
  console.log(`[server]: Server is running at port:${port}`);
});
