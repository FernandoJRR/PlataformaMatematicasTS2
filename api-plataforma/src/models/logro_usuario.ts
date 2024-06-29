import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { logro } from "./logro";

export class logroUsuario extends Model {
    static tableName = 'logro_usuario';

    id_logro?: string;
    udername_usaurio?: string;
    fehca_conseguido?: string;

    static get idColumn() {
      return 'id_logro';
    }
    
    static get relationMappings(): RelationMappings | RelationMappingsThunk {
        return {
          logro_usuario: {
            relation: Model.BelongsToOneRelation,
            modelClass: logroUsuario,
            join: {
              from: 'id_logro',
              to: 'logro.id',
            },
          },
        };
    }
}