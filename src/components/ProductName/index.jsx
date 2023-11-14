export default function ProductName({ name, price, previousPrice, sku }) {
  return (
    <div>
      <div className="flex w-72 ml-0.5 justify-between text-gray-700 text-[11px] ">
        <button className="hoverLinks">Inicio</button>
        <p>.</p>
        <button className="hoverLinks">Hombre</button>
        <p>.</p>
        <button className="hoverLinks">Remeras</button>
        <p>.</p>
        <button className="hoverLinks uppercase text-gray-600 font-semibold">
          {name}
        </button>
      </div>
      <h1 className="font-bold text-4xl lg:text-5xl lg:mt-2">{name}</h1>
      <div className="flex text-lg lg:text-2xl ml-2 lg:ml-0 mt-6">
        <p className="text-2xl lg:text-4xl font-bold">${price}</p>
        <p
          className={`${
            previousPrice
              ? "font-semibold ml-4 flex items-center line-through text-gray-500"
              : "hidden"
          } `}
        >
          ${previousPrice}
        </p>
        <p className="flex items-center ml-10 text-gray-500 text-[13px] md:text-[15px]">
          {sku}
        </p>
      </div>
    </div>
  );
}
