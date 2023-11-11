export default function ProductName({ name, price, previousPrice, sku }) {
  return (
    <div>
      <div className="flex w-72 ml-0.5 justify-between text-gray-500 text-[11px] ">
        <button>Inicio</button>
        <p>.</p>
        <button>Hombre</button>
        <p>.</p>
        <button>Remeras</button>
        <p>.</p>
        <button className="uppercase text-gray-700">{name}</button>
      </div>
      <h1 className="font-bold text-5xl md:mt-2">{name}</h1>
      <div className="flex text-2xl mt-6">
        <p className="text-4xl font-bold">${price}</p>
        <p
          className={`${
            previousPrice
              ? "font-semibold ml-4 flex items-center line-through text-gray-500"
              : "hidden"
          } `}
        >
          ${previousPrice}
        </p>
        <p className="flex items-center ml-10 text-gray-500 md:text-[15px]">
          {sku}
        </p>
      </div>
    </div>
  );
}
