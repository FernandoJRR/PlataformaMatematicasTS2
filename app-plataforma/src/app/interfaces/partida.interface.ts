import { EjercicioPartidax } from "./ejercicio_partida.interface";

export interface Partida {
    id?: number;
    //id_tema?: number;
    username_jugador:string;
    id_modo_juego: number;
    puntaje: number;
    ejercicio_partida:EjercicioPartidax[]
}   

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               