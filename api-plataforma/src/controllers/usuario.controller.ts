import { RequestHandler } from "express";
import * as usuarioService from "../services/usuario.service";

export const getUsuario: RequestHandler = async (req, res, next) => {
  try {
    const username = req.params.username;
    const response = await usuarioService.getUsuario(username);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const validateUsuario: RequestHandler = async (req, res, next) => {
  try {
    const credentials = req.body;
    const response = await usuarioService.validateUsuario(
      credentials.username,
      credentials.password
    );
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const createUsuario: RequestHandler = async (req, res, next) => {
  try {
    const input = req.body;
    const response = await usuarioService.createUsuario(input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const cambiarPassword: RequestHandler = async (req, res, next) => {
  try {
    const input = req.body;
    const response = await usuarioService.cambiarPassword(input);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};