import { LogroUsuario } from "../models/logro_usuario";
import { Logro } from "../models/logro";
import { Partida } from "../models/partida";
import { Usuario} from "../models/usuario";

export async function getLogrosUsuario(username: string) {
    console.log("llega aqui");
    const logrosUsuario = await LogroUsuario.query()
        .where('username_usuario', username)
        .withGraphFetched('logro');

    if (!logrosUsuario.length) {
        throw new Error("El usuario no tiene logros o no existe");
    }
    console.log(logrosUsuario);
    return logrosUsuario;
}
/*
Se retorna lo siguiente
{
        "id_logro": 1,
        "username_usuario": "admin1",
        "fecha_conseguido": "2024-07-07T06:00:00.000Z",
        "logro": {
            "id": 1,
            "titulo": "admin1",
            "descripcion": "as"
        }
    }
*/
export async function otorgarLogros(username: string) {
    const logrosOtorgados: LogroUsuario[] = [];
    const trx = await LogroUsuario.startTransaction();
    // Contar cuántas partidas ha jugado el usuario.
    const partidasJugadasResult = await Partida.query()
        .where('username_jugador', username)
        .count() as unknown as { count: string }[];

    const partidasJugadasCount = parseInt(partidasJugadasResult[0].count, 10);
    // Logro por cantidad de partidas
    if (partidasJugadasCount === 10) {
       const logroUsuario = await LogroUsuario.query(trx).insert({
            username_usuario: username,
            fecha_conseguido: new Date(),
            id_logro: 1
       });
       logrosOtorgados.push(logroUsuario);
    }else if (partidasJugadasCount === 30) {
        const logroUsuario = await LogroUsuario.query(trx).insert({
             username_usuario: username,
             fecha_conseguido: new Date(),
             id_logro: 2
        });
        logrosOtorgados.push(logroUsuario);
     }
     else if (partidasJugadasCount  === 60 ) {
        const logroUsuario = await LogroUsuario.query(trx).insert({
             username_usuario: username,
             fecha_conseguido: new Date(),
             id_logro: 3
        });
        logrosOtorgados.push(logroUsuario);
     }
     else if(partidasJugadasCount === 100){
        const logroUsuario = await LogroUsuario.query(trx).insert({
            username_usuario: username,
            fecha_conseguido: new Date(),
            id_logro: 3
       });
       logrosOtorgados.push(logroUsuario);
     }
    //Logros por cantidad de ejercicos correctos  
    await trx.commit();
    // Añadir más condiciones aquí...

    return logrosOtorgados;
}
export async function crearLogro(input: any) {
    const trx = await Logro.startTransaction();
    try {
        const logro = await Logro.query(trx).insert({
        titulo: input.titulo,
        descripcion: input.descripcion,
    });
    await trx.commit();
    return logro;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
    
}
