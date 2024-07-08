import { EjercicioPartida } from "../models/ejercicio_partida";
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

}

export async function getReportePartidaPorTemaProfesor(username_profesor: string) {
    //Se obtienen todos los ejercicio_partida donde el temario del ejercicio sea creado por el profesor
    const ejercicios_partida_profesor = await EjercicioPartida.query()
    .join('ejercicio', 'ejercicio_partida.id_ejercicio', 'ejercicio.id')
    .join('tema', 'ejercicio.id_tema', 'tema.id')
    .join('temario', 'tema.id_temario', 'temario.id')
    .where('temario.username_creador', username_profesor)
    .orderBy('ejercicio_partida.id_partida');
    return ejercicios_partida_profesor;
}

interface ReportePorTema {
    temaTitulo: string;
    totalPartidas: number;
    puntajePromedio: number;
  }
  
  export async function getReportePartidaPorTemaProfesor1(username_profesor: string): Promise<ReportePorTema[]> {
      try {
          // Realizar la consulta con las uniones necesarias y seleccionar las columnas específicas
          const resultados = await EjercicioPartida.query()
              .join('ejercicio', 'ejercicio_partida.id_ejercicio', 'ejercicio.id')
              .join('tema', 'ejercicio.id_tema', 'tema.id')
              .join('temario', 'tema.id_temario', 'temario.id')
              .join('partida', 'ejercicio_partida.id_partida', 'partida.id')
              .where('temario.username_creador', username_profesor)
              .select('partida.*', 'tema.titulo as temaTitulo')
              .orderBy('ejercicio_partida.id_partida');
  
          if (!resultados || resultados.length === 0) {
              throw new Error("No se encontraron partidas jugadas");
          }
  
          // Agrupar las partidas por tema
          const partidasPorTema: Record<string, { temaTitulo: string, partidas: Partida[] }> = {};
  
          resultados.forEach((resultado: any) => {
              const temaTitulo = resultado.temaTitulo;
              const partida = {
                  id: resultado.id,
                  puntaje: resultado.puntaje,
                  username_jugador: resultado.username_jugador,
                  id_modo_juego: resultado.id_modo_juego
              } as Partida;
  
              if (!partidasPorTema[temaTitulo]) {
                  partidasPorTema[temaTitulo] = { temaTitulo, partidas: [] };
              }
  
              partidasPorTema[temaTitulo].partidas.push(partida);
          });
  
          // Calcular el promedio de puntaje por tema
          const reportePorTema = Object.keys(partidasPorTema).map(temaTitulo => {
              const temaData = partidasPorTema[temaTitulo];
              const totalPartidas = temaData.partidas.length;
              const totalPuntaje = temaData.partidas.reduce((sum, partida) => sum + (partida.puntaje ?? 0), 0);
              const puntajePromedio = totalPuntaje / totalPartidas;
  
              return {
                  temaTitulo,
                  totalPartidas,
                  puntajePromedio,
              };
          });
  
          return reportePorTema;
      } catch (error) {
          console.error("Error al obtener el reporte de partidas por tema:", error);
          throw error;
      }
  }