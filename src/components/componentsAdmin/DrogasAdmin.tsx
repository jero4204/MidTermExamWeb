import { useState } from "react";
import { Drogas } from "../../models/drogas";
import { drogasData } from "../../database/drogasdata";

export const DrogasAdm = () => {
  const [drogas, setDrogas] = useState<Drogas[]>(drogasData);
  const [droga, setDroga] = useState<Drogas>({
    id: drogas.length +1,
    nombre: '',
    precio: 0,
    marca: 'MariaUp',    
  });
  const {nombre,precio, marca} = droga;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDroga({
      ...droga,
      [e.target.name]: e.target.value
    });
  }
  const addDroga = () => {
    setDroga({
      ...droga,
      id: drogas.length +2      
    });
    setDrogas([...drogas, droga]);
  }

  return(
    <>
      <div className="grid grid-cols-1 gap-4">
        {drogas.map((droga) => (
          <div key={droga.id} className="p-4 bg-white rounded shadow grid justify-items-stretch text-3xl">
            {droga.nombre} Precio: {droga.precio} Marca: {droga.marca}{/* Muestra el nombre del elemento */}
          </div>
        ))}
      </div>
      <div>
        <h1 className='text-4xl font-serif text-pink-400'>Agrega nuevas Drogas</h1>
        <div className="h-full w-1/4 bg-red-500"> </div>
      </div> 
      <input type="text" placeholder="ingrese el nombre" 
        value={nombre}
        id="nombre"
        name="nombre"
      onChange={handleChange}/>
      <input type="number" placeholder="ingrese precio"
        value={precio}
        id="precio"
        name="precio"
      onChange={handleChange}/>
      <input type="text" placeholder="ingrese la marca" 
        name="marca"
        id="marca"
        value={marca}
      onChange={handleChange}/> 
      <button onClick={addDroga} className="button button-primary">Add</button> 
    </>
  )
}