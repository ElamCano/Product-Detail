import { useState } from "react";
import ProductButtons from "../ProductButtons";

export default function ProductSize({ s, m, l, xl, xxl, xxxl }) {
  const [active, setActive] = useState(null);
  const [disponible, setDisponible] = useState(1);
  const [counter, setCounter] = useState(false);
  //obtenerProducto();

  const handleClick = (value) => {
    if (value === "0") {
      setActive("Agotado");
      setDisponible(value);
      setCounter(!counter);
    } else if (value < 10) {
      const message = `Últimos ${value} disponibles!`;
      setActive(message);
      setDisponible(value);
      setCounter(!counter);
    } else {
      setActive(`${value} Disponibles`);
      setDisponible(value);
      setCounter(!counter);
    }
  };
  return (
    <div>
      <div className="flex w-full mt-10">
        <div className="flex justify-around w-[300px] ">
          <p>Talle</p>
          <button
            className="text-[11px] border border-black w-6 h-6 rounded-sm text-gray-600 hover:text-gray-400 active:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
            onClick={() => handleClick(s)}
          >
            S
          </button>
          <button
            className="text-[11px] border border-black w-6 h-6 rounded-sm text-gray-600 hover:text-gray-400 active:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
            onClick={() => handleClick(m)}
          >
            M
          </button>
          <button
            className="text-[11px] border border-black w-6 h-6 rounded-sm text-gray-600 hover:text-gray-400 active:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
            onClick={() => handleClick(l)}
          >
            L
          </button>
          <button
            className="text-[11px] border border-black w-6 h-6 rounded-sm text-gray-600 hover:text-gray-400 active:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
            onClick={() => handleClick(xl)}
          >
            XL
          </button>
          <button
            className="text-[11px] border border-black w-8 h-6 rounded-sm text-gray-600 hover:text-gray-400 active:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
            onClick={() => handleClick(xxl)}
          >
            XXL
          </button>
          <button
            className="text-[11px] border border-black w-10 h-6 rounded-sm text-gray-600 hover:text-gray-400 active:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
            onClick={() => handleClick(xxxl)}
          >
            XXXL
          </button>
        </div>
        {active && <p>{active}</p>}
      </div>
      <ProductButtons max={disponible} resetCounter={counter} />
    </div>
  );
}
