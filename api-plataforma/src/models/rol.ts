import { Model } from "objection";

export class Rol extends Model {
    static tableName = 'rol';

    id?: number;
    codigo?: string;
}