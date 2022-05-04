import { ButtonOutline } from "components/atoms/ButtonOutline";
import { LogoGradient } from "components/common/logoGradient";
import {useRouter} from "next/router";

const ElligibleComponent = (props: Record<string, any>) => {
  const router = useRouter();

  return (
    <section className="elligible-component">
      <LogoGradient/>
      <div className="flex-sec">
        <div className="image-style">
          <div className="content-section">
            <h1 className="title1 text-white">Congratulations!</h1>
            <h2 className="title1 text-gradient">You are now eligible to mint <br />the access pass.</h2>
            {/* <p className="description mt-5">Current waittime till mint</p>
            <div className="date">23 Days | 045:00 hrs</div> */}
            <ButtonOutline className="btn-join mt-4" onClick={()=>router.push('/events')}>View all events</ButtonOutline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElligibleComponent;
