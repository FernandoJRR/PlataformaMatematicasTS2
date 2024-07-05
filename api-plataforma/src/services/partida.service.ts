import { Partida } from "../models/partida";
import { Tema } from "../models/tema";
import { ModoJuego } from "../models/modo_juego";

export async function getPartida(idPartida: number) {
  const partida = await Partida.query().findById(idPartida);

  if (partida === undefined) {
    throw new Error("La partida no existe");
  }

  const tema = await partida.$relatedQuery('tema');
  const modoJuego = await partida.$relatedQuery('modo_juego');
  const usuario = await partida.$relatedQuery('usuario');

  return { ...partida, tema, modoJuego, usuario };
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

  if (partida === undefined) {
    throw new Error("La partida no existe");
  }

  const trx = await Partida.startTransaction();
  try {
    const tema = await Tema.query(trx).insert({ ...inputTema, id_partida: idPartida });
    await trx.commit();
    return tema;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}

export async function addModoJuegoToPartida(idPartida: number, inputModoJuego: any) {
  const partida = await Partida.query().findById(idPartida);

  if (partida === undefined) {
    throw new Error("La partida no existe");
  }

  const trx = await Partida.startTransaction();
  try {
    const modoJuego = await ModoJuego.query(trx).insert({ ...inputModoJuego, id_partida: idPartida });
    await trx.commit();
    return modoJuego;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}
