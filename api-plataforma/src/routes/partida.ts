import { Router } from "express";
import * as partidaController from "../controllers/partida.controller";

const router = Router();

router.post('/', partidaController.storePartida);

export default router;