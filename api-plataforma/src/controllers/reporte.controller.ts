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
export const getPartidaProfesor: RequestHandler = async(req,res,next) =>{
  try{
    const username_profesor = req.params.username;
   const response = await reporteService.getReportePartidaPorTemaProfesor1(username_profesor);
   res.status(200).json(response);
  }catch(error: any){
   res.status(400).json(error.message);
  }
};

export const getUsuariorPorTema: RequestHandler = async(req,res,next) =>{
  try{
    const temaID = (Number)(req.params.id);
   const response = await reporteService.getTopUsuariosPorTema(temaID);
   res.status(200).json(response);
  }catch(error: any){
   res.status(400).json(error.message);
  }
};
export const getReportePartidaPorTemarioController: RequestHandler = async(req,res,next) =>{
  try{
  
   const response = await reporteService.getReportePartidaPorTemario();
   res.status(200).json(response);
  }catch(error: any){
   res.status(400).json(error.message);
  }
};

//getPromedioPuntosPorTemaParaUsuario
export const getTemaPorUsuario: RequestHandler = async(req,res,next) =>{
  try{
    const temaID = (req.params.username);
   const response = await reporteService.getPromedioPuntosPorTemaParaUsuario(temaID);
   res.status(200).json(response);
  }catch(error: any){
   res.status(400).json(error.message);
  }
};
export const getPartiaPorProfesorTemario: RequestHandler = async(req,res,next) =>{
  try{
    const temaID = (req.params.username);
   const response = await reporteService.getReportePartidaPorProfesor(temaID);
   res.status(200).json(response);
  }catch(error: any){
   res.status(400).json(error.message);
  }
};