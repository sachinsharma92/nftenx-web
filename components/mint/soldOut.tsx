import { ButtonOutline } from "components/atoms/ButtonOutline";
import { LogoGradient } from "components/common/logoGradient";

const SoldOutComponent = (props: Record<string, any>) => {
  return (
    <section className="sold-out-component">
      <LogoGradient />
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <div className="text-center">
            <h1 className="title1 text-gradient">Cohort 1: Sold Out</h1>
            <div className="card flex-col">
              <div className="dotted-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="text-focus"><span className="text-glow">33</span> <span>/ 100</span></div>
              <p className="description light">Cohort1: Founders’ passes Sold out</p>
              <div className="divider"></div>
              <p className="description">Enter your email to join <br /> our waitlist:</p>
              <div className="highlighted">john@nf10x.com</div>
              <ButtonOutline className="btn-join">Join our waitlist</ButtonOutline>
            </div>
          </div>
          <p className="click-here font-mono mt-5">Already have a pass? <a>Click here</a></p>
        </div>
      </div>
    </section>
  );
};

export default SoldOutComponent;
