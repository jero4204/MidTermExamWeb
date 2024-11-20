import { useState,useEffect } from "react";
import { Prostituta } from "../models/prostituta";


export const Prostitutas = () => {
    const [prostitutas,setProstitutas] = useState<Prostituta[]>([]);
    const [error, setError] = useState<string | null>(null);


      const fetchProstitutas = async () => {
        try{
          const response = await fetch('localhost:3000/prostitutas');
        if(!response.ok){
          throw new Error('Error al obtener los datos')
        }
        const data:Prostituta[] = await response.json();
        setProstitutas(data)
      }catch(err:any) {
        setError(err.message);
      }
      }

      useEffect(() => {
        fetchProstitutas();
      },[])




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

        {prostitutas.map(prostitutas =>(
              <li> key={prostitutas.id}
              <strong>{prostitutas.nombre}</strong>
              (<em>{prostitutas.edad}</em>)
              (<em>{prostitutas.añosExperiencia}</em>)
              (<em>{prostitutas.estatura}</em>)
              (<em>{prostitutas.imagen}</em>)
              </li>
            ))}
        </>
    )
}