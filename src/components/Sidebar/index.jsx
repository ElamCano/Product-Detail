import { useState } from "react";
import LinkCard from "./LinkCard";

export default function Sidebar({ toggle, theme }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((open) => !open);

  return (
    <div className="md:hidden">
      <button className="mt-4">
        <img
          src="/logo.svg"
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
        } bg-black bg-opacity-75 backdrop-blur-md min-h-screen w-full fixed top-0 left-0 right-0 `}
        onClick={handleClick}
      />
      {/* Aca comienza el sidebar cuando se aprieta la burger  */}
      <div
        className={`${
          open ? "w-3/4 max-w-[400px] mr-[80px]" : "w-0"
        } bg-[#f5f5f5] min-h-screen fixed top-0 right-[-80px] transition-all duration-500`}
      >
        <div className="flex justify-between border-b border-slate-800 items-center w-full py-4 px-2">
          <div className="w-[20%]">
            <img
              src="/logo.svg"
              alt="logo"
              onClick={handleClick}
              className="ml-1 w-8"
            />
          </div>
          <div className="flex w-full ml-6">
            <img src="/logo.svg" alt="" className="w-8" />
            <h1 className="mr-8 text-xl font-bold">RANDORI</h1>
          </div>
        </div>

        <div>
          <LinkCard
            title={"Inicio"}
            imagen={"/logo.svg"}
            alt={"avatar"}
            onClick={handleClick}
          />
          <LinkCard
            title={"Productos"}
            imagen={"/logo.svg"}
            alt={"proyectos"}
            onClick={handleClick}
          />
          <LinkCard
            title={"Servicios"}
            imagen={"/logo.svg"}
            alt={"mensaje"}
            onClick={handleClick}
          />
          <LinkCard
            title={"Horarios"}
            imagen={"/logo.svg"}
            alt={"mensaje"}
            onClick={handleClick}
          />
          <LinkCard
            title={"Carrito de compra"}
            imagen={"/logo.svg"}
            alt={"mensaje"}
            onClick={handleClick}
          />
          <LinkCard
            title={"Preguntas Frecuentes"}
            imagen={"/logo.svg"}
            alt={"mensaje"}
            onClick={handleClick}
          />
        </div>
        <div className="flex justify-evenly w-full items-center py-6 px-6">
          <img src="logo.svg" alt="" className="w-8" />
          <img src="logo.svg" alt="" className="w-8" />
          <img src="logo.svg" alt="" className="w-8" />
        </div>
      </div>
    </div>
  );
}
