import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import "./../App.css";
export default function Header() {
  return (
    <header className="mainFont flex w-full fixed top-0 backdrop-blur-[2px] z-10 justify-center items-center px-4 lg:px-12 h-20 lg:h-24">
      <div className="flex items-center">
        <img src="/logo_white.svg" alt="" className="w-10 md:ml-0" />
        <h1 className="text-2xl font-bold text-[#f5f5f5]">RANDORI</h1>
      </div>

      <nav className="flex justify-end w-full max-x-[1440px]">
        <div className="md:flex md:justify-between md:w-3/5 hidden text-xl 2xl:text-base font-semibold">
          <motion.a
            href="/"
            initial={{
              opacity: 0,
              translateX: "100%",
              marginRight: 0,
            }}
            whileInView={{ opacity: 1, translateX: 0, marginRight: 0 }}
            transition={{ duration: 0.3 }}
            className="hoverLinks cursor-pointer"
          >
            Inicio
          </motion.a>
          <motion.a
            href="/"
            initial={{
              opacity: 0,
              translateX: "100%",
              marginRight: 0,
            }}
            whileInView={{ opacity: 1, translateX: 0, marginRight: 0 }}
            transition={{ duration: 0.7, ease: "anticipate" }}
            className="hoverLinks cursor-pointer"
          >
            Productos
          </motion.a>
          <motion.a
            href="/"
            initial={{
              opacity: 0,
              translateX: "100%",
              marginRight: 0,
            }}
            whileInView={{ opacity: 1, translateX: 0, marginRight: 0 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className="hoverLinks cursor-pointer"
          >
            Servicios
          </motion.a>
          <motion.a
            href="/"
            initial={{
              opacity: 0,
              translateX: "100%",
              marginRight: 0,
            }}
            whileInView={{ opacity: 1, translateX: 0, marginRight: 0 }}
            transition={{ duration: 0.9, ease: "anticipate" }}
            className="hoverLinks cursor-pointer"
          >
            Contacto
          </motion.a>
          <motion.a
            href="/"
            initial={{
              opacity: 0,
              translateX: "100%",
              marginRight: 0,
            }}
            whileInView={{ opacity: 1, translateX: 0, marginRight: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
            className="hoverLinks cursor-pointer"
          >
            <img src="/cart.svg" alt="cart" className="w-6" />
          </motion.a>
        </div>
        {/* Esto es en pantallas chicas */}
        <Sidebar />
      </nav>
    </header>
  );
}
