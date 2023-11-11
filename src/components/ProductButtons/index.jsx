import { useEffect, useState } from "react";

export default function ProductButtons({ max, resetCounter }) {
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    console.log(max);
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
    <div className="flex mt-6 ">
      <div className="flex justify-around p-2 h-10 w-40 ml-4 border border-gray-900 rounded-md">
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
          onClick={handleSum}
        />
      </div>
      <button className="flex justify-center items-center p-2 h-10 ml-4 md:w-[250px] bg-gray-900 border hover:bg-gray-800 transition duration-500 ease-in-out rounded-md text-white">
        <img src="/plus_white.svg" alt="" className="w-6" />
        <p className="ml-2 text-[20px]">Agregar al carrito</p>
      </button>
    </div>
  );
}
