import { A, H1, P } from "components/atoms";

/* eslint-disable @next/next/no-img-element */
type Props = {
    src: string;
    href: string;
    title: JSX.Element | string;
    subTitle: JSX.Element | string;
};

export const ButtonWithDescription = ({src, href, title, subTitle}: Props) => {
  return (
        <div className="flex flex-col items-center gap-5">
            <button>
                <img src={src} alt="founder-coin"/>
            </button>
            {/* <A href={href}>
            </A> */}
            <div className="flex flex-col gap-3">
                <P className="text-tertiary-3">{title}</P>
                <P className="">{subTitle}</P>
            </div>
        </div>
  );
};
