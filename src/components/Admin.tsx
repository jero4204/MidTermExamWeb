import { DrogasAdm } from "./componentsAdmin/DrogasAdmin"

export const Admin = () => {
    return(
        <>
          <h1 className="text-5xl">Bienvenido Administrador</h1>
          <h1 className="text-3xl">Drogas</h1>
          <DrogasAdm/>
        </>
    )
}