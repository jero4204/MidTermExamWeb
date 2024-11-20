import { useState,useEffect } from "react";
import { Sicario } from "../models/sicarios";


export const Sicarios = () => {
    const [sicarios,setSicarios] = useState<Sicario[]>([]);
    const [error, setError] = useState<string | null>(null);

      const fetchSicarios = async () => {
        try{
          const response = await fetch('localhost:3000/sicarios');
        if(!response.ok){
          throw new Error('Error al obtener los datos')
        }
        const data:Sicario[] = await response.json();
        setSicarios(data)
      }catch(err:any) {
        setError(err.message);
      }
      }

      useEffect(() => {
        fetchSicarios();
      },[])


    return(
        <>
          <h1 className="text-4xl">Sicarios</h1>
          <div>{sicarios.map((sica)=>(
            <div key={sica.id} className="p-4 bg-fuchsia-100 rounded shadow grid justify-items-stretch text-xl">
                <div className="w-full text-2xl">{sica.nombreClave}</div><div className="w-full"> 
                    Trabajos completados: {sica.trabajosRealizados} Tarifa Minima: {sica.tarifaMinima}</div>
            </div>
          ))}</div>
        
        {sicarios.map(sicarios =>(
              <li> key={sicarios.id}
              <strong>{sicarios.nombreClave}</strong>
              (<em>{sicarios.trabajosRealizados}</em>)
              (<em>{sicarios.tarifaMinima}</em>)
              </li>
            ))}
        </>
    )
}