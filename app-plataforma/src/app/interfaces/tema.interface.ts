import { Ejercicio } from "./ejercicio";

export interface Tema {
    id?: number;
    titulo:string;
    descripcion:string;
    id_temario: number;
    id_tema_previo: number;
    fecha_creacion:string;
    ejercicios:Ejercicio[];
}