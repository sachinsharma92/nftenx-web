import { SocialIcons } from "components/common/SocialIcons";
import { LogoGradient } from "components/common/logoGradient";

const VerifyHeroSection = (props: Record<string, any>) => {
  return (
    <section className="verify-hero-section">
      <LogoGradient />
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <h1 className="title1">Congratulations!</h1>
          <h2 className="title1 text-gradient">You are now eligible to mint the <br /> access pass.</h2>
          <p className="description mt-3 opacity-70">Every two weeks, we welcome a new cohort of members into the fold. These smaller groups foster an environment that is more conducive to building genuine relationships. We’ll send you further instructions once you’re elligible to mint the next cohort access with your registered email ID. You can now access our members only event, your can RSVP to those events via your links sent to your email.</p>
          <p className="description mt-3">Join us on our socials and to stay upto date</p>
          <div className="social-images">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyHeroSection;
