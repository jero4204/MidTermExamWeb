import { useState } from "react";
import { Prostituta } from "../../models/prostituta";
import { prostitutasData } from "../../database/prostitutasdata";

export const ProstitucionAdm = () => {
  const [prostitutas, setProstitutas] = useState<Prostituta[]>(prostitutasData);
  const [prostituta, setProstituta] = useState<Prostituta>({
    id: prostitutas.length +1,
    nombre: '',
    edad: 0,
    añosExperiencia: 0,
    estatura: 0,
    imagen: '',    
  });
  const {nombre, edad, añosExperiencia, estatura, imagen} = prostituta;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProstituta({
      ...prostituta,
      [e.target.name]: e.target.value
    });
  }
  const addProstituta = () => {
    setProstituta({
      ...prostituta,
      id: prostitutas.length +2      
    });
    setProstitutas([...prostitutas, prostituta]);
  }

  return(
    <>
      {/* Lista de elementos filtrados */}
      <div className="grid grid-cols-1 gap-4">
        {prostitutas
          .map((prosti) => (
            <div key={prosti.id} className="p-4 bg-white rounded shadow grid justify-items-stretch text-3xl">
              {prosti.nombre} Edad: {prosti.edad} {/* Muestra el nombre del elemento */}
              <img src={prosti.imagen} className="size-40 justify-self-end"/>
            </div>
          ))}
      </div>
          <div>
            <h1 className='text-4xl font-serif text-pink-400'>Agregar Prostitutas</h1>
            <div className="h-full w-1/4 bg-red-500"> </div>
          </div>
      <input type="text" 
        placeholder="ingrese el nombre" 
        value={nombre}
        id="nombre"
        name="nombre"
        onChange={handleChange}/>
      <input type="number"
        placeholder="ingrese la edad"
        value={edad}
        id="edad"
        name="edad"
        onChange={handleChange}/>
      <input type="number"
        placeholder="ingrese los años de experencia"
        value={añosExperiencia}
        id="añosExperencia"
        name="añosExperencia"
        onChange={handleChange}/>
      <input type="number"
        placeholder="ingrese la estatura"
        value={estatura}
        id="estatura"
        name="estatura"
        onChange={handleChange}/>
      <input type="text" 
        name="imagen"
        id="imagen"
        placeholder="ingrese la url de la imagen"  
        value={imagen}
        onChange={handleChange}
        className="input"/> 
      <button onClick={addProstituta} className="button button-primary">Add</button>
    </>
  )
}