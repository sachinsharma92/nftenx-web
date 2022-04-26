import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";
import { InputPrimary } from "components/common/InputPrimary";
import Image from "next/image";

const UpcomingComponent = (props: Record<string, any>) => {
  return (
    <section className="upcoming-section">
      <div className="head-section">
        <div className="container">
          <h1 className="title1">Upcoming this month</h1>
          <p className="description font-mono mt-5">Web3 is more than a sprouting new industry. It’s a re-architecting of the internet. New, unthought-of companies will emerge.</p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingComponent;
