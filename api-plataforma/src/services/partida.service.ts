import { Temario } from "../models/temario";
import { Tema } from "../models/tema";
import { Ejercicio } from "../models/ejercicio";
import { Partida } from "../models/partida";
import { EjercicioPartida } from "../models/ejercicio_partida";

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