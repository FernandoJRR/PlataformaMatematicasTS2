import { Partida } from "../models/partida";
import { Tema } from "../models/tema";
import { EjercicioPartida } from "../models/ejercicio_partida";
import { ModoJuego } from "../models/modo_juego";
import { Temario } from "../models/temario";
import { Ejercicio } from "../models/ejercicio";
import { LogroUsuario } from "../models/logro_usuario";

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

    //Aqui se verifica si se le daran logros al jugador
    
    await trx.commit();
    return partida;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}

async function verificarLogros(partida: Partida) {
  const partidasJugador = await Partida.query()
  .where('username_jugador', partida.username_jugador!);

  //Se verifica si es la primer partida jugada del jugador
  if (partidasJugador.length === 1) {
    //Si lo es se le da el logro Primer Partida
    await LogroUsuario.query()
    .insert({id_logro: 1, username_usuario: partida.username_jugador!, fecha_conseguido: new Date()});
  }

  //Se verifica si es la primer victoria del jugador (60% o mas por primera vez)
  if (partida.puntaje! >= 0.6) {
    //Se verifica que el jugador no tenga el logro
    if (!verificarPosesionLogro(2, partida.username_jugador!)) {
      //Si no lo tiene se le da
      await LogroUsuario.query()
      .insert({id_logro: 2, username_usuario: partida.username_jugador!, fecha_conseguido: new Date()});
    }
  }

  //Se verifica si es la primer partida perfecta del jugador (100%)
  if (partida.puntaje! >= 1) {
    //Se verifica que el jugador no tenga el logro
    if (!verificarPosesionLogro(3, partida.username_jugador!)) {
      //Si no lo tiene se le da
      await LogroUsuario.query()
      .insert({id_logro: 3, username_usuario: partida.username_jugador!, fecha_conseguido: new Date()});
    }
  }
}

//Verifica si un jugador tiene un logro
//true: lo tiene
//false: no lo tiene
async function verificarPosesionLogro(id_logro: number, username_jugador: string) {
    //Se verifica que el jugador no tenga el logro
    const logro = await LogroUsuario.query()
    .findById([2, username_jugador]);

    if (logro === undefined) {
      return false;
    }

    return true;
}