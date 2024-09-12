import { Drogas } from "../models/drogas";

interface ModelosProps{
    modelo:Drogas;
}
export const componenteModelos = ({modelo}:ModelosProps) => {
    const {nombre, precio, marca} = modelo;
    return (
        <div>
            <div>
                <div>
                    <h3>{nombre}</h3>
                </div>
                <div>
                    <h3>{precio}</h3>
                    <h3>{marca}</h3>
                </div>
            </div>
        </div>
    )
}