import { useState } from "react";

export default function ProductButtons() {
  const [counter, setCounter] = useState(1);
  const handleRest = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const handleSum = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="flex">
      <div className="flex justify-around p-2 h-16 w-40 border border-gray-900 rounded-md">
        <img
          src="/minus.svg"
          alt=""
          className="w-6 cursor-pointer"
          onClick={handleRest}
        />
        <p className="text-2xl flex items-center">{counter}</p>
        <img
          src="plus.svg"
          alt=""
          className="w-6 cursor-pointer"
          onClick={() => {
            setCounter(counter + 1);
          }}
        />
      </div>
      <button className="flex justify-around items-center h-16 ml-8 bg-gray-900 border hover:bg-gray-800 transition duration-500 ease-in-out rounded-lg p-6 text-white">
        <img src="/plus_white.svg" alt="" className="w-6" />
        <p className="ml-4 text-[20px]">Agregar al carrito</p>
      </button>
    </div>
  );
}
