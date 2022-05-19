import { Button, H1, PrimaryInput } from "components/atoms";
import { ArticleCentered } from "components/atoms";
import { Logo } from "assets/icons";
import Link from "next/link";
import { JoinWaitlistForm } from "../JoinWaitlistForm";

type PropType = {
  title?: string;
  description?: string;
  onSuccess?: Function;
};

export const EmailJoinSection = (props: PropType) => {
  return (
    <ArticleCentered>
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

      <JoinWaitlistForm />
    </ArticleCentered>
  );
};
