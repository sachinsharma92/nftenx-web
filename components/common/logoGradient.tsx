import Image from "next/image";
import LogoTop from "assets/images/illustrations/logo-top.svg";

export const LogoGradient = () => {

  return (
    <div className="logo-section">
      <div className="logo-box">
        <Image src={LogoTop} />
      </div>
    </div>
  );
};
