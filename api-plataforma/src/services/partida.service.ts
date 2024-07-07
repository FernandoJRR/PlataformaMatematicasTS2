import { Partida } from "../models/partida";
import { Tema } from "../models/tema";
import { EjercicioPartida } from "../models/ejercicio_partida";
import { ModoJuego } from "../models/modo_juego";

export async function getPartida(idPartida: number) {
  const partida = await Partida.query().findById(idPartida);

  if (!partida) {
    throw new Error("La partida no existe");
  }
  return partida;
}

export async function createPartidaWithEjercicios(input: any) {
  const trx = await Partida.startTransaction();
  
  try {
    // Insertar la partida
    const partida = await Partida.query(trx).insert({
      id_tema: input.id_tema,
      username_jugador: input.username_jugador,
      id_modo_juego: input.id_modoJuego,
    });

    // Obtener el ID de la partida recién insertada
    //const idPartida = partida.id;
/*
    // Iterar sobre cada ejercicio y realizar la inserción individual
    console.log("aqui si entra?");
     const ejercico =  await EjercicioPartida.query(trx).insert({
        id_partida: 4,
        id_ejercicio: 1,
        resuelto_satisfactoriamente: true
      });
    console.log("nop");
*/
    // Commit de la transacción
    await trx.commit();

    return partida;
  } catch (error) {
    // Rollback en caso de error
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
