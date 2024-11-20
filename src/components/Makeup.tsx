import { useEffect, useState } from "react";
import { maquillajesData } from '../database/maquillajesdata';
import { Maquillaje } from '../models/maquillajes';
//import 'bootstrap/dist/css/bootstrap.min.css';
export const Makeup = () => {
    const [maquillajes, setMaquillajes] = useState<Maquillaje[]>([]);
    const [filter, setFilter] = useState('all');
    const [error, setError] = useState<string | null>(null);
    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
      };

      const fetchMaquillaje = async () => {
        try{
          const response = await fetch('localhost:3000/maquillaje');
        if(!response.ok){
          throw new Error('Error al obtener los datos')
        }
        const data:Maquillaje[] = await response.json();
        setMaquillajes(data)
      }catch(err:any) {
        setError(err.message);
      }
      }

      useEffect(() => {
        fetchMaquillaje();
      },[])

    return(
        <>
         <div className="bg-red-200 p-10">
      {/* Select para elegir la categoría por la cual filtrar */}
      <div className="mb-4">
        <label htmlFor="categoryFilter" className="block text-lg font-medium text-gray-700 mb-2">
          Filtrar por categoría:
        </label>
        <select
          id="categoryFilter"
          className="block w-1/3 p-2 border border-gray-300 rounded-md"
          value={filter}
          onChange={handleFilterChange} // Evento para manejar los cambios en el select
        >
          <option value="all">Todas</option>
          <option value="Base">Bases</option> 
          <option value="Brochas">Brochas</option>
          <option value="Corrector">Correctores</option>
          <option value="Esponjas">Esponjas</option>
          <option value="iluminador">Iluminadores</option>
          <option value="Labial">Labiales</option>
          <option value="Pestañina">Pestañina</option>
          <option value="Rubor">Rubores</option>
        </select>
      </div>

      {/* Lista de elementos filtrados */}
      <div className="grid grid-cols-1 gap-4">
        {maquillajes
          .filter((maquillaje) => filter === 'all' || maquillaje.tipoMaquillaje === filter) // Filtra los elementos según la categoría seleccionada
          .map((maquillaje) => (
            <div key={maquillaje.id} className="p-4 bg-white rounded shadow grid justify-items-stretch text-3xl">
              {maquillaje.nombre} precio: {maquillaje.precio} {/* Muestra el nombre del elemento */}
              <img src={maquillaje.imagen} className="size-40 justify-self-end"/>
            </div>
          ))}
      </div>
    </div>

    {maquillajes.map(maquillajes =>(
              <li> key={maquillajes.id}
              <strong>{maquillajes.nombre}</strong>
              (<em>{maquillajes.tipoMaquillaje}</em>)
              (<em>{maquillajes.precio}</em>)
              (<em>{maquillajes.marca}</em>)
              (<em>{maquillajes.imagen}</em>)
              </li>
            ))}
        </>
    )

}

