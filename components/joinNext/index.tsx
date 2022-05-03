import { ButtonOutline } from "components/atoms/ButtonOutline";
const JoinNextComponent = (props: Record<string, any>) => {
  return (
    <section className="join-next-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="content">
              <h1 className="title1">Join the next wave of web3</h1>
              <p className="description font-mono">
                Subsribe to our newsletter to receive weekly updates. We usually start with some <br /> updates from the community, what has been going on the inside.
              </p>
              <ButtonOutline className="btn-join">Join the waitlist</ButtonOutline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNextComponent;
