import { Maquillaje } from "../models/maquillajes";
interface MovieProps {
    maquillaje: Maquillaje;
}
export const MaquillajesComponents = ({maquillaje}:MovieProps) => {
    const {precio,nombre,marca} = maquillaje;
    return (
        <div className="col">
    <div className="card">
        <div className="card-header">
            <h3>{nombre}</h3>
        </div>
        <div className="card-body">
            <h3>{precio}</h3>
            <h3>{marca}</h3>
            
        </div>
    </div>
    </div>
  )
}