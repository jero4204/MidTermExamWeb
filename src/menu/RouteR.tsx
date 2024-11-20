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
import { LoginForm } from "../components/InicioSesion";
import { Tier1 } from "../components/Tier1";
import { Tier2 } from "../components/Tier2";
import { Tier3 } from "../components/Tier3";
import { Contact } from "../components/Contact";
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
            <Route path="/InicioSesion" element={<LoginForm/>}/>
            <Route path="/Tier1" element={<Tier1/>}/>
            <Route path="/Tier2" element={<Tier2/>}/>
            <Route path="/Tier3" element={<Tier3/>}/>
            <Route path="/Ilegal" element={<Ilegal/>}/>
            <Route path="*" element={<ErrorComponent/>}/>
           
        
        </Routes>
        <Contact/>
    </Router>
  )
}