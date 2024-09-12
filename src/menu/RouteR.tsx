import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import { HomePage } from "../components/homePage";
import { Makeup } from "../components/Makeup";
import { Models } from "../components/Models";
import { Fashion } from "../components/Fashion";
import { Admin } from "../components/Admin";
import { Photos } from "../components/Photos";
import { VIP } from "../components/VIP";
import { Ilegal } from "../components/Ilegal";
import { Menu } from "./Menu";
import { ErrorComponent } from "./ErrorComponent";
export const RouterR = () => {
  return (
    <Router>
        <Menu/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/HomePage" element={<HomePage/>}/>
            <Route path="/FashionEvents" element={<Fashion/>}/>
            <Route path="/AdminDashboard" element={<Admin/>}/>
            <Route path="/Makeup" element={<Makeup/>}/>
            <Route path="/Models" element={<Models/>}/>
            <Route path="/PhotosSales" element={<Photos/>}/>
            <Route path="/ExclusiveMembership" element={<VIP/>}/>
            <Route path="/Ilegal" element={<Ilegal/>}/>
            <Route path="*" element={<ErrorComponent/>}/>
           
        
        </Routes>
    </Router>
  )
}