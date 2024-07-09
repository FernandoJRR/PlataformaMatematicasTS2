import { Temario } from "../models/temario";
import { Tema } from "../models/tema";
import { Ejercicio } from "../models/ejercicio";

export async function getEjerciciosPartida(tipo: number, dificultad: number, modo: number, inputTemas: any) {
  const temas = inputTemas.temas;
  let ejercicios = [];
  if (temas.length === 0) {
    //Si no vienen temas no se filtra por tema
    ejercicios = await Ejercicio.query()
    .where('id_tipo_ejercicio', tipo)
    .where('id_dificultad', dificultad);
  } else {
    ejercicios = await Ejercicio.query()
    .where('id_tipo_ejercicio', tipo)
    .where('id_dificultad', dificultad)
    .whereIn('id_tema', temas);
  }

  if (modo === 3) {
    ejercicios = await Ejercicio.query()
    .where('id_dificultad', 3);
  }
    
  return ejercicios;
}