import { useState } from "react";
import { Link } from "react-router-dom"
import { maquillajesData } from "../database/maquillajesdata";
import { Maquillaje } from "../models/maquillajes";
import { modelosData } from "../database/modelosdata";
import { Modelos } from "../models/modelos";
import { getRandomInt } from "../logic/randoms";
import { eventosData } from "../database/eventosdata";
import { Evento } from "../models/eventos";

export const HomePage = () => {
  let randomMaquillaje = getRandomInt(0,8)
  let randomModelos = getRandomInt(0,5)
  let randomEventos = getRandomInt(0,3)
  const [maquillajes, setMaquillajes] = useState<Maquillaje[]>(maquillajesData);
  const [modelos, setModelos] = useState<Modelos[]>(modelosData);
  const [eventos, setEventos] = useState<Evento[]>(eventosData);
  return(
    <>
      <div className="bg-fuchsia-100">
        <div className="carousel">
          <div className="carousel-inner">
            <img src="HomePage1.webp" alt="Imagen 1" className="carousel-image"/>
            <img src="Homepage2.jpeg" alt="Imagen 2" className="carousel-image"/>
            <img src="Homepage3.jpg" alt="Imagen 3" className="carousel-image"/>
          </div>
          <button className="prev" id="prevBtn">&#9664;</button> 
          <button className="next" id="nextBtn">&#9654;</button>
        </div>
        <script src="carousel.ts"></script>
        <div className="grid grid-cols-3 gap-4 mx-4 my-4">
          <div className="bg-violet-200 p-4 rounded-md grid space-y-4">
            <Link to="/Makeup" className="self-start justify-self-center text-2xl text-gray-900 dark:text-white">Maquillaje</Link>
            <img src={maquillajes[randomMaquillaje].imagen} className="size-80 justify-self-center" title="Maquillaje"/>
            <h4 className="justify-self-center">{maquillajes[randomMaquillaje].nombre}</h4>
          </div>
          <div className="bg-violet-200 p-4 rounded-md grid space-y-4">
            <Link to="/Models" className="self-start justify-self-center text-2xl text-gray-900 dark:text-white">Modelos</Link>
            <img src={modelos[randomModelos].imagen} className="size-80 justify-self-center" title="Modelos"/>
            <h4 className="justify-self-center">{modelos[randomModelos].nombre}</h4>
          </div>
          <div className="bg-violet-200 p-4 rounded-md grid">
            <Link to="/FashionEvents" className="self-start justify-self-center text-2xl text-gray-900 dark:text-white">Eventos</Link>
            <h1 className="justify-self-center text-xl">{eventos[randomEventos].nombre}</h1>
            <h3 className="justify-self-center text-m">{eventos[randomEventos].lugar}</h3>
            <h3 className="justify-self-center text-m">{eventos[randomEventos].fecha}</h3>
          </div>
        </div>
        <div className="bg-purple-100 pt-8 px-8">
          <h1 className="text-2xl">¿Quienes Somos?</h1>
          <div className="w-full grid grid-cols-2">
            <p className="w-3/5 self-center justify-self-center">Bienvenidos a el destino definitivo para todos tus deseos de belleza. Nos especializamos en ofrecer una experiencia de 
              lujo que abarca desde las últimas tendencias en maquillaje hasta asesoramiento personalizado para modelos y profesionales 
              del estilo. Nuestro compromiso es resaltar tu belleza interior y exterior con productos y servicios exclusivos de primera 
              categoría.
            </p>
            <img src="ImagenDescripcion.png" title="ImagenDescripción" className="self-center justify-self-center"></img>
          </div>
          <div className="w-full h-4"></div>
        </div>
      </div>
    </>
  )
}