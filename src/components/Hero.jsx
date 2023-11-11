import ProductButtons from "./ProductButtons";
import ProductTab from "./ProductTab";
import ProductName from "./ProductName";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="flex relative h-[70%] md:h-screen w-full md:w-[50%]">
        <div className="flex-1 bg-red-700"></div>
        <img
          src="/red_shirt_front.png"
          alt=""
          className="absolute z-10 w-[450px] lg:w-[450px] max-w-full max-h-full top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%]"
        />
        <p className="absolute font-bold text-gray-200 rotate-90 text-[120px] max-w-[60%] top-[35%] left-[45%]">
          AMRAP
        </p>
        <div className="flex-1 bg-red-100"></div>
      </div>
      <div className="md:mt-36">
        <ProductName
          name={"Remera Randori"}
          price={"10.000"}
          previousPrice={"12.000"}
          sku={"TS-451658"}
        />
        <ProductTab />
        <ProductButtons />
      </div>
    </section>
  );
}
