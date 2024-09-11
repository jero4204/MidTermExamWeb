

export const HomePage = () => {
    
    return(
        <>
        <div>
        <div className="w-screen h-1/2 flex items-start justify-center bg-blue-500">
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