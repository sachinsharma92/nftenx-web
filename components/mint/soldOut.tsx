import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";

const SoldOutComponent = (props: Record<string, any>) => {
  return (
    <section className="min-live-component">
      <div className="logo-section">
        <div className="logo-box">
          <Logo className="logo-img" />
        </div>
      </div>
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <div className="text-center">
            <h1 className="title1">Cohort 1: Sold Out</h1>
            <div className="card">
              <div className="dotted-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="live-text">Founders’ pass sale</p>
              <div className="text-focus"><span className="text-glow">33</span> <span>/ 100</span></div>
              <p className="description">Cohort1: Founders’ passes Sold out</p>
              <div className="divider"></div>
              <p className="description">Enter your email to join our waitlist:</p>
              <div className="highlighted">john@nf10x.com</div>
              <ButtonOutline>Join our waitlist</ButtonOutline>
            </div>
          </div>
          <p className="click-here font-mono mt-5">Already have a pass? <a>Click here</a></p>
        </div>
      </div>
    </section>
  );
};

export default SoldOutComponent;
