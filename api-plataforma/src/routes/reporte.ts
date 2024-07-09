import { Router } from "express";
import * as reporteController from "../controllers/reporte.controller";
//import { getReportePartidaPorProfesor } from "../services/reporte.service";

const router = Router();

router.get('/reportePartidaPromedio/', reporteController.getPartida);
router.get('/reportePartidaTema', reporteController.getPartidaTema);
router.get('/reportePartidaProfesor/:username', reporteController.getPartidaProfesor);
router.get('/topEstudiantes/:id',reporteController.getUsuariorPorTema);
router.get('/partidaPorTemario/',reporteController.getReportePartidaPorTemarioController);
router.get('/temaUsuario/:username',reporteController.getTemaPorUsuario);
router.get('/temarioProfesor/:username',reporteController.getPartiaPorProfesorTemario);
export default router;