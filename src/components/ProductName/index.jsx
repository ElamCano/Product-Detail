export default function ProductName({ name, price, previousPrice, sku }) {
  return (
    <div>
      <h1 className="font-bold text-5xl">{name}</h1>
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
        <p className="flex items-center ml-10 text-gray-500">{sku}</p>
      </div>
    </div>
  );
}
