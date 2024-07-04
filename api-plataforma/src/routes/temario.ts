import { Router } from "express";
import * as temarioController from "../controllers/temario.controller";

const router = Router();

router.get('/:id', temarioController.getTemario);

router.post('/', temarioController.createTemario);

router.post('/temario/:id', temarioController.addTema);

router.post('/tema/:id', temarioController.addEjercicio);

export default router;