import { Ejercicio } from "./ejercicio";

export interface Tema {
    id?: number;
    titulo: string;
    descripcion: string;
    informacion?: string; //LongString OPCIONAL para Markdown
    id_temario: number;
    id_tema_previo?: number | null;
    fecha_creacion: string;
    ejercicios: Ejercicio[];
}