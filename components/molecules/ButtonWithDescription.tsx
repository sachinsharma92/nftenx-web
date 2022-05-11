import { A, H1, P } from "components/atoms";

/* eslint-disable @next/next/no-img-element */
type Props = {
    src: string;
    onClick: () => void;
    title: JSX.Element | string;
    subTitle: JSX.Element | string;
};

export const ButtonWithDescription = ({src, onClick, title, subTitle}: Props) => {
  return (
        <div className="relative flex flex-col items-center gap-5">
            <img src={src} alt="founder-coin" className="absolute w-96 blur-3xl animate-spin-slow"/>
            <button onClick={onClick} className="z-[1]">
                <img src={src} alt="founder-coin" className="w-96"/>
            </button>
            <div className="flex flex-col gap-3">
                <P className="text-primary-light-2 font-heading-serif text-xl opacity-60">{title}</P>
                <P className="text-primary-light-2 text-xs leading-relaxed opacity-60">{subTitle}</P>
            </div>
        </div>
  );
};
