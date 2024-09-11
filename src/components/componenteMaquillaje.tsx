import { maquillaje } from "../models/maquillaje";
interface MovieProps {
    maquillaje: maquillaje;
}
export const MovieComponent = ({maquillaje}:MovieProps) => {
    const {tipoMaquillaje,precio,nombre,marca} = maquillaje;
    return (
        <div className="col">
    <div className="card">
        <div className="card-header">
            <h3>{nombre}</h3>
        </div>
        <div className="card-body">
            <h3>Directed by {precio}</h3>
            <h3>Released in {marca}</h3>
            
        </div>
    </div>
    </div>
  )
}