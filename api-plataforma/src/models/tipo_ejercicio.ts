import { Model } from "objection";

export class TipoEjercicio extends Model {
    static tableName = 'tipo_ejercicio';

    id?: number;
    codigo?: string;
}