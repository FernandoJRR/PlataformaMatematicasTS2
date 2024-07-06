import { Partida } from "../models/partida";
import { Tema } from "../models/tema";
import { Usuario } from "../models/usuario";
import { ModoJuego } from "../models/modo_juego";

export async function getPartida(idPartida: number) {
  const partida = await Partida.query().findById(idPartida);

  if (!partida) {
    throw new Error("La partida no existe");
  }

  const tema = await partida.$relatedQuery('tema');
  const usuario = await partida.$relatedQuery('usuario');
  const modoJuego = await partida.$relatedQuery('modo_juego');

  return { ...partida, tema, usuario, modoJuego };
}

export async function createPartida(input: any) {
  const trx = await Partida.startTransaction();

  try {
    const partida = await Partida.query(trx).insert(input);
    await trx.commit();
    return partida;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}

export async function addTemaToPartida(idPartida: number, inputTema: any) {
  const partida = await Partida.query().findById(idPartida);

  if (!partida) {
    throw new Error("La partida no existe");
  }

  const trx = await Partida.startTransaction();
  try {
    const tema = await Tema.query(trx).insert({ ...inputTema, id: partida.id_tema });
    await trx.commit();
    return tema;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}

export async function addModoJuegoToPartida(idPartida: number, inputModoJuego: any) {
  const partida = await Partida.query().findById(idPartida);

  if (!partida) {
    throw new Error("La partida no existe");
  }

  const trx = await Partida.startTransaction();
  try {
    const modoJuego = await ModoJuego.query(trx).insert({ ...inputModoJuego, id: partida.id_modo_juego });
    await trx.commit();
    return modoJuego;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}
