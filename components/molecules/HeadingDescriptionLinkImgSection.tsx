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
};

export const HeadingDescriptionLinkImgSection = (props: PropTypes) => {
  return (
    <article className="relative px-ws-section w-full min-h-screen grid lg:grid-flow-row content-center">
      <img
        className="z-[1] max-w-none w-screen lg:z-auto h-auto lg:w-[60%] -mx-8 lg:m-0 lg:absolute lg:top-[50%] lg:right-0 lg:-translate-y-[50%]"
        src={props.image}
        alt="NF10X image"
      />
      <div className="z-[1] relative grid grid-flow-row-dense content-center gap-8 w-full lg:w-[90%] xl:w-[60%] 2xl:w-[50%]">
        <H1 className="max-w-md">{props.heading}</H1>
        <p className="font-mono text-tertiary-3 leading-8 text-lg">
          {props.description}
        </p>
        <A
          href={props.href ?? "javascript.void(0)"}
          className="px-8 py-3 w-fit"
        >
          {props.linkTitle}
        </A>
      </div>
      {props.bgImage && <img className="absolute h-[600px] lg:h-full left-0 bottom-[60px] lg:top-0 opacity-70" src={props.bgImage} alt="bg image" />}
    </article>
  );
};
