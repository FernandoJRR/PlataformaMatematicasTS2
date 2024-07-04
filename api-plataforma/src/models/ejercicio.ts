import { Model, ModelOptions, QueryContext, RelationMappings, RelationMappingsThunk } from "objection";

export class Ejercicio extends Model {
    static tableName = 'ejercicio';

    id?: number;
    id_tipo_ejercicio?: number;
    id_tema?: number;
    id_dificultad?: number;
    anotacion?: string;
    data_json?: string;
    fecha_creacion?: Date;
    fecha_modificacion?: Date;
    
    $beforeInsert() {
      this.fecha_creacion = new Date();
      this.fecha_modificacion = new Date();
    }
    
    $beforeUpdate() {
      this.fecha_modificacion = new Date();
    }
}