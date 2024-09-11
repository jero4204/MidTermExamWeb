
import { Link } from "react-router-dom"
export const Menu = () => {
  return (
    <>
<nav className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-100 dark:bg-gray-700">

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