

export const HomePage = () => {
    
  return(
    <>
      <div>
        <div className="carousel">
          <div className="carousel-inner">
            <img src="imagen1.jpg" alt="Imagen 1" className="carousel-image"/>
            <img src="imagen2.jpg" alt="Imagen 2" className="carousel-image"/>
            <img src="imagen3.jpg" alt="Imagen 3" className="carousel-image"/>
          </div>
          <button className="prev" id="prevBtn">&#9664;</button> 
          <button className="next" id="nextBtn">&#9654;</button> 
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_k8FJKDX--Ry_1HaadBYDy6qb1oHr2EA5g&s"
            alt="Descripción"
            className="  object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-500 p-4">Div 1</div>
          <div className="bg-red-500 p-4">Div 2</div>
          <div className="bg-pink-500 p-4">Div 3</div>
        </div>
      </div>
    </>
  )
}