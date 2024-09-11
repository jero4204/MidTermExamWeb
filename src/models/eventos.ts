import { Maquillaje } from "./maquillajes";
import { Modelos } from "./modelos";

export interface Evento {
    id:number;
    nombre:string;
    fecha:string;
    lugar:string;
    modelos: Modelos[];
    productos: Maquillaje[];
    valorEntrada: number;
}