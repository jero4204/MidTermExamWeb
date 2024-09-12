import { DrogasAdm } from "./componentsAdmin/DrogasAdmin"
import { MakeupAdmin } from "./componentsAdmin/MakeupAdmin"
import { ModelsAdmin } from "./componentsAdmin/ModelsAdmin"
import { ProstitucionAdm } from "./componentsAdmin/ProstitucionAdmin"

export const Admin = () => {
    return(
        <>
          <h1 className="text-5xl">Bienvenido Administrador</h1>
          <h1 className="text-3xl">Drogas</h1>
          <DrogasAdm/>
          <h1 className="text-3xl">Prostitutas</h1>
          <ProstitucionAdm/>
          <h1 className="text-3xl">Modelos</h1>
          <ModelsAdmin/>
          <h1 className="text-3xl">Maquillajes</h1>
          <MakeupAdmin/>
        </>
    )
}