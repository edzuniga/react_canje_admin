import canjeLogoWhite from "../../assets/logo_canje_white.png";
import house from "../../assets/house.png";
import { RecoveryForm } from "../auth/RecoveryForm";

export const RecoverPage = () => {
  return (
    <div className="w-full p-4">
      <div className="flex w-full h-1/3 bg-custom-login-yellow justify-between mb-24 rounded">
        <div className="flex justify-center pl-6 pt-6 w-auto">
          <img src={canjeLogoWhite} alt="Logo" className="h-12" />
        </div>

        <div className="flex justify-center pt-4 pr-6">
          <img src={house} alt="Isometric Illustration" className="h-56" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <RecoveryForm />
      </div>
    </div>
  );
};
