export const PrincipalContent = () => {
  return (
    <div className="bg-[#17494c]">
      <main className="flex gap-20 justify-between max-w-4xl mx-auto text-white py-20 items-center">
        
        {/* Elemento de la izquierda*/}
        <div className="w-1/2">
          <h2 className="text-7xl font-bold leading-[1.4]">
            <span className="text-[#cc9fb6]">
              Champions
            </span>
            <br />
            <span className="text-[#fed6aa]">of </span> 
            <span className="text-[#00a655] border-b-4 border-white">costumer</span>
            <br />
            <span className="text-[#31aadb] border-b-4 border-white">service</span>
          </h2>
        </div>

        {/* Elemento de la derecha*/}
        <div className="w-1/2">
          <div>
            <p>
              contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto
              aleatorio. Tiene sus raices en una pieza clásica de la literatura del Latin, que data 
              del año 45 antes de Cristo.
            </p>
          </div>
          <div className="flex mt-5 gap-10">
            <button className="bg-[#e4f0d3] p-3 text-[#03363e] font-medium">Free trial</button>
            <button className="border-2 border-white px-3">View demo</button>
          </div>
        </div>
      </main>
    </div>
  )
}