import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <main>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Parece que no has encontrado la página que buscas.
                </h1>
                <p className="my-2 text-gray-800">
                  "¡Lo siento por eso! Por favor, visita nuestra página de
                  inicio para llegar a donde necesitas ir."
                </p>
                <Link to="/">
                  <button className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-8 rounded-xl bg-blue-200 text-sm font-thin">
                    Ir a Inicio
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </main>
  );
};
