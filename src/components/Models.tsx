import { useState } from "react";
import { modelosData } from "../database/modelosdata";
import { Modelos } from "../models/modelos";

export const Models = () => {
    const [modelos, setModelos] = useState<Modelos[]>(modelosData);
    const [modelo, setModelo] = useState<Modelos>({
      id: modelos.length +1,
      nombre: '',
      edad: 0,
      añosExperiencia: 0,
      estatura: 0
      
    });
    const {nombre,edad,añosExperiencia,estatura} = modelo;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setModelo({
        ...modelo,
        [e.target.name]: e.target.value
      });
    }
    const addModelo = () => {
      setModelo({
        ...modelo,
        id: modelos.length +2
        
      });
      setModelos([...modelos, modelo]);
      /*setMovie({
        id: 0,
        title: '',
        director: '',
        year: 0
      });*/
    }
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
          <option value="Base">Categoría 1</option>
          <option value="Rubor">Categoría 2</option>
          <option value="Corrector">Categoría 3</option>
        </select>
      </div>

      {/* Lista de elementos filtrados */}
      <div className="grid grid-cols-1 gap-4">
        {modelos
          .filter((modelo) => filter === 'all' || modelo.nombre === filter) // Filtra los elementos según la categoría seleccionada
          .map((modelo) => (
            <div key={modelo.id} className="p-4 bg-white rounded shadow">
              {modelo.nombre} {/* Muestra el nombre del elemento */}
            </div>
          ))}
      </div>
    </div>
          <div>
            <h1 className='text-4xl font-serif text-pink-400'>los productos de mas alta calidad</h1>
            <div className="h-full w-1/4 bg-red-500"> </div>
          </div>
          
         <input type="text" 
      placeholder="ingrese el tipo" 
      // value={tipoMaquillaje}
       id="tipoMaquillaje"
       name="tipoMaquillaje"
       onChange={handleChange}/>
      <input type="number"
      placeholder="ingrese precio"
      // value={precio}
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
      // value={marca}
       id="marca"
       name="marca"
       onChange={handleChange}/>
      <button onClick={addModelo} className="button button-primary">Add</button> 
     
        </>
    )

}