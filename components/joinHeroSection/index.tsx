import { ButtonOutline } from "components/atoms/ButtonOutline";
import { InputPrimary } from "components/common/InputPrimary";
import LogoTop from "assets/images/illustrations/logo-top.svg";
import Image from "next/image";
import { LogoGradient } from "components/common/logoGradient";
import { Api } from "services/api";
import ArrowNext from "../../assets/icons/arrow-next.svg"
import CustomToast from "components/atoms/Toast";
import { useState } from "react";

const JoinHeroSection = (props: Record<string, any>) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('Success');
  const [content, setContent] = useState('Added successfully');

  const joinWaitlist = async (event: any) => {
    event.preventDefault();
    const payload = {
      email: event.target.email.value
    }
    const response = await Api.joinTheWaitlist(payload);
    if(response.success) {
      setShow(true);
    }else {
      setShow(true);
      setTitle('Error');
      setContent('');
    }
  }

  return (
    <section className="join-hero-section">
      <LogoGradient/>
      <CustomToast
        show={show}
        content={content}
        onClose={()=>setShow(false)}
        title={title}
      />
      <div className="flex-sec">
        <div className="image-style" />
        <div className="content-section">
          <h1 className="title1">Join our tight-knit community of</h1>
          <h2 className="title1 text-gradient">Founders and Operators</h2>
          <p className="description mt-3">Enter the NF10x general token waitlist by sharing your email below, and we'll <br /> be in touch when your turn arrives.</p>
            <form onSubmit={joinWaitlist} className="flex mt-5">
              <div className="input-main-style">
                <input className="input-style" type="email" name={'email'} placeholder={"Enter your email"} />
              </div>

              <div className={`button-wrapper ${props.buttonStyle}`}>
                <button
                    className={`button-outline btn-join`}
                    type="submit"
                >
                    Join the waitlist {!props.arrowActive && <div className="icon"><Image src={ArrowNext} /></div>}
                </button>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default JoinHeroSection;
