import LoginForm from "../auth/LoginForm";
import loginImg from "../../assets/login_img_complete.png";

export default function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginForm />
      </div>
      <div className="hidden relative lg:flex h-auto my-6 mx-6 w-1/2 rounded-lg items-center justify-center bg-custom-login-blue">
        <div className="flex justify-center items-center py-8 px-8 h-auto">
          <img
            className="h-auto min-w-20 max-w-sm"
            alt="login image"
            src={loginImg}
          />
        </div>
      </div>
    </div>
  );
}
