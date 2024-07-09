import { Model } from "objection";

export class Logro extends Model {
    static tableName = 'logro';

    id?: string;
    titulo?: string;
    descripcion?: string;
}