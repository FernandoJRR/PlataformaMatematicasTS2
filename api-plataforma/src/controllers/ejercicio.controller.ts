import { RequestHandler } from "express";
import * as ejercicioService from "../services/ejercicio.service";

export const getEjerciciosPartida: RequestHandler = async (req, res, next) => {
  try {
    const tipo = req.params.tipo;
    const dificultad = req.params.dificultad;
    const input = req.body;
    const response = await ejercicioService.getEjerciciosPartida(+tipo, +dificultad, input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};