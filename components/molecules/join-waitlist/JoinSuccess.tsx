/* eslint-disable @next/next/no-img-element */
import { A, Button, H1, PrimaryInput } from "components/atoms";
import { ArticleCetered } from "components/atoms";
import { Logo, RightArrowSecondary } from "assets/icons";
import Link from "next/link";
import { socialLinks } from "constants/sidebar";
import { useCountdown } from "utils/hooks/useCountDown";
import generalCoin from "assets/images/coin-general.png";

type PropType = {
  action?: Function;
  type?: "event-available";
  timeTillMint?: Date;
  href?: string;
};

export const JoinSuccess = (props: PropType) => {
  const [days, hours, minutes, seconds] = useCountdown(
    props.timeTillMint ?? Date.now().toString()
  );

  return (
    <ArticleCetered>
      {/* the top gradients & logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-600 w-1/2 h-28 p-1 rounded-full blur-[180px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-500 w-1/3 h-28 p-1 rounded-full blur-[150px]"></div>
      <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-violet-400 w-1/4 h-28 p-1 rounded-full blur-[80px]"></div>
      <div className="absolute w-12 top-6 left-1/2 -translate-x-1/2 z-[1]">
        <Link passHref href="/">
          <a className="pointer">
            <Logo className="w-full" />
          </a>
        </Link>
      </div>
      {/* the top gradients & logo ENDS */}

      {/* bg coin */}
      {props.type == "event-available" && (
        <div className="absolute top-36 md:top-28 w-11/12 md:w-1/2 max-h-[65%] overflow-y-hidden blur-lg after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-2/3 after:bg-gradient-to-b from-transparent via-primary-1 to-primary-1 after:p-2">
          <img src={generalCoin.src} alt="nf10x coin" className="w-full" />
        </div>
      )}
      {/* bg coin end */}

      <div className="w-full lg:w-4/5 xl:w-3/5 flex flex-col gap-3 items-center">
        <H1 className="text-center">Congratulations</H1>
        <H1 className="text-center">
          You are now eligible to mint the access pass.
        </H1>
        {props.type != "event-available" && (
          <p className="font-mono text-primary-light text-center lg:w-4/5">
            Every two weeks, we welcome a new cohort of members into the fold.
            These smaller groups foster an environment that is more conducive to
            building genuine relationships. We’ll send you further instructions
            once you’re elligible to mint the next cohort access with your
            registered email ID. You can now access our members only event, your
            can RSVP to those events via your links sent to your email.
          </p>
        )}
      </div>

      {props.type != "event-available" && (
        <p className="font-mono text-primary-light text-center lg:w-4/5 mt-9">
          Join us on our socials and to stay upto date
        </p>
      )}
      {props.type != "event-available" && (
        <div className="flex flex-row gap-4 items-center -mt-5">
          {socialLinks.map((element, index) => {
            return (
              <A
                key={index}
                href={element.href ?? "javascript.void(0)"}
                className="px-2 py-2"
              >
                {element.image}
              </A>
            );
          })}
        </div>
      )}

      {props.type == "event-available" && props.timeTillMint && (
        <div className="block text-center mt-10 z-[1]">
          <p className="font-mono text-primary-light text-center">
            Current wait time till mint
          </p>
          <p className="font-mono text-secondary-1 text-center mt-4">
            {days} days | {hours}:{minutes}:{seconds} hrs
          </p>
          <A href={props.href ?? 'javascript:void(0)'} className="mt-6 flex">
            <>View all events <RightArrowSecondary className="ml-3" /></>
          </A>
        </div>
      )}
    </ArticleCetered>
  );
};
