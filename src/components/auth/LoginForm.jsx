import logoCanje from "../../assets/logo_canje.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import BotonPrincipal from "../widgets/BotonPrincipal";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="bg-white pl-14 pr-14 py-28 max-w-xl">
      <img className="w-36 mb-20" src={logoCanje} />
      <h1 className="text-2xl text-gray-600 font-semibold mb-8">Bienvenido</h1>
      <p className="font-medium text-xl text-gray-500">Iniciar sesión</p>
      <p className="text-md text-gray-500">
        Ingrese con su correo y contraseña
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
        <div className="mt-4">
          <div className="relative flex items-center">
            <input
              type="password"
              placeholder="Contraseña"
              className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
            />
            <div className="absolute left-4">
              <FontAwesomeIcon icon={faLock} color="#374151" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <BotonPrincipal titulo={"Iniciar sesión"} />
        </div>
        <div className="mt-4 flex justify-between items-center gap-6">
          <div>
            <label className="ml-2 font-normal text-base">
              ¿No tienes cuenta?
            </label>
          </div>
          <Link to="/register">
            <button className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-8 rounded-xl bg-gray-200 text-sm font-thin">
              Crear cuenta
            </button>
          </Link>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <Link to="/recover">
            <button className="font-medium text-base text-blue-500">
              ¿Olvidaste tu contraseña?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
