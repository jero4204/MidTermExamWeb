
export const HomePage = () => {
    
  return(
    <>
      <div>
        <div className="carousel">
          <div className="carousel-inner">
            <img src="Homepage1.jpeg" alt="Imagen 1" className="carousel-image"/>
            <img src="Homepage2.jpeg" alt="Imagen 2" className="carousel-image"/>
            <img src="Homepage3.jpg" alt="Imagen 3" className="carousel-image"/>
          </div>
          <button className="prev" id="prevBtn">&#9664;</button> 
          <button className="next" id="nextBtn">&#9654;</button>
        </div>
        <script src="carousel.ts"></script>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-500 p-4">Div 1</div>
          <div className="bg-red-500 p-4">Div 2</div>
          <div className="bg-pink-500 p-4">Div 3</div>
        </div>
      </div>
    </>
  )
}