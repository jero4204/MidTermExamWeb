import { Modelos } from "../models/modelos";
interface ModelosProps{
    modelo:Modelos;
}
export const componenteModelos = ({modelo}:ModelosProps) => {
    const {nombre,edad,añosExperiencia,estatura} = modelo;
    return (
        <div>
            <div>
                <div>
                    <h3>{nombre}</h3>
                </div>
                <div>
                    <h3>{edad}</h3>
                    <h3>{añosExperiencia}</h3>
                    <h3>{estatura}</h3>
                </div>
            </div>
        </div>
    )
}



