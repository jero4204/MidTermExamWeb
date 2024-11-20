import { Link } from "react-router-dom"

export const Contact = () => {
    return(
        <>
          <div className="bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-100 p-4 flex space-x-4">
            <h1 className="text-sm text-gray-100 ">Contactanos en</h1>
            <ul className="text-sm text-gray-100 font-serif">
              <li className='relative pl-5 before:content-["•"] before:absolute before:left-0'>andrea@belleza.com</li>    
              <li className='relative pl-5 before:content-["•"] before:absolute before:left-0'> 3148324667</li>
              <Link to="/InicioSesion" className='relative pl-5 before:content-["•"] before:absolute before:left-0'>Suscripción a servicios especiales</Link>
            </ul>


        </div>
        
        </>
    )
}