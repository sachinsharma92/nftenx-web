import { Button, H1, PrimaryInput } from "components/atoms";
import { ArticleCetered } from "components/atoms";
import { Logo, RightArrowSecondary } from "assets/icons";
import Link from "next/link";
import { useState } from "react";
import CustomToast from "components/atoms/Toast";
import { Api } from "services/api";
import { JoinWaitlistForm } from "../JoinWaitlistForm";

type PropType = {
  title?: string;
  description?: string;
  onSuccess?: Function;
};

export const EmailJoinSection = (props: PropType) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Success");
  const [content, setContent] = useState("Added successfully");

  const onFormChange = ({
    fshow,
    ftitle,
    fcontent,
  }: {
    fshow?: boolean;
    ftitle?: string;
    fcontent?: string;
  }) => {
    if (fshow === true) setShow(true);
    else if (fshow !== undefined && fshow === false) setShow(false);

    (ftitle && setTitle(ftitle));
    (fcontent && setContent(fcontent));
  };

  return (
    <ArticleCetered>
      <CustomToast
        show={show}
        content={content}
        onClose={() => setShow(false)}
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

      <JoinWaitlistForm onChange={onFormChange} onSuccess={props.onSuccess} />
    </ArticleCetered>
  );
};
