import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (_: Request, res: Response) => {
  res.send('Root');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at port:${port}`);
});
