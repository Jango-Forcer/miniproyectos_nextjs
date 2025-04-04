import Image from "next/image"
import ImageTour from '@/assets/images/Tour.png';

export const QuickTour = () => {
  return (
    <section className="bg-[#e4f0d3]">
      <div className="max-w-4xl mx-auto text-center py-10">
        <h3 className="text-[#03363e] text-4xl font-bold mb-5">
          Take a quick tour
        </h3>
        <p className="text-[#03363e] text-sm max-w-2xl mx-auto">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
        </p>
        <Image className="mx-auto my-16" src={ImageTour} alt="Tour" width={500} height={500} />
      </div>
    </section>
  )
}