import RegisterImg from "../../assets/register_img_complete.png";
import RegisterForm from "../auth/RegisterForm";

export default function Register() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <RegisterForm />
      </div>
      <div className="hidden relative lg:flex h-auto my-6 mx-6 w-1/2 rounded-lg items-center justify-center bg-custom-login-orange">
        <div className="flex justify-center items-center py-8 px-16 h-auto">
          <img
            className="h-auto w-auto max-w-sm min-w-20"
            alt="Register image"
            src={RegisterImg}
          />
        </div>
      </div>
    </div>
  );
}
