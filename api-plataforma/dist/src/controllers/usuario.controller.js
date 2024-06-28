"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cambiarPassword = exports.createUsuario = exports.validateUsuario = exports.getUsuario = void 0;
const usuarioService = __importStar(require("../services/usuario.service"));
const getUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.params.username;
        const response = yield usuarioService.getUsuario(username);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.getUsuario = getUsuario;
const validateUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = req.body;
        const response = yield usuarioService.validateUsuario(credentials.username, credentials.password);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.validateUsuario = validateUsuario;
const createUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = req.body;
        const response = yield usuarioService.createUsuario(input);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.createUsuario = createUsuario;
const cambiarPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = req.body;
        const response = yield usuarioService.cambiarPassword(input);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.cambiarPassword = cambiarPassword;
