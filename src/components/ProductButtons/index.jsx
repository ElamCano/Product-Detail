import { useEffect, useState } from "react";

export default function ProductButtons({ max, resetCounter }) {
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    if (max === "0") {
      setCounter(0);
    } else setCounter(1);
  }, [resetCounter]);

  const handleRest = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const handleSum = () => {
    if (counter < max) setCounter(counter + 1);
  };
  return (
    <div className="flex mt-6 lg:mt-4 md:ml-4">
      <div className="flex justify-around p-2 h-8 w-28 lg:h-10 lg:w-40 ml-2 lg:ml-4 border border-gray-900 rounded-md">
        <img
          src="/minus.svg"
          alt="minus"
          className="w-3 cursor-pointer"
          onClick={handleRest}
        />
        <p className="text-sm flex items-center font-semibold">{counter}</p>
        <img
          src="plus.svg"
          alt="plus"
          className="w-3 cursor-pointer"
          onClick={handleSum}
        />
      </div>
      <button
        className={`${
          counter
            ? "bg-gray-900 hover:bg-gray-700"
            : "bg-gray-500 cursor-no-drop"
        } flex justify-center items-center p-2 h-8 w-full  max-w-[230px] lg:h-10 lg:w-[250px] ml-3 border transition duration-500 ease-in-out rounded-md text-white`}
      >
        {counter ? (
          <div className="flex">
            <img src="/plus_white.svg" alt="" className="w-3" />
            <p className="ml-2 text-[10px]">AGREGAR AL CARRITO</p>
          </div>
        ) : (
          <p className="ml-2 text-[10px]">SIN STOCK</p>
        )}
      </button>
    </div>
  );
}
