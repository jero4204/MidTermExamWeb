import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import { HomePage } from "../components/homePage";
import { Makeup } from "../components/Makeup";
import { Models } from "../components/Models";
import { Fashion } from "../components/Fashion";
import { Admin } from "../components/admin";
import { Photos } from "../components/Photos";
import { VIP } from "../components/VIP";
import { Menu } from "./Menu";
import { ErrorComponent } from "./ErrorComponent";
export const RouterR = () => {
  return (
    <Router>
        <Menu/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Home page" element={<HomePage/>}/>
            <Route path="/Fashion events" element={<Fashion/>}/>
            <Route path="/Admin dashboard" element={<Admin/>}/>
            <Route path="/Makeup" element={<Makeup/>}/>
            <Route path="/Models" element={<Models/>}/>
            <Route path="/Photos sales" element={<Photos/>}/>
            <Route path="/Exclusive membership" element={<VIP/>}/>
            <Route path="*" element={<ErrorComponent/>}/>
           
        
        </Routes>
    </Router>
  )
}