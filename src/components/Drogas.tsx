import { useEffect, useState } from "react";
import { Drogas } from "../models/drogas";
import { drogasData } from "../database/drogasdata";


export const DrogasP = () => {
    const [drogas,setEventos] = useState<Drogas[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchDrogas = async () => {
      try{
        const response = await fetch('localhost:3000/drogas');
      if(!response.ok){
        throw new Error('Error al obtener los datos')
      }
      const data:Drogas[] = await response.json();
      setEventos(data)
    }catch(err:any) {
      setError(err.message);
    }
    }

    useEffect(() => {
      fetchDrogas();
    },[])


    return(
        <>
          <h1 className="text-4xl">Productos Especiales</h1>
          <div>{drogas.map((droga)=>(
            <div key={droga.id} className="p-4 bg-fuchsia-100 rounded shadow grid justify-items-stretch text-xl">
              <div className="w-full text-2xl">{droga.nombre}</div><div className="w-full">Precio: {droga.precio} 
                -Marca: {droga.marca} </div>  
              
            </div>
          ))}</div>
        

        {drogas.map(drogas =>(
              <li> key={drogas.id}
              <strong>{drogas.nombre}</strong>
              (<em>{drogas.precio}</em>)
              (<em>{drogas.marca}</em>)
              </li>
            ))}

        </>
    )
}