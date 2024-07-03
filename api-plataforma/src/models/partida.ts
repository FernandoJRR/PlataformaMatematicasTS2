import { Model, RelationMappings, RelationMappingsThunk } from "objection";

export class Partida extends Model {
    static tableName = 'partida';

    id_tema?: number;
    puntaje?: number;
    username_jugador?: string;
    id_modo_juego?: number;
}