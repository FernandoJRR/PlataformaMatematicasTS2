import { Model } from "objection";

export class ModoJuego extends Model {
    static tableName = 'modo_juego';

    id?: number;
    codigo?: string;
}