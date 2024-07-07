import { Router } from "express";
import * as Logro from "../controllers/logroUsuario.controller";
import { link } from "fs";

const router = Router();

//router.get('/:id', Logro);

router.post('/crearLogro/', Logro.createLogro); // CRear un nuevo logro 
/*
{
  "titulo": "admin1",
  "descripcion": "as"
}

*/ 
router.post('/darLogro/:username',Logro.otorgarLogros); /**
Otorga logros pero se pasa dato por url aunque tambien se puede por json */
router.get('/obtenerLogros/:username', Logro.getLogrosUsuario);
/*
Obtiene el logro del usuario, el formato de salide esta en logroUsuario.services.ts
*/ 
export default router;