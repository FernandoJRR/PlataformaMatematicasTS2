import { Partida } from "../models/partida";
import { Tema } from "../models/tema";
import { EjercicioPartida } from "../models/ejercicio_partida";
import { ModoJuego } from "../models/modo_juego";
import { Temario } from "../models/temario";
import { Ejercicio } from "../models/ejercicio";

export async function getPartidas() {
  const partidas = await Partida.query();
  return partidas;
}

export async function getPartida(idPartida: number) {
  const partida = await Partida.query().findById(idPartida);

  if (!partida) {
    throw new Error("La partida no existe");
  }
  return partida;
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

export async function storePartida(input: any) {
  const ejercicios_partida = input.ejercicio_partida;
  delete input.ejercicio_partida;

  const trx = await Partida.startTransaction();
  try {
    const partida = await Partida.query()
    .insert(input);
      
    for (const ejercicio of ejercicios_partida) {
      ejercicio.id_partida = partida.id;
      await EjercicioPartida.query()
      .insert(ejercicio)
    }
    
    await trx.commit();
    return partida;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}

