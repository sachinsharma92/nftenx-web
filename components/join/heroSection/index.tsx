import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";
import { InputPrimary } from "components/common/InputPrimary";
import Image from "next/image";

const JoinHeroSection = (props: Record<string, any>) => {
  return (
    <section className="join-hero-section">
      <div className="logo-section">
        <div className="logo-box">
          <Logo className="logo-img" />
        </div>
      </div>
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <h1 className="title1">Join our tight-knit community of</h1>
          <h2 className="title1 text-white">Founders and Operators</h2>
          <p className="description font-mono mt-5">Enter the NF10x general token waitlist by sharing your email below, and we'll be in touch when your turn arrives.</p>
          <div className="form-section">
            <InputPrimary placeholder="Enter your email "/>
            <ButtonOutline className="btn-join">Join the waitlist</ButtonOutline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinHeroSection;
