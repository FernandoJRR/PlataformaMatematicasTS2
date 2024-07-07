import { Partida } from "../models/partida";
//import { Tema } from "../models/tema";
//import { EjercicioPartida } from "../models/ejercicio_partida";
//import { ModoJuego } from "../models/modo_juego";

export async function getReportePartida() {
    const partidas = await Partida.query();

    if (!partidas || partidas.length === 0) {
        throw new Error("No se encontraron partidas jugadas");
    }

    const partidasConPuntaje = partidas.filter(partida => partida.puntaje !== undefined && partida.puntaje !== null);

    if (partidasConPuntaje.length === 0) {
        throw new Error("No se encontraron partidas con puntaje definido");
    }

    const totalPartidas = partidasConPuntaje.length;
    const totalPuntaje = partidasConPuntaje.reduce((sum, partida) => sum + (partida.puntaje ?? 0), 0);
    const puntajePromedio = totalPuntaje / totalPartidas;

    return {
        totalPartidas,
        puntajePromedio
    };
    /**
     * Salida en formato json 
     {
        "totalPartidas": 6,
        "puntajePromedio": 44.833333333333336
    }
     */
}


