import { useState } from "react";
import { Link } from "react-router-dom"
import { maquillajesData } from "../database/maquillajesdata";
import { Maquillaje } from "../models/maquillajes";
import { modelosData } from "../database/modelosdata";
import { Modelos } from "../models/modelos";
import { getRandomInt } from "../logic/randoms";

export const HomePage = () => {
  let randomMaquillaje = getRandomInt(0,8)
  let randomModelos = getRandomInt(0,5)
  const [maquillajes, setMaquillajes] = useState<Maquillaje[]>(maquillajesData);
  const [modelos, setModelos] = useState<Modelos[]>(modelosData);
  return(
    <>
      <div className="bg-fuchsia-50">
        <div className="carousel">
          <div className="carousel-inner">
            <img src="Homepage1.jpeg" alt="Imagen 1" className="carousel-image"/>
            <img src="Homepage2.jpeg" alt="Imagen 2" className="carousel-image"/>
            <img src="Homepage3.jpg" alt="Imagen 3" className="carousel-image"/>
          </div>
          <button className="prev" id="prevBtn">&#9664;</button> 
          <button className="next" id="nextBtn">&#9654;</button>
        </div>
        <script src="carousel.ts"></script>
        <div className="grid grid-cols-3 gap-4 mx-4 my-4">
          <div className="bg-violet-300 p-4 rounded-md grid space-y-4">
            <Link to="/Makeup" className="self-start justify-self-center text-2xl text-gray-900 dark:text-white">Maquillaje</Link>
            <img src={maquillajes[randomMaquillaje].imagen} className="size-80 justify-self-center"/>
            <h4 className="justify-self-center">{maquillajes[randomMaquillaje].nombre}</h4>
          </div>
          <div className="bg-violet-300 p-4 rounded-md grid space-y-4">
            <Link to="/Models" className="self-start justify-self-center text-2xl text-gray-900 dark:text-white">Modelos</Link>
            <img src={modelos[randomModelos].imagen} className="size-80 justify-self-center"/>
            <h4 className="justify-self-center">{modelos[randomModelos].nombre}</h4>
          </div>
          <div className="bg-violet-300 p-4 rounded-md grid">
            <Link to="/FashionEvents" className="self-start justify-self-center text-2xl text-gray-900 dark:text-white">Eventos</Link>
          </div>
        </div>
      </div>
    </>
  )
}