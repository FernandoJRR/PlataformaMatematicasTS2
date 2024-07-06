import { LogroUsuario } from "../models/logro_usuario";
import { Logro } from "../models/logro";
import { Partida } from "../models/partida";
import { Usuario} from "../models/usuario";

export async function getLogrosUsuario(username: string) {
    const logrosUsuario = await LogroUsuario.query()
        .where('username_usuario', username)
        .withGraphFetched('logro');

    if (!logrosUsuario.length) {
        throw new Error("El usuario no tiene logros o no existe");
    }

    return logrosUsuario;
}

export async function otorgarLogros(username: string) {
    const logrosOtorgados: LogroUsuario[] = [];

    // Contar cuántas partidas ha jugado el usuario.
    const partidasJugadasResult = await Partida.query()
        .where('username_jugador', username)
        .count() as unknown as { count: string }[];

    const partidasJugadasCount = parseInt(partidasJugadasResult[0].count, 10);

    if (partidasJugadasCount >= 10) {
        const logro = await Logro.query().findOne({ nombre: 'Jugador principiante' });
        if (logro) {
            /*const logroUsuario = await LogroUsuario.query().insert({
                id_logro: logro.id,
                username_usuario: username,
                fecha_conseguido: new Date()
            });*/
            //logrosOtorgados.push(logroUsuario);
        }
    }

    // Añadir más condiciones aquí...

    return logrosOtorgados;
}
