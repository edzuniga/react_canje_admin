import logoCanje from "../../assets/logo_canje.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import BotonPrincipal from "../widgets/BotonPrincipal";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="bg-white pl-14 pr-14 py-28 max-w-xl">
      <img className="w-36 mb-14" src={logoCanje} />
      <h1 className="text-2xl text-gray-600 font-semibold mb-8">
        Crear Cuenta
      </h1>
      <div className="mt-2">
        <div className="mt-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Nombres"
              className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
            />
            <div className="absolute left-4">
              <FontAwesomeIcon icon={faUser} color="#374151" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Apellidos"
              className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
            />
            <div className="absolute left-4">
              <FontAwesomeIcon icon={faUser} color="#374151" />
            </div>
          </div>
        </div>
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
        <div className="mt-4">
          <div className="relative flex items-center">
            <input
              type="password"
              placeholder="Repetir Contraseña"
              className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
            />
            <div className="absolute left-4">
              <FontAwesomeIcon icon={faLock} color="#374151" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="relative flex items-center col-auto gap-x-3">
            <input type="checkbox" className="form-check-input" />

            <label className="font-normal text-sm">
              Al crear una cuenta acepto los términos de referencia y políticas
              de privacidad de canjes
            </label>
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-x-3">
          <Link to="/">
            <button className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-8 rounded-xl bg-gray-200 text-sm font-thin">
              Ya tengo una cuenta
            </button>
          </Link>

          <BotonPrincipal titulo={"Crear cuenta"} />
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
