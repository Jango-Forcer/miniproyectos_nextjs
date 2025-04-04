"use client"

import { SliderBar } from "@/components/passwords/sliderbar"
import { SwitchInput } from "@/components/passwords/SwitchInput"
import { useEffect, useState } from "react"

const PasswordsPage = () => {

  const [inputValue, setInputValue] = useState<string>("");
  const [longituPass, setLongitudPass] = useState<number>(10);

  // switchers
  const [mayusculas, setMayusculas] = useState<boolean>(true);
  const [minusculas, setMinusculas] = useState<boolean>(true);
  const [numeros, setNumeros] = useState<boolean>(true);
  const [simbolos, setSimbolos] = useState<boolean>(true);
  
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
   generatePassword()
  }, [longituPass, mayusculas, minusculas, simbolos, numeros]);

  const generatePassword = () => {
    let charactrers = "";

    if (mayusculas) {
      charactrers += "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";    
    }

    if (minusculas) {
      charactrers += "abcdefghijklmnñopqrstuvwxyz";
    }

    if (numeros) {
      charactrers += "0123456789";
    }

    if (simbolos) {
      charactrers += "!@#$%&*()";
    }

    let password = "";

    for (let index = 0; index < longituPass; index++) {
      password += charactrers.charAt(Math.floor(Math.random() * charactrers.length));
      
    }

    setInputValue(password);
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(inputValue);
    setShowMessage(true);
  }
  
  return (
    <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
      <div className="border border-gray-500 p-5 rounded bg-white">
        <h2>Passwords generate</h2>
        <hr />
        <div className="flex">
          <input type="text" value={inputValue} 
            onChange={e => setInputValue(e.target.value)} 
            placeholder="New Password" className="rounded p-2 my-2 border" />
          <button onClick={copyPassword} className="w-20 text-center flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400 hover:text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
          </button>
        </div>

        <SliderBar value={longituPass} changeValue={setLongitudPass} />
        <p>
          {longituPass}
        </p>

        <div className="flex justify-between pb-3">
          <SwitchInput title="Mayúsculas" value={mayusculas} changeValue={setMayusculas} />
          <SwitchInput title="Minúsculas" value={minusculas} changeValue={setMinusculas} />
        </div>

        <div className="flex justify-between pb-3">
          <SwitchInput title="Números" value={numeros} changeValue={setNumeros} />
          <SwitchInput title="Símbolos" value={simbolos} changeValue={setSimbolos} />
        </div>

        <button onClick={generatePassword} className="w-full bg-blue-500 text-white p-2 rounded">Generate</button>

      </div>

      <div className="absolute bottom-5 right-5">
          {
            showMessage && (
              <p className="flex gap-5 justify-between bg-green-500 text-white p-2 rounded w-full text-center mt-5 text-sm">
              <span>
                Contraseña Copiada
              </span> 
              <svg onClick={ () => setShowMessage(false) } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
  
            </p>
            )
          }
          
        </div>

    </div>
  )
}

export default PasswordsPage