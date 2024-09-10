
import { Link } from "react-router-dom"
export const Menu = () => {
  return (
    <>
        
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <Link to="/AboutMe" 
                    className="text-gray-900 dark:text-white hover:underline">AboutMe</Link>
                </li>
                <li>
                    <Link to="/Projects" className="text-gray-900 dark:text-white hover:underline">
                    Projects</Link>
                </li>
                <li>
                    <Link to="/Hobbies" className="text-gray-900 dark:text-white hover:underline">Hobbies</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </>
  )
}