import { ButtonOutline } from "components/atoms/ButtonOutline";
import { InputPrimary } from "components/common/InputPrimary";
import LogoTop from "assets/images/illustrations/logo-top.svg";
import Image from "next/image";
import { LogoGradient } from "components/common/logoGradient";

const JoinHeroSection = (props: Record<string, any>) => {
  return (
    <section className="join-hero-section">
      <LogoGradient/>
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <h1 className="title1">Join our tight-knit community of</h1>
          <h2 className="title1 text-gradient">Founders and Operators</h2>
          <p className="description mt-3">Enter the NF10x general token waitlist by sharing your email below, and we'll <br /> be in touch when your turn arrives.</p>
          <div className="form-section">
            <InputPrimary placeholder="Enter your email" />
            <ButtonOutline className="btn-join">Join the waitlist</ButtonOutline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinHeroSection;
