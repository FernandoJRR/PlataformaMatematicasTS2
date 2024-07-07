import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { Ejercicio } from "./ejercicio";
import { Partida } from "./partida";

export class EjercicioPartida extends Model {
    static tableName = 'ejercicio_partida';

    id_ejercicio?: number;
    id_partida?: number;
    resuelto_satisfactoriamente?: boolean;
    static get relationMappings(): RelationMappings | RelationMappingsThunk {
      return {
          ejercicio: {
              relation: Model.HasManyRelation,
              modelClass: Ejercicio,
              join: {
                  from: 'ejercicio_partida.id_ejercicio',
                  to: 'ejercicio.id',
              },
          },
          partida: {
              relation: Model.HasManyRelation,
              modelClass: Partida,
              join: {
                  from: 'ejercicio_partida.id_partida',
                  to: 'partida.id',
              },
          },
      };
  }
  
}