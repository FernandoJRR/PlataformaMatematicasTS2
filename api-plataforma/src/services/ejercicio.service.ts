import { Temario } from "../models/temario";
import { Tema } from "../models/tema";
import { Ejercicio } from "../models/ejercicio";

export async function getEjerciciosPartida(tipo: number, dificultad: number, inputTemas: any) {
  const ejercicios = await Ejercicio.query()
  .where('id_tipo_ejercicio', tipo)
  .where('id_dificultad', dificultad);
    
  return ejercicios;
}