import { RequestHandler } from "express";
import * as logroUsuarioService from "../services/logroUsuario.service";

export const getLogrosUsuario: RequestHandler = async (req, res, next) => {
  try {
    const username = req.params.username;
    const response = await logroUsuarioService.getLogrosUsuario(username);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};
export const otorgarLogros: RequestHandler = async (req,res,next) =>{
  try {
    const input = req.params.username;
    const response = await logroUsuarioService.otorgarLogros(input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};
export const createLogro: RequestHandler = async (req,res,next) =>{
  try {
    const input = req.body;
    const response = await logroUsuarioService.crearLogro(input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};