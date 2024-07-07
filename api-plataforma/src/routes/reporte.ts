import { Router } from "express";
import * as reporteController from "../controllers/reporte.controller";

const router = Router();

router.get('/reportePartidaPromedio/', reporteController.getPartida);

export default router;