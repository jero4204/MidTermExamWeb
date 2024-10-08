import { useState } from "react";
import { maquillajesData } from "../../database/maquillajesdata";
import { Maquillaje } from "../../models/maquillajes";

//import 'bootstrap/dist/css/bootstrap.min.css';
export const MakeupAdmin = () => {
    const [maquillajes, setMaquillajes] = useState<Maquillaje[]>(maquillajesData);
    const [maquillaje, setMaquillaje] = useState<Maquillaje>({
      id: maquillajes.length +1,
     tipoMaquillaje: '',
      precio: 0,
      nombre: '',
      marca: '',
      imagen: ''
    });
    const {tipoMaquillaje,precio,nombre,marca,imagen} = maquillaje;
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
    <div>
      <h1 className='text-4xl font-serif text-pink-400'>Agregar Maquillaje</h1>
      <div className="h-full w-1/4 bg-red-500"> </div>
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
      <input type="text" 
        name="imagen"
        id="imagen"
        placeholder="ingrese la url de la imagen"  
        value={imagen}
        onChange={handleChange}
        className="input"/> 
      <button onClick={addMaquillaje} className="button button-primary">Add</button>
     
        </>
    )

}

