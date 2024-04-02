import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <main>
      <h1>Ocurrió un error!!!</h1>
      <p>OOPS!!! esta página no existe</p>
      <Link to="/">
        <button className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-8 rounded-xl bg-gray-200 text-sm font-thin">
          Ir a Inicio
        </button>
      </Link>
    </main>
  );
};
