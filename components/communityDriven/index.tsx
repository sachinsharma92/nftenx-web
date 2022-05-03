import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";

const CommunityDrivenComponent = (props: Record<string, any>) => {
  return (
    <section className="community-driven-component">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="content-section">
              <h4 className="title4">NF10x is a community-driven effort. It empowers entrepreneurs to find peers, seek mentorship, practice protocols & unlock new pathways into the web3 playground.</h4>
              <ButtonOutline className="btn-join mt-5">Know more</ButtonOutline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityDrivenComponent;
