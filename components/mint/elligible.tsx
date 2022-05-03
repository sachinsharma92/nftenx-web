import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";

const ElligibleComponent = (props: Record<string, any>) => {
  return (
    <section className="elligible-component">
      <div className="logo-section">
        <div className="logo-box">
          <Logo className="logo-img" />
        </div>
      </div>
      <div className="flex-sec">
        <div className="image-style">
          <div className="content-section">
            <h1 className="title1 text-white">Congratulations!</h1>
            <h2 className="title1 text-gradient">You are now eligible to mint <br />the access pass.</h2>
            <p className="description mt-5">Current waittime till mint</p>
            <div className="date">23 Days | 045:00 hrs</div>
            <ButtonOutline className="btn-join mt-4">View all events</ButtonOutline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElligibleComponent;
