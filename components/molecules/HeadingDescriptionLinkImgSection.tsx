/* eslint-disable @next/next/no-img-element */
import { RightArrowSecondary } from "assets/icons";
import { A, H1 } from "components/atoms";

type PropTypes = {
  heading?: JSX.Element | string;
  description?: JSX.Element | string;
  image?: string;
  linkTitle?: JSX.Element | string;
  href?: string;
};

export const HeadingDescriptionLinkImgSection = (props: PropTypes) => {
  return (
    <article className="relative px-ws-section w-full h-screen grid content-center">
      <div className="z-[1] relative grid grid-flow-row-dense content-center gap-8 w-full lg:w-[90%] xl:w-[60%] 2xl:w-[50%]">
        <H1 className="max-w-md">{props.heading}</H1>
        <p className="font-mono text-tertiary-3 leading-8 text-lg">
          {props.description}
        </p>
        <A href={props.href ?? 'javascript.void(0)'} className="px-8 py-3 w-fit">
            {props.linkTitle}
          </A>
      </div>
      <img
        className="w-[60%] absolute top-[50%] right-0 -translate-y-[50%]"
        src={props.image}
        alt="NF10X image"
      />
    </article>
  );
};
