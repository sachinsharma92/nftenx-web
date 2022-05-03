import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";
import { LogoGradient } from "components/common/logoGradient";

const MintLiveComponent = (props: Record<string, any>) => {
  return (
    <section className="min-live-component">
      <LogoGradient />
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <div className="text-center">
            <h1 className="title1 text-gradient">Mint is now live!</h1>
            <div className="card">
              <div className="dotted-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="live-text">Founders’ pass sale</p>
              <div className="text-focus"><span className="text-glow">33</span> <span>/100</span></div>
              <p className="description">NF10X passes have been Minted</p>
              <div className="divider"></div>
              <ButtonOutline className="btn-join">Mint your pass now</ButtonOutline>
            </div>
            <p className="text-read mt-3">.01 ETH/Pass | 01 Pass/Account | Read FAQs</p>
          </div>
          <p className="click-here mt-3">Already have a pass? <a>Click here</a></p>
        </div>
      </div>
    </section>
  );
};

export default MintLiveComponent;
