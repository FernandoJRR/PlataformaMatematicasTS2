import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller";

const router = Router();

router.get('/:username', usuarioController.getUsuario);

router.post('/validate/', usuarioController.validateUsuario);

router.post('/', usuarioController.createUsuario);

router.patch('/change-password', usuarioController.cambiarPassword);

export default router;