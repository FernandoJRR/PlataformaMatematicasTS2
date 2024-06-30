"use strict";
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
exports.getUsuario = getUsuario;
exports.validateUsuario = validateUsuario;
exports.createUsuario = createUsuario;
exports.cambiarPassword = cambiarPassword;
const usuario_1 = require("../models/usuario");
const encription_handler_1 = require("../handlers/encription.handler");
function getUsuario(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = yield usuario_1.Usuario.query()
            .select('usuario.*', 'rol.codigo')
            .where('username', username)
            .join('rol', 'usuario.id_rol', 'rol.id')
            .first();
        if (usuario === undefined) {
            throw new Error("El usuario no existe");
        }
        return usuario;
    });
}
function validateUsuario(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = yield usuario_1.Usuario.query()
            .where('username', username)
            .first();
        if (usuario === undefined) {
            throw new Error("El usuario no existe");
        }
        else if (!(0, encription_handler_1.encriptarComparar)(password, usuario.password)) {
            throw new Error("La password es incorrecta");
        }
        return usuario;
    });
}
function createUsuario(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const verificacionUsuario = yield usuario_1.Usuario.query()
            .where('username', input.username)
            .first();
        if (verificacionUsuario !== undefined) {
            throw new Error("Ya existe un usuario con ese username");
        }
        const passwordEncriptada = (0, encription_handler_1.encriptar)(input.password);
        input.password = passwordEncriptada;
        yield usuario_1.Usuario.query().insert(input);
        const usuario = yield usuario_1.Usuario.query()
            .select('usuario.*', 'rol.codigo')
            .where('username', input.username)
            .join('rol', 'usuario.id_rol', 'rol.id')
            .first();
        return usuario;
    });
}
function cambiarPassword(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = yield usuario_1.Usuario.query()
            .where('username', input.username)
            .first();
        if (usuario === undefined) {
            throw new Error("El usuario no existe");
        }
        const resultado = yield usuario_1.Usuario.query()
            .findById(input.username)
            .patch({ password: input.password });
        if (resultado === 0) {
            throw new Error("Hubo un error al modificar el password");
        }
        else {
            return "Password cambiada exitosamente!";
        }
    });
}
