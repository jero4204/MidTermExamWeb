import { useState } from "react";
import { Sicario } from "../models/sicarios";
import { sicariosData } from "../database/sicariosdata";

export const Sicarios = () => {
    const [sicarios, setEventos] = useState<Sicario[]>(sicariosData);
    return(
        <>
          <h1 className="text-4xl">Sicarios</h1>
          <div>{sicarios.map((sica)=>(
            <div key={sica.id} className="p-4 bg-fuchsia-100 rounded shadow grid justify-items-stretch text-xl">
                <div className="w-full text-2xl">{sica.nombreClave}</div><div className="w-full"> 
                    Trabajos completados: {sica.trabajosRealizados} Tarifa Minima: {sica.tarifaMinima}</div>
            </div>
          ))}</div>
        
        </>
    )
}