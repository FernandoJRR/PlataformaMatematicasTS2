import { Router } from "express";
import * as partidaController from "../controllers/partida.controller";

const router = Router();

router.get('/:id', partidaController.getPartida);

router.post('/', partidaController.storePartida);


export default router;