export interface Ejercicio {
    id?: number;
    id_tipo_ejercicio: number;
    id_dificultad: number;
    anotacion?: string;
    id_tema: number;   
    data_json: any; 
    fecha_creacion: string;
    fecha_modificacion: string;
}