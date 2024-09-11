import React, { useState } from 'react';
import { maquillajesData } from '../database/maquillajesdata';
import { Maquillaje } from '../models/maquillajes';
import { MaquillajesComponents } from './componenteMaquillaje';
export const Makeup = () => {
    const [maquillajes, setMaquillajes] = useState<Maquillaje[]>(maquillajesData);
    const [maquillaje, setMaquillaje] = useState<Maquillaje>({
      tipoMaquillaje: " ",
      precio: 0,
      nombre: '',
      marca: ""
    });
    const {tipoMaquillaje,precio,nombre,marca} = maquillaje;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMaquillaje({
        ...maquillaje,
        [e.target.name]: e.target.value
      });
    }
    const addMaquillaje = () => {
      setMaquillaje({
        ...maquillaje,
        
      });
      setMaquillajes([...maquillajes, maquillaje]);
      /*setMovie({
        id: 0,
        title: '',
        director: '',
        year: 0
      });*/
    }

    return(
        <>
          <div>
            <h1 className='text-4xl font-serif text-pink-400'>los productos de mas alta calidad</h1>
            <div className="h-full w-1/4 bg-red-500">
            {
             maquillajesData.map((maquillajes) => {
            return <MaquillajesComponents key={movie.id} movie={movie} />
          })
        }
            </div>
          </div>
        
        </>
    )
}