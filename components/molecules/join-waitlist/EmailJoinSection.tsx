import { Button, H1, PrimaryInput } from "components/atoms";
import { ArticleCetered } from "components/atoms";
import { Logo, RightArrowSecondary } from "assets/icons";
import Link from "next/link";
import { useState } from "react";
import CustomToast from "components/atoms/Toast";
import { Api } from "services/api";

type PropType = {
  title?: string;
  description?: string;
  onSuccess?: Function;
};

export const EmailJoinSection = (props: PropType) => {

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('Success');
  const [content, setContent] = useState('Added successfully');

  const joinWaitlist = async (event: any) => {
    event.preventDefault();
    const payload = {
      email: event.target.email.value
    }
    const response = await Api.joinTheWaitlist(payload);
    if(response.success && props.onSuccess) {
      props.onSuccess(response.success);
    }else {
      setShow(true);
      setTitle('Error');
      // TODO: change this message according to the message received from the API
      setContent('Email already in the waitlist');
    }
  }

  return (
    <ArticleCetered>
      <CustomToast
        show={show}
        content={content}
        onClose={()=>setShow(false)}
        title={title}
      />
      {/* the top gradients & logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-600 w-1/2 h-28 p-1 rounded-full blur-[180px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-500 w-1/3 h-28 p-1 rounded-full blur-[150px]"></div>
      <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-violet-400 w-1/4 h-28 p-1 rounded-full blur-[80px]"></div>
      <div className="absolute w-12 top-6 left-1/2 -translate-x-1/2">
        <Link passHref href="/">
          <a className="pointer">
            <Logo className="w-full" />
          </a>
        </Link>
      </div>
      {/* the top gradients & logo ENDS */}

      <div className="w-full lg:w-4/5 flex flex-col gap-3 items-center">
        <H1 className="text-center">{props.title}</H1>
        <p className="font-mono text-primary-light text-center lg:w-4/5">
          {props.description}
        </p>
      </div>

      <form onSubmit={joinWaitlist} className="flex flex-col md:flex-row gap-4 mt-16">
        <PrimaryInput
          name="email"
          type="email"
          placeholder="Enter Your Email"
          className="w-96"
        />
        <Button
          type="submit"
          className="bg-white bg-opacity-5 border-[1px] border-white border-opacity-20 flex flex-row w-auto group"
        >
          <>
            Join Waitlist{" "}
            <RightArrowSecondary className="transition-all group-hover:translate-x-2" />
          </>
        </Button>
      </form>
    </ArticleCetered>
  );
};
