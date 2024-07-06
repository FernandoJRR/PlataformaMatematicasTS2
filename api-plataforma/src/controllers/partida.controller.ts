import { RequestHandler } from "express";
import * as partidaService from "../services/partida.service";

export const getPartida: RequestHandler = async (req, res, next) => {
  try {
    const idPartida = req.params.id;
    const response = await partidaService.getPartida(+idPartida);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const createPartida: RequestHandler = async (req, res, next) => {
  try {
    const input = req.body;
    const response = await partidaService.createPartida(input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const addTemaToPartida: RequestHandler = async (req, res, next) => {
  try {
    const idPartida = req.params.id;
    const input = req.body;
    const response = await partidaService.addTemaToPartida(+idPartida, input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const addModoJuegoToPartida: RequestHandler = async (req, res, next) => {
  try {
    const idPartida = req.params.id;
    const input = req.body;
    const response = await partidaService.addModoJuegoToPartida(+idPartida, input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};
