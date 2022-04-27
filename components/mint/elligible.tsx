import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";
import { InputPrimary } from "components/common/InputPrimary";
import Image from "next/image";

const ElligibleComponent = (props: Record<string, any>) => {
  return (
    <section className="elligible-component">
      <div className="logo-section">
        <div className="logo-box">
          <Logo className="logo-img" />
        </div>
      </div>
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <h1 className="title1">Congratulations!</h1>
          <h2 className="title1 text-white">You are now eligible to mint the <br /> access pass.</h2>
          <p className="description font-mono mt-3">Your NF10X access pass awaits you. The minting will begin at 09:00 PM EUT on 1 JUN 2022</p>
          <div className="date">23 Days | 045:00 hrs</div>
          <p className="description font-mono mt-3">Current waittime till mint</p>
          <ButtonOutline className="btn-join">View events</ButtonOutline>
        </div>
      </div>
    </section>
  );
};

export default ElligibleComponent;
