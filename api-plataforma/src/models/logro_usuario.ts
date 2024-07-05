import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { Logro } from "./logro";

export class LogroUsuario extends Model {
    static tableName = 'logro_usuario';

    id_logro?: number;
    username_usuario?: string;
    fecha_conseguido?: Date;

    static get idColumn() {
      return ['id_logro', 'username_usuario'];
    }
    
    static get relationMappings(): RelationMappings | RelationMappingsThunk {
        return {
          logro: {
            relation: Model.BelongsToOneRelation,
            modelClass: Logro,
            join: {
              from: 'logro_usuario.id_logro',
              to: 'logro.id',
            },
          },
        };
    }
}
