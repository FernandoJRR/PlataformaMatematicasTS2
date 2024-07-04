import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { Tema } from "./tema";

export class Partida extends Model {
    static tableName = 'partida';

    id?: number;
    id_tema?: number;
    puntaje?: number;
    username_jugador?: string;
    id_modo_juego?: number;
    static get relationMappings(): RelationMappings | RelationMappingsThunk {
        return {
          tema: {
            relation: Model.BelongsToOneRelation,
            modelClass: Tema,
            join: {
              from: 'partida.id_tema',
              to: 'tema.id',
            },
          },
          usuario: {
            relation: Model.HasManyRelation,
            modelClass: Tema,
            join: {
              from: 'partida.username_jugador',
              to: 'usuario.username',
            },
          },
          modo_juego: {
            relation: Model.HasManyRelation,
            modelClass: Tema,
            join: {
              from: 'partida.id_modo_juego',
              to: 'modo_juego.id',
            },
          },
        };
    }
}