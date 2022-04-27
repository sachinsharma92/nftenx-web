import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";
import { InputPrimary } from "components/common/InputPrimary";
import { SocialIcons } from "components/common/SocialIcons";
import Image from "next/image";

const VerifyHeroSection = (props: Record<string, any>) => {
  return (
    <section className="verify-hero-section">
      <div className="logo-section">
        <div className="logo-box">
          <Logo className="logo-img" />
        </div>
      </div>
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <h1 className="title1">Congratulations!</h1>
          <h2 className="title1 text-white">You are now eligible to mint the <br /> access pass.</h2>
          <p className="description font-mono mt-3">Every two weeks, we welcome a new cohort of members into the fold. These smaller groups foster an environment that is more conducive to building genuine relationships. We’ll send you further instructions once you’re elligible to mint the next cohort access with your registered email ID. You can now access our members only event, your can RSVP to those events via your links sent to your email.</p>
          <p className="description font-mono mt-3">Join us on our socials and to stay upto date</p>  

<div className="social-images">
          <SocialIcons/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyHeroSection;
