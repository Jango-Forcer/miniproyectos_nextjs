import Link from "next/link"

export const Menu = () => {
  return (
    <menu className="w-60 mx-auto text-center pt-10 ">
        <ul>
          <li>
            <Link href="/ssr-landing" className="mb-5 p-3 block w-full bg-slate-300 hover:bg-slate-500 rounded-2xl ring-3 ring-gray-500 shadow-md shadow-black">
              Landing Page
            </Link> 
          </li>
          <li>
            <Link href="/csr-passwords" className="mb-5 p-3 block w-full bg-slate-300 hover:bg-slate-500 rounded-2xl ring-3 ring-gray-500 shadow-md shadow-black">
              Generador de Contraseñas
            </Link> 
          </li>
          <li>
            <Link href="/dr-dynamic" className="mb-5 p-3 block w-full bg-slate-300 hover:bg-slate-500 rounded-2xl ring-3 ring-gray-500 shadow-md shadow-black">
              Dragon Ball API
            </Link> 
          </li>
        </ul>
      </menu>
  )
}