import { Router } from "express";
import * as reporteController from "../controllers/reporte.controller";

const router = Router();

router.get('/reportePartidaPromedio/', reporteController.getPartida);
router.get('/reportePartidaTema', reporteController.getPartidaTema);
router.get('/reportePartidaProfesor/:username', reporteController.getPartidaProfesor);

export default router;