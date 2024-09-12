import { useState } from "react";
import { Drogas } from "../models/drogas";
import { drogasData } from "../database/drogasdata";

export const DrogasP = () => {
    const [drogas,setEventos] = useState<Drogas[]>(drogasData);
    return(
        <>
          <h1 className="text-4xl">Productos Especiales</h1>
          <div>{drogas.map((droga)=>(
            <div key={droga.id} className="p-4 bg-fuchsia-100 rounded shadow grid justify-items-stretch text-xl">
              <div className="w-full text-2xl">{droga.nombre}</div><div className="w-full">Precio: {droga.precio} 
                -Marca: {droga.marca} </div>  
              
            </div>
          ))}</div>
        
        </>
    )
}