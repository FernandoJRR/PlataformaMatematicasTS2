import { Model, RelationMappings, RelationMappingsThunk } from "objection";

export class EjercicioPartida extends Model {
    static tableName = 'ejercicio_partida';

    id_ejercicio?: number;
    id_partida?: number;
    resuelto_satisfactoriamente?: boolean;
}