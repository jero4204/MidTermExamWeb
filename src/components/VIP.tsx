export const VIP = () => {
    return(
        <>
        <div className=" bg-fuchsia-100">
          <div className= " bg-fuchsia-100 flex space-x-4 items-center" >
          <h1 className="text-5xl text-violet-600">accede a nuestro contenido mas exclusivo
            <h2 className="text-xl text-violet-500">tendras acceso a nuestra pagina VIP donde encontraras productos exclusivos ademas de nuestros servicios especiales
             </h2>
            </h1>
            <div className="size-4/5 overflow-hidden ">
            <img
        src="CareCortada.jpeg"
        alt="Descripción"
        className= " "/>
            </div>
          </div>
          <br></br>
          <div className="bg-fuchsia-100 w-1/2">
            <h1 className="text-3xl ">Nuestros planes</h1>
          </div>
   <div className="grid grid-cols-3 gap-4 font-mono"> 

   <div className="bg-red-200 text-black p-6 rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      {/* Icon and Header */}
      <div className="flex items-center mb-4">
        <span className="text-lg mr-2">🌐</span>
        <span className="text-sm font-semibold">Membresia</span>
      </div>

      {/* Title and Price */}
      <h2 className="text-3xl sm:text-4xl text-violet-600 font-semibold mb-2">Tier 1</h2>
      <p className="text-lg sm:text-xl text-violet-600 mb-6">21.000 COP al mes</p>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Features */}
      <ul className="space-y-2 mb-6 text-sm sm:text-base">
        <li>acceso a fotos exclusivas de nuestras modelos</li>
        <li>pertenece a nuestra gran familia</li>
        <li>acceso a servicios de full-makeup</li>
        <li>Suscríbete o haz un solo pago</li>
      </ul>
    </div>

    <div className="bg-red-200 text-black p-6 rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      {/* Icon and Header */}
      <div className="flex items-center mb-4">
        {/* Icono de Spotify */}
        <span className="text-lg mr-2">🌐</span>
        <span className="text-sm font-semibold">Membresia</span>
      </div>

      {/* Title and Price */}
      <h2 className="text-3xl sm:text-4xl text-violet-600 font-semibold mb-2">Tier 2</h2>
      <p className="text-lg sm:text-xl text-violet-600 mb-6">35.400 COP al mes</p>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Features */}
      <ul className="space-y-2 mb-6 text-sm sm:text-base">
        <li>pasarela exclusivas solo para miembros</li>
        <li>acceso a nuestra marca MariaUp </li>
        <li>incluye los beneficios del tier 1</li>
        <li>Suscríbete o haz un solo pago</li>
      </ul>
    </div>

    <div className="bg-red-200 text-black p-6 rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      {/* Icon and Header */}
      <div className="flex items-center mb-4">
        {/* Icono de Spotify */}
        <span className="text-lg mr-2">🌐</span>
        <span className="text-sm font-semibold">Membresia</span>
      </div>

      {/* Title and Price */}
      <h2 className="text-3xl sm:text-4xl text-violet-600 font-semibold mb-2">Tier 3</h2>
      <p className="text-lg sm:text-xl text-violet-600 mb-6">54.321 COP al mes</p>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Features */}
      <ul className="space-y-2 mb-6 text-sm sm:text-base">
        <li>Descuento en compras mayores a 70.000</li>
        <li>Solicita pasarelas personales</li>
        <li>Todos los beneficios del tier 2</li>
        <li>Suscríbete o haz un solo pago</li>
      </ul>
    </div>
   </div>
   </div>
        </>
    )
}