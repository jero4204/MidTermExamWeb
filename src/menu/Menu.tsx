
import { Link } from "react-router-dom"
export const Menu = () => {
  return (
    <>
<nav className="bg-gray-50 dark:bg-gray-700">

    <div className="max-w-screen-xl px-4 py-3 ">
        
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <img
        src="/Logo.webp"
        alt="Descripción"
        className="w-16 h-16 rounded-full object-cover flex items-end justify-end"
      />
                <li>
                    <Link to="/HomePage" 
                    className="text-gray-900 dark:text-white hover:underline">Home</Link>
                </li>
                <li>
                    <Link to="/Makeup" className="text-gray-900 dark:text-white hover:underline">
                    Productos</Link>
                </li>
                <li>
                    <Link to="/FashionEvents" className="text-gray-900 dark:text-white hover:underline">Eventos</Link>
                </li>
                <li>
                    <Link to="/Models" className="text-gray-900 dark:text-white hover:underline">Modelos</Link>
                </li>
                <li>
                    <Link to="/AdminDashboard" className="text-gray-900 dark:text-white hover:underline">login admins</Link>
                </li>
                <li>
                    <Link to="/PhotosSales" className="text-gray-900 dark:text-white hover:underline">fotos</Link>
                </li>
                <li>
                    <Link to="/ExclusiveMembership" className="text-gray-900 dark:text-white hover:underline">suscripcion</Link>
                </li>

                
            </ul>
            
        </div>
        
    </div>
</nav>
    </>
  )
}