import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import BotonPrincipal from "../widgets/BotonPrincipal";
import { Link } from "react-router-dom";

export const RecoveryForm = () => {
  return (
    <div className="pl-14 pr-14 py-8 max-w-md">
      <p className="font-medium text-xl text-gray-500">
        ¿Olvidó su contraseña?
      </p>
      <p className="text-md text-gray-500">
        Por favor, ingrese su dirección de correo electrónico. Recibirás un
        mensaje de correo electrónico con instrucciones para restablecer tu
        contraseña.
      </p>
      <div className="mt-2">
        <div className="mt-4">
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
            />
            <div className="absolute left-4">
              <FontAwesomeIcon icon={faEnvelope} color="#374151" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <BotonPrincipal titulo={"Restablecer contraseña"} />
        </div>
        <div className="mt-4 flex justify-end ">
          <Link to="/register">
            <button className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-8 rounded-xl bg-gray-200 text-sm font-thin">
              Regresar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
