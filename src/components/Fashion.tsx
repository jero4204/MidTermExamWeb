import { useState } from "react";
import { Evento } from "../models/eventos";
import { eventosData } from "../database/eventosdata";

export const Fashion = () => {
    const [eventos,setEventos] = useState<Evento[]>(eventosData);
    return(
        <>
          <h1 className="text-4xl">Eventos</h1>
          <div>{eventos.map((evento)=>(
            <div key={evento.id} className="p-4 bg-fuchsia-100 rounded shadow grid justify-items-stretch text-xl">
              <div className="w-full text-2xl">{evento.nombre}</div><div className="w-full">Fecha: {evento.fecha} 
                -Lugar: {evento.lugar} -Precio Entrada: {evento.valorEntrada}</div>  
              Modelos: {evento.modelos.map((modelo)=>(
                <div key={modelo.id} className="p-4 bg-fuchsia-100 rounded shadow grid justify-items-stretch text-xl">
                  Modelo: {modelo.nombre} 
                </div>
              ))}
              Productos: {evento.productos.map((maquillaje)=>(
                <div key={maquillaje.id} className="p-4 bg-fuchsia-100 rounded shadow grid justify-items-stretch text-xl">
                  Producto: {maquillaje.nombre}
                </div>
              ))}
              
            </div>
          ))}</div>
        
        </>
    )
}