import { useState } from "react";
import LinkCard from "./LinkCard";

export default function Sidebar({ toggle, theme }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((open) => !open);

  return (
    <div className="md:hidden">
      <button className="mt-4">
        <img
          src="/burger.svg"
          alt="logo"
          width={30}
          onClick={handleClick}
          className=""
        />
      </button>
      {/* Esto es el fondo gris en blur */}
      <div
        className={`${
          !open && "hidden"
        }  bg-black bg-opacity-75 backdrop-blur-md min-h-screen w-full fixed top-0 left-0 right-0 `}
        onClick={handleClick}
      />
      {/* Aca comienza el sidebar cuando se aprieta la burger  */}
      <div
        className={`${
          open ? "z-30 w-3/4 max-w-[400px] mr-[80px]" : "w-0"
        } bg-[#f5f5f5] min-h-screen fixed top-0 right-[-80px] transition-all duration-500`}
      >
        <div className="border-b border-gray-300 w-full py-2 px-2">
          <img
            src="/cross.svg"
            alt="logo"
            onClick={handleClick}
            className="ml-1 w-12"
          />
        </div>
        <div className="flex justify-center ">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <h1 className="flex items-center text-xl font-bold">RANDORI</h1>
        </div>

        <div className="mt-4">
          <LinkCard title={"Inicio"} onClick={handleClick} />
          <LinkCard title={"Productos"} onClick={handleClick} />
          <LinkCard title={"Servicios"} onClick={handleClick} />
          <LinkCard title={"Horarios"} onClick={handleClick} />
          <LinkCard title={"Carrito de compra"} onClick={handleClick} />
          <LinkCard title={"Preguntas Frecuentes"} onClick={handleClick} />
        </div>
        <div className="flex justify-evenly w-full items-center py-6 px-6">
          <img src="whatsapp.svg" alt="" className="w-10" />
          <img src="instagram.svg" alt="" className="w-10" />
          <img src="location.svg" alt="" className="w-[44px]" />
        </div>
      </div>
    </div>
  );
}
