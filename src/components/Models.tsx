import { useState } from "react";
import { modelosData } from "../database/modelosdata";
import { Modelos } from "../models/modelos";

export const Models = () => {
    const [modelos, setModelos] = useState<Modelos[]>(modelosData);
   
    const [filter, setFilter] = useState('all');
    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
      };

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
        </select>
      </div>

      {/* Lista de elementos filtrados */}
      <div className="grid grid-cols-1 gap-4">
        {modelos
          .filter((modelo) => filter === 'all' || modelo.nombre === filter) // Filtra los elementos según la categoría seleccionada
          .map((modelo) => (
            <div key={modelo.id} className="p-4 bg-white rounded shadow grid justify-items-stretch text-3xl">
              {modelo.nombre} edad: {modelo.edad} {/* Muestra el nombre del elemento */}
              <img src={modelo.imagen} className="size-40 justify-self-end"/>
            </div>
          ))}
      </div>
    </div>
         
        </>
    )

}