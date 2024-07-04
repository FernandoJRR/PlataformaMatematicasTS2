import { Tema } from "./tema.interface";

export interface Temario {
    id?: number;
    titulo:string;
    descripcion:string;
    username_creador:string;
    fecha_creacion:string;
    temas:Tema[];

    //constructor() {} 
}