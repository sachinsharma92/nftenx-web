import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";

const LinkExpiredComponent = (props: Record<string, any>) => {
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
            <div className="card">
              <div className="dotted-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="live-text">The Link You Have Followed Has Expired</p>
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

export default LinkExpiredComponent;
