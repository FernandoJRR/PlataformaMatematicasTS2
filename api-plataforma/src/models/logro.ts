import { Model } from "objection";

export class logro extends Model {
    static tableName = 'logro';

    id?: string;
    titulo?: string;
    descripcion?: string;
}