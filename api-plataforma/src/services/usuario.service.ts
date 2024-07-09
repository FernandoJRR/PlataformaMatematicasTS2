import { Usuario } from "../models/usuario";
import { Rol } from "../models/rol";
import knex from "knex";
import { encriptar, encriptarComparar } from "../handlers/encription.handler";

export async function getUsuario(username: string) {
  
  const usuario = await Usuario.query()
    .select('usuario.*','rol.codigo')
    .where('username', username)
    .join('rol', 'usuario.id_rol', 'rol.id')
    .first();

  if (usuario === undefined) {
    throw new Error(`El usuario --'${username}'-- no existe :c`);
  }

  return usuario;
}

export async function validateUsuario(username: string, password: string) {
  const usuario = await Usuario.query()
    .where('username', username)
    .first();

  if (usuario === undefined) {
    throw new Error("El usuario no existe");
  } else if (!encriptarComparar(password, usuario.password!)) {
    throw new Error("La password es incorrecta");
  }

  return usuario;
}

export async function createUsuario(input: any) {
  const verificacionUsuario = await Usuario.query()
    .where('username',input.username)
    .first();

  if (verificacionUsuario !== undefined) {
    throw new Error("Ya existe un usuario con ese username");
  }
  
  const passwordEncriptada = encriptar(input.password);
  input.password = passwordEncriptada;

  await Usuario.query().insert(input);

  const usuario = await Usuario.query()
    .select('usuario.*','rol.codigo')
    .where('username', input.username)
    .join('rol', 'usuario.id_rol', 'rol.id')
    .first();

  return usuario;
}

export async function cambiarPassword(input: any) {
  const usuario = await Usuario.query()
    .where('username',input.username)
    .first();

  if (usuario === undefined) {
    throw new Error("El usuario no existe");
  }

  const resultado = await Usuario.query()
    .findById(input.username)
    .patch({ password: encriptar(input.password) });
  
  if (resultado === 0) {
    throw new Error("Hubo un error al modificar el password");
  } else {
    return "Password cambiada exitosamente!";
  }
}