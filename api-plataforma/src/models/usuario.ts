import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { Rol } from "./rol";

export class Usuario extends Model {
    static tableName = 'usuario';

    username?: string;
    nombre?: string;
    password?: string;
    id_rol?: number;
  
    static get idColumn() {
      return 'username';
    }
    
    static get relationMappings(): RelationMappings | RelationMappingsThunk {
        return {
          rol: {
            relation: Model.BelongsToOneRelation,
            modelClass: Rol,
            join: {
              from: 'usuario.id_rol',
              to: 'rol.id',
            },
          },
        };
    }
}