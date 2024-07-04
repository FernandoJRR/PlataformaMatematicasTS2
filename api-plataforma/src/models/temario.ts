import { Model, QueryContext, RelationMappings, RelationMappingsThunk } from "objection";
import { Usuario } from "./usuario";
import { Tema } from "./tema";

export class Temario extends Model {
    static tableName = 'temario';

    id?: number;
    titulo?: string;
    descripcion?: string;
    username_creador?: string;
    fecha_creacion?: Date;

    temas?: Tema[];
  
    $beforeInsert() {
      this.fecha_creacion = new Date();
    }

    static get relationMappings(): RelationMappings | RelationMappingsThunk {
        return {
          usuario: {
            relation: Model.BelongsToOneRelation,
            modelClass: Usuario,
            join: {
              from: 'temario.username_creador',
              to: 'usuario.username',
            },
          },
          temas: {
            relation: Model.HasManyRelation,
            modelClass: Tema,
            join: {
              from: 'temario.id',
              to: 'tema.id_temario',
            },
          },
        };
    }
}