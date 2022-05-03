import Image from "next/image";
import CoinIcon from "../../assets/images/coin.png";

const HowMintComponent = (props: Record<string, any>) => {
  return (
    <section className="how-mint-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="position-sticky">
            <h1 className="title1 text-white">How to mint?</h1>
            <p className="description mt-5">
              Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are searching for ways to learn more, to get involved, to harness this once-in-a-decade.
            </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="content">
            <div className="icon-box">
              <h2 className="title2 text-gradient">01</h2>
              <h4 className="title4">Set up your wallet</h4>
              <p className="description">
                Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are searching for ways to learn more, to get involved, to
              </p>
            </div>

            <div className="icon-box">
              <h2 className="title2 text-gradient">02</h2>
              <h4 className="title4">Set up your wallet</h4>
              <p className="description">
                Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are searching for ways to learn more, to get involved, to
              </p>
            </div>
            <div className="icon-box">
              <h2 className="title2 text-gradient">03</h2>
              <h4 className="title4">Set up your wallet</h4>
              <p className="description">
                Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are searching for ways to learn more, to get involved, to
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowMintComponent;
