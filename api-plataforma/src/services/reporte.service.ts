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
        reporte para administrador 
     */
}
//Reporte para adnministrador por tema y promedio de puntos por tema 


export async function getReportePartidaPorTema() {
    try {
        // Consulta utilizando JOIN para obtener partidas con tema y usuario relacionados
        const partidas = await Partida.query()
            .join('tema', 'partida.id_tema', 'tema.id')
            .join('usuario', 'partida.username_jugador', 'usuario.username')
            .select('partida.id', 'partida.puntaje', 'tema.titulo as nombre_tema', 'usuario.username as username_jugador');

        if (!partidas || partidas.length === 0) {
            throw new Error("No se encontraron partidas jugadas");
        }

        // Calcular promedio de puntaje por tema
        const promediosPorTema: { [nombreTema: string]: { totalPartidas: number, totalPuntaje: number } } = {};
        const conteoPorTema: { [nombreTema: string]: number } = {};



        const reportePorTema = Object.keys(promediosPorTema).map(nombreTema => ({
            nombre_tema: nombreTema,
            puntaje_promedio: promediosPorTema[nombreTema].totalPuntaje / promediosPorTema[nombreTema].totalPartidas,
            total_partidas: conteoPorTema[nombreTema]
        }));

        console.log(reportePorTema);

        return reportePorTema;
    } catch (error) {
        console.error("Error al obtener el reporte de partidas por tema:", error);
        throw error;
    }
}

// Función auxiliar para calcular el promedio de puntaje por tema
function calcularPromedioPuntajePorTema(partidasPorTema: { [idTema: number]: Partida[] }) {
    const reportePorTema: { [idTema: number]: { totalPartidas: number; puntajePromedio: number } } = {};

    Object.keys(partidasPorTema).forEach(idTemaStr => {
        const idTema = parseInt(idTemaStr);
        const partidas = partidasPorTema[idTema];
        const partidasConPuntaje = partidas.filter(partida => partida.puntaje !== undefined && partida.puntaje !== null);

        if (partidasConPuntaje.length > 0) {
            const totalPartidas = partidasConPuntaje.length;
            const totalPuntaje = partidasConPuntaje.reduce((sum, partida) => sum + (partida.puntaje ?? 0), 0);
            const puntajePromedio = totalPuntaje / totalPartidas;
            reportePorTema[idTema] = {
                totalPartidas,
                puntajePromedio
            };
        }
    });

    return reportePorTema;
}

export async function getReportePartidaPorTemaProfesor(username_profesor: string) {
    try {
        // Consulta utilizando JOIN para obtener partidas con tema y usuario relacionados
        const partidas = await Partida.query()
            .join('tema', 'partida.id_tema', 'tema.id')
            .join('usuario', 'partida.username_jugador', 'usuario.username')
            .select('partida.id', 'partida.puntaje', 'tema.titulo as nombre_tema', 'usuario.username as username_jugador');

        if (!partidas || partidas.length === 0) {
            throw new Error("No se encontraron partidas jugadas");
        }

        // Calcular promedio de puntaje por tema
        const promediosPorTema: { [nombreTema: string]: { totalPartidas: number, totalPuntaje: number } } = {};
        const conteoPorTema: { [nombreTema: string]: number } = {};



        const reportePorTema = Object.keys(promediosPorTema).map(nombreTema => ({
            nombre_tema: nombreTema,
            puntaje_promedio: promediosPorTema[nombreTema].totalPuntaje / promediosPorTema[nombreTema].totalPartidas,
            total_partidas: conteoPorTema[nombreTema]
        }));

        console.log(reportePorTema);

        return reportePorTema;
    } catch (error) {
        console.error("Error al obtener el reporte de partidas por tema:", error);
        throw error;
    }
}