import { useState } from "react";
import { maquillajesData } from '../database/maquillajesdata';
import { Maquillaje } from '../models/maquillajes';
import { MaquillajesComponents } from './componenteMaquillaje';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
export const Makeup = () => {
    const [maquillajes, setMaquillajes] = useState<Maquillaje[]>(maquillajesData);
    const [maquillaje, setMaquillaje] = useState<Maquillaje>({
      id: maquillajes.length +1,
     tipoMaquillaje: '',
      precio: 0,
      nombre: '',
      marca: ''
      
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
        id: maquillajes.length +2
        
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
             maquillajesData.map((maquillaje) => {
            return <MaquillajesComponents key={maquillaje.id} maquillaje={maquillaje} />
          })
        }
            </div>
          </div>
          <input type="text" 
      placeholder="ingrese el tipo" 
       value={tipoMaquillaje}
       id="tipoMaquillaje"
       name="tipoMaquillaje"
       onChange={handleChange}/>
      <input type="number"
      placeholder="ingrese precio"
       value={precio}
       id="precio"
       name="precio"
       onChange={handleChange}/>
      <input type="text" 
      name="nombre"
      id="nombre"
      placeholder="ingrese el nombre"  
      value={nombre}
      onChange={handleChange}
      className="input"/>
      <input type="text" 
      placeholder="ingrese la marca" 
       value={marca}
       id="marca"
       name="marca"
       onChange={handleChange}/>
      <Button onClick={addMaquillaje} className="button button-primary">Add</Button>
      <button className="btn btn-success">Click Me</button>
      <h2>I dont know</h2>
        </>
    )
}