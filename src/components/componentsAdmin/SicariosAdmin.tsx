import { useState } from "react";
import { Sicario } from "../../models/sicarios";
import { sicariosData } from "../../database/sicariosdata";

export const SicariosAdm = () => {
  const [sicarios, setSicarios] = useState<Sicario[]>(sicariosData);
  const [sicario, setSicario] = useState<Sicario>({
    id: sicarios.length +1,
    nombreClave: '',
    trabajosRealizados: 0,
    tarifaMinima: 0,   
  });
  const {nombreClave, trabajosRealizados, tarifaMinima} = sicario;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSicario({
      ...sicario,
      [e.target.name]: e.target.value
    });
  }
  const addProstituta = () => {
    setSicario({
      ...sicario,
      id: sicarios.length +2      
    });
    setSicarios([...sicarios, sicario]);
  }

  return(
    <>
      <div className="grid grid-cols-1 gap-4">
        {sicarios.map((sica) => (
            <div key={sica.id} className="p-4 bg-white rounded shadow grid justify-items-stretch text-3xl">
              {sica.nombreClave} Trabajos Realizados: {sica.trabajosRealizados} Tarifa Minima: {sica.tarifaMinima} 
            </div>
          ))}
      </div>
          <div>
            <h1 className='text-4xl font-serif text-pink-400'>Agregar Sicarios</h1>
            <div className="h-full w-1/4 bg-red-500"> </div>
          </div>
      <input type="text" 
        placeholder="ingrese el nombre en clave" 
        value={nombreClave}
        id="nombreClave"
        name="nombreClave"
        onChange={handleChange}/>
      <input type="number"
        placeholder="ingrese los trabajos realizados"
        value={trabajosRealizados}
        id="trabajosRealizado"
        name="trabajosRealizados"
        onChange={handleChange}/>
      <input type="number"
        placeholder="ingrese la tarifa minima"
        value={tarifaMinima}
        id="tarifaMinima"
        name="tarifaMinima"
        onChange={handleChange}/>
      <button onClick={addProstituta} className="button button-primary">Add</button>
    </>
  )
}