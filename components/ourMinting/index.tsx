import Image from "next/image";
import CoinIcon from "../../assets/images/coin.png";
import AccessIcon from "../../assets/icons/access.svg";
import InsightsIcon from "../../assets/icons/insights.svg";
import ImmersionIcon from "../../assets/icons/immersion.svg";

const OurMintingComponent = (props: Record<string, any>) => {
  return (
    <section className="our-minting-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="img-sec">
              <Image src={CoinIcon} />
            </div>
          </div>
          <div className="col-sm-6">
            <h1 className="title1 text-gradient">Our minting <br /> process</h1>
            <p className="description font-mono mt-5">
              The NF10x community is built with a hands-on approach to onboarding. Every two weeks, we welcome a new cohort of members into the fold. These smaller groups foster an environment that is more conducive to building genuine relationships while integrating into the broader
            </p>
            <p className="description font-mono mt-1">
              community. Our first cohort will receive our Founding Members token and be added to a dedicated channel only available to Founding Members. Subsequent cohorts will mint General Member tokens until the community grows to 1,100 members. Those who signup for the waitlist get access to the first three events at no cost.</p>

            <div className="row mt-5">
              <div className="col-sm-4">
                <div className="icon-box">
                  <div className="icon-sec">
                    <Image src={InsightsIcon} />
                  </div>

                  <h4 className="title4">Insights</h4>
                  <p className="description font-mono">
                    Live and on-demand modules to get you up to speed on Web3.
                  </p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="icon-box">
                  <div className="icon-sec">
                    <Image src={AccessIcon} />
                  </div>
                  <h4 className="title4">Access</h4>
                  <p className="description font-mono">
                    Live and on-demand modules to get you up to speed on Web3.
                  </p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="icon-box">
                  <div className="icon-sec">
                    <Image src={ImmersionIcon} />
                  </div>
                  <h4 className="title4">Immersion</h4>
                  <p className="description font-mono">
                    Live and on-demand modules to get you up to speed on Web3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMintingComponent;
