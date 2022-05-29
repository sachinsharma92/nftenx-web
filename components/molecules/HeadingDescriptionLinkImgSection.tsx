/* eslint-disable @next/next/no-img-element */
import { RightArrowSecondary } from "assets/icons";
import { A, H1 } from "components/atoms";

type PropTypes = {
  heading?: JSX.Element | string;
  description?: JSX.Element | string;
  image?: string;
  bgImage?: string;
  linkTitle?: JSX.Element | string;
  href?: string;
  className?: string;
};

export const HeadingDescriptionLinkImgSection = (props: PropTypes) => {
  return (
    <article className="relative p-section w-full min-h-screen flex flex-col lg:flex-row justify-end overflow-x-hidden overflow-y-hidden">
      <img
        className="z-[1] max-w-none w-screen lg:z-auto h-auto lg:w-[50%] lg:m-0 lg:absolute lg:top-0 lg:left-24"
        src={props.image}
        alt="NF10X image"
      />
      <div className="z-[1] relative grid grid-flow-row-dense content-center gap-8 w-full lg:w-[90%] xl:w-[60%] 2xl:w-[50%] lg:mt-64">
        <div className="p-1 h-96 w-96 bg-primary-1 blur-3xl -top-7 -left-24 absolute rounded-full"></div>
        <H1 className={`max-w-lg text-learn-grow ${props.className}`}>{props.heading}</H1>
        <p className="z-[1] text-light-gray leading-8 text-lg">
          {props.description}
        </p>
        <A
          href={props.href ?? "javascript.void(0)"}
          className="px-5 py-2 w-fit"
        >
          {props.linkTitle}
        </A>
      </div>
      {props.bgImage && <img className="absolute h-[600px] lg:h-full left-0 bottom-[60px] lg:top-0 opacity-70" src={props.bgImage} alt="bg image" />}
    </article>
  );
};
