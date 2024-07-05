import { Router } from "express";
import * as ejercicioController from "../controllers/ejercicio.controller";

const router = Router();

router.post('/ejercicios-partida/:tipo/:dificultad/', ejercicioController.getEjerciciosPartida);

export default router;