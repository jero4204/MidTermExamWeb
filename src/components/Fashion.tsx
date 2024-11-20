import { useState,useEffect } from "react";
import { Evento } from "../models/eventos";
import { eventosData } from "../database/eventosdata";

export const Fashion = () => {
    const [eventos,setEventos] = useState<Evento[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchFashion = async () => {
      try{
        const response = await fetch('localhost:3000/eventos');
      if(!response.ok){
        throw new Error('Error al obtener los datos')
      }
      const data:Evento[] = await response.json();
      setEventos(data)
    }catch(err:any) {
      setError(err.message);
    }
    }

    useEffect(() => {
      fetchFashion();
    },[])





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

           {eventos.map(eventos => (
          <li key={eventos.id}>
            <strong>{eventos.nombre}</strong> 
            <strong>{eventos.modelos.map(modelos =>(
              <li> key={modelos.id}
              <strong>{modelos.nombre}</strong>
              (<em>{modelos.edad}</em>)
              (<em>{modelos.añosExperiencia}</em>)
              (<em>{modelos.estatura}</em>)
              (<em>{modelos.imagen}</em>)
              </li>
            ))}</strong> 
            <strong>{eventos.productos.map(productos =>(
              <li> key={productos.id}
              <strong>{productos.nombre}</strong>
              (<em>{productos.tipoMaquillaje}</em>)
              (<em>{productos.precio}</em>)
              (<em>{productos.marca}</em>)
              (<em>{productos.imagen}</em>)
              </li>
            ))}</strong>
            (<em>{eventos.fecha}</em>)
            (<em>{eventos.lugar}</em>) 
            (<em>{eventos.valorEntrada}</em>) 
            

          </li>
        ))}
        
        </>
       
    )
}