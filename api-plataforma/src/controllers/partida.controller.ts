import { RequestHandler } from "express";
import * as partidaService from "../services/partida.service";

export const storePartida: RequestHandler = async (req, res, next) => {
  try {
    const input = req.body;
    const response = await partidaService.storePartida(input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};