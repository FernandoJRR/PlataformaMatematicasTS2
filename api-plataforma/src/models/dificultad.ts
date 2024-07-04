import { Model } from "objection";

export class Dificultad extends Model {
    static tableName = 'dificultad';

    id?: string;
    codigo?: string;
}