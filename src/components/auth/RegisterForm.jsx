import logoCanje from "../../assets/logo_canje.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { db } from "../../firebase";

function RegisterForm() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  //Manejar el estado de los inputs del Register
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { nombres, apellidos, email, password, confirmPassword } = formData;

  //Asignación de los values de los inputs
  function handleOnChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div className="bg-white pl-14 pr-14 py-28 max-w-xl">
      <img className="w-36 mb-14" src={logoCanje} />
      <h1 className="text-2xl text-gray-600 font-semibold mb-8">
        Crear Cuenta
      </h1>
      <form onSubmit={handleOnSubmit}>
        <div className="mt-2">
          <div className="mt-4">
            <div className="relative flex items-center">
              <input
                type="text"
                id="nombres"
                name="nombres"
                placeholder="Nombres"
                onChange={handleOnChange}
                value={nombres}
                className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
                required
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
                id="apellidos"
                name="apellidos"
                onChange={handleOnChange}
                placeholder="Apellidos"
                value={apellidos}
                className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
                required
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
                id="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
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
                type="password"
                placeholder="Contraseña"
                id="password"
                name="password"
                onChange={handleOnChange}
                value={password}
                className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
                required
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
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleOnChange}
                placeholder="Repetir Contraseña"
                value={confirmPassword}
                className="pr-4 pl-14 py-2.5 text-sm text-black rounded-lg bg-gray-100 border border-gray-200 w-full outline-custom-login-blue"
                required
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
                Al crear una cuenta acepto los términos de referencia y
                políticas de privacidad de canjes
              </label>
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-x-3">
            <Link to="/">
              <button className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-8 rounded-xl bg-gray-200 text-sm font-thin">
                Ya tengo una cuenta
              </button>
            </Link>
            <button
              type="submit"
              className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-8 rounded-xl bg-gray-700 text-white text-sm font-thin"
            >
              Crear cuenta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
