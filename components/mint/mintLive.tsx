import { ButtonOutline } from "components/atoms/ButtonOutline";
import { LogoGradient } from "components/common/logoGradient";

type MintLiveProps = {
  type?: string;
  sold?: number;
  total?: number;
  onClick: ()=>void;
}

const MintLiveComponent = (props: MintLiveProps) => {
  const {type='founder', sold = 33, total = 100, onClick} = props;
  return (
    <section className="min-live-component">
      <LogoGradient />
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <div className="text-center">
            <h1 className="title1 text-gradient">Mint is now live!</h1>
            <div className="card flex-col">
              <div className="dotted-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="live-text">{type}&apos;s pass sale</p>
              <div className="text-focus"><span className="text-glow">{sold}</span> <span>/{total}</span></div>
              <p className="description">NF10X passes have been Minted</p>
              <div className="divider"></div>
              <ButtonOutline className="btn-join" onClick={onClick}>Mint your pass now</ButtonOutline>
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
