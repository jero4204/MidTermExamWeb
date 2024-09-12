import { useState } from "react";
import { Prostituta } from "../models/prostituta";
import { prostitutasData } from "../database/prostitutasdata";

export const Prostitutas = () => {
    const [prostitutas,setEventos] = useState<Prostituta[]>(prostitutasData);
    return(
        <>
          <h1 className="text-4xl">Maquilladoras sexuales</h1>
          <div>{prostitutas.map((prosti)=>(
            <div key={prosti.id} className="p-4 bg-fuchsia-100 rounded shadow grid justify-items-stretch text-xl">
                <div className="w-full text-2xl">{prosti.nombre}</div><div className="w-full"> Edad: {prosti.edad} 
                    Estatura: {prosti.estatura} Años de Experiencia: {prosti.añosExperiencia}</div>
                <img src={prosti.imagen} className="size-40 justify-self-end"/>
            </div>
          ))}</div>
        
        </>
    )
}