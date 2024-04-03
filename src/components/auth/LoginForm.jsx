import logoCanje from "../../assets/logo_canje.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  //Manejar el estado de los inputs del login
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  //Asignación de los values de los inputs
  function handleOnChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  //Ver el password
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPasswordOnClick() {
    setShowPassword((prevState) => !prevState);
  }

  return (
    <div className="bg-white pl-14 pr-14 py-28 max-w-2xl">
      <img className="w-36 mb-20" src={logoCanje} />
      <h1 className="text-2xl text-gray-600 font-semibold mb-8">Bienvenido</h1>
      <p className="font-medium text-xl text-gray-500">Iniciar sesión</p>
      <p className="text-md text-gray-500">
        Ingrese con su correo y contraseña
      </p>
      <form>
        <div className="mt-2">
          <div className="mt-4">
            <div className="relative flex items-center">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Correo electrónico"
                className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue ease-in-out"
                required
              />
              <div className="absolute left-4">
                <FontAwesomeIcon icon={faEnvelope} color="#374151" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleOnChange}
                className="pr-10 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
                required
              />
              <div className="absolute right-3 top-3 cursor-pointer">
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  color="#374151"
                  onClick={handleShowPasswordOnClick}
                />
              </div>
              <div className="absolute left-4">
                <FontAwesomeIcon icon={faLock} color="#374151" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-8 rounded-xl bg-gray-700 text-white text-sm font-thin"
            >
              Iniciar sesión
            </button>
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
              <button className="font-medium text-base text-blue-500 hover:text-blue-800 transition duration-200 ease-in-out">
                ¿Olvidaste tu contraseña?
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
