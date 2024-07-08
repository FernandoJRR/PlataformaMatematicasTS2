import { RequestHandler } from "express";
import * as partidaService from "../services/partida.service";


export const getPartidas: RequestHandler = async (req, res, next) => {
  try {
    const response = await partidaService.getPartidas();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const getPartida: RequestHandler = async (req, res, next) => {
  try {
    const idPartida = req.params.id;
    const response = await partidaService.getPartida(+idPartida);
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
  }catch(error){
  
  }
};

export const storePartida: RequestHandler = async (req, res, next) => {
  try {
    const input = req.body;
    const response = await partidaService.storePartida(input);

    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }

};