import { RequestHandler } from "express";
import * as temarioService from "../services/temario.service";

export const getTemarios: RequestHandler = async (req, res, next) => {
  try {
    const response = await temarioService.getTemarios();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const getTemario: RequestHandler = async (req, res, next) => {
  try {
    const idTemario = req.params.id;
    const response = await temarioService.getTemario(+idTemario);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const createTemario: RequestHandler = async (req, res, next) => {
  try {
    const input = req.body;
    const response = await temarioService.createTemario(input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const addTema: RequestHandler = async (req, res, next) => {
  try {
    const idTemario = req.params.id;
    const input = req.body;
    const response = await temarioService.addTema(+idTemario, input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const getTema: RequestHandler = async (req, res, next) => {
  try {
    const idTemario = req.params.id;
    const response = await temarioService.getTema(+idTemario);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const addEjercicio: RequestHandler = async (req, res, next) => {
  try {
    const idTema = req.params.id;
    const input = req.body;
    const response = await temarioService.addEjercicio(+idTema, input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }

};

export const updateTemario: RequestHandler = async (req, res, next) => {
  try {
    const idTemario = req.params.id;
    const input = req.body;
    const response = await temarioService.updateTemario(+idTemario, input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const updateTema: RequestHandler = async (req, res, next) => {
  try {
    const idTema = req.params.id;
    const input = req.body;
    const response = await temarioService.updateTema(+idTema, input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const updateEjercicio: RequestHandler = async (req, res, next) => {
  try {
    const idEjercicio = req.params.id;
    const input = req.body;
    const response = await temarioService.updateEjercicio(+idEjercicio, input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};