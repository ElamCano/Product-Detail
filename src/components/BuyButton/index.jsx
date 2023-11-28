import { useState } from "react";

export default function BuyButton() {
  const [buyed, setBuyed] = useState(false);
  const handleClick = () => {
    setBuyed(true);
    setTimeout(() => {
      setBuyed(false);
    }, 2000);
  };
  return (
    <div className="mt-2 w-full flex flex-col items-center">
      <button
        onClick={handleClick}
        className="bg-red-300 hover:bg-[#f5f5f5] hover:border-red-300 flex hover:text-red-300 justify-center items-center p-2 h-8 w-full min-w-[180px]  max-w-[230px] lg:h-10 lg:w-[250px] border transition duration-500 ease-in-out rounded-md text-white"
      >
        Comprar
      </button>
      {buyed && <p className="text-gray-700">Gracias por su compra!</p>}
    </div>
  );
}
