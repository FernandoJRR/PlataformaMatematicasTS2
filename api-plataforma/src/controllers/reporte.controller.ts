import { RequestHandler } from "express";
import * as reporteService from "../services/reporte.service";

export const getPartida: RequestHandler = async (req, res, next) => {
  try {
    //const idPartida = req.params.id;
    const response = await reporteService.getReportePartida();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const getPartidaTema: RequestHandler = async(req,res,next) =>{
   try{
    const response = await reporteService.getReportePartidaPorTema();
    res.status(200).json(response);
   }catch(error: any){
    res.status(400).json(error.message);
   }
};