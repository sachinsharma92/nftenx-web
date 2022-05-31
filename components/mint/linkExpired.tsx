import { LogoGradient } from "components/common/logoGradient";
import { JoinWaitlistForm } from "components/molecules";
import Image from "next/image";
import Link from "next/link";
import AlertIcon from "../../assets/icons/warning.svg"

const LinkExpiredComponent = (props: Record<string, any>) => {
  return (
    <section className="link-expired-component">
      <LogoGradient />
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <div className="text-center">
            <div className="card flex-col">
              <div className="dotted-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Image src={AlertIcon} alt="warning icon" />
              <p className="live-text mt-3">The Link You Have Followed <br /> Has Expired</p>
              <div className="divider"></div>
              <JoinWaitlistForm type="secondary" layout="vertical" />
            </div>
          </div>
          <p className="click-here font-mono mt-5">Already have a pass? <Link href='/member'>Click here</Link></p>
        </div>
      </div>
    </section>
  );
};

export default LinkExpiredComponent;
