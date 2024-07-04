import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { Ejercicio } from "./ejercicio";

export class Tema extends Model {
    static tableName = 'tema';

    id?: number;
    titulo?: string;
    descripcion?: string;
    id_temario?: number;
    id_tema_previo?: number;
    fecha_creacion?: Date;
    
    ejercicios?: Ejercicio[];

    $beforeInsert() {
      this.fecha_creacion = new Date();
    }

    static get relationMappings(): RelationMappings | RelationMappingsThunk {
        return {
          ejercicios: {
            relation: Model.HasManyRelation,
            modelClass: Ejercicio,
            join: {
              from: 'tema.id',
              to: 'ejercicio.id_tema',
            },
          },
        };
    }
}