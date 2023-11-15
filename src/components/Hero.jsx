import ProductTab from "./ProductTab";
import ProductName from "./ProductName";
import ProductSize from "./ProductSize";
import { useEffect, useState } from "react";
import "../App.css";
export default function Hero() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    /* Fetch del producto */
    const fetchData = async (props) => {
      try {
        const requestJson = await fetch("/Products/Products.json");
        const data = await requestJson.json();
        setProduct(data["TS451658"]);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  /*   Cambio de imagen al hacer hover */
  const changeImage = () => {
    setTimeout(() => {
      document.getElementById("myImage").src = "/red_shirt_back.png";
    }, 100);
  };
  const restoreImage = () => {
    setTimeout(() => {
      document.getElementById("myImage").src = "red_shirt_front.png";
    }, 100);
  };

  /* Loader para esperar el fetch del producto */
  if (!product) {
    return (
      <div className="absolute text-[100px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="loader ease-linear rounded-full border-t-4 border-gray-700 border-solid h-20 w-20"></div>
      </div>
    );
  }

  return (
    <section className="mainFont flex flex-col md:flex-row lg:h-screen">
      <div className="flex relative min-h-[500px] w-full lg:w-[55%]">
        <div className="flex-1 bg-red-700"></div>
        <img
          src="/red_shirt_front.png"
          alt="shirt_front"
          id="myImage"
          onMouseOver={changeImage}
          onMouseOut={restoreImage}
          className="absolute w-[450px] lg:w-[500px] max-w-full max-h-full top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%] transition duration-500 cursor-pointer"
        />
        {/* <p className="absolute z-[-10] font-bold text-gray-200 rotate-90 text-[120px] max-w-[60%] top-[35%] left-[45%]">
          AMRAP
        </p> */}
        <div className="flex-1 "></div>
      </div>
      <div className="mt-6 ml-2 lg:ml-0 md:mt-20 lg:mt-28">
        <ProductName
          name={product.name}
          price={product.price}
          previousPrice={product.previousPrice}
          sku={product.sku}
        />
        <ProductTab />
        <ProductSize
          s={product.s}
          m={product.m}
          l={product.l}
          xl={product.xl}
          xxl={product.xxl}
          xxxl={product.xxxl}
        />
      </div>
    </section>
  );
}
