/* eslint-disable @next/next/no-img-element */
import { A, H1 } from "components/atoms";

type PropTypes = {
  image?: string;
  title?: string | JSX.Element;
  description?: JSX.Element | string;
  linkTitle?: JSX.Element | string;
  linkHref?: string;
};

export const ImageTitleDescriptionLinkHero = (props: PropTypes) => {
  return (
    <article className="relative p-section lg:py-22 w-full flex flex-col items-center text-secondary-1 bg-primary-4">
      {props.image && (
        // remove this pl-16 from bellow when changing the image
        <div className=" pl-16 relative h-[500px] overflow-y-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-2/3 after:w-full after:p-1 after:bg-gradient-to-b from-transparent to-primary-4">
          <img src={props.image} alt="NF10X" className="w-full" />
        </div>
      )}
      <div className="lg:w-2/3 flex flex-col items-center gap-8 -mt-36 z-[1] text-join-wave">
        {props.title && <H1>{props.title}</H1>}
        {props.description && (
          <p className=" text-center font-mono text-primary-light">
            {props.description}
          </p>
        )}
        {props.linkTitle && (
          <A href={props.linkHref ?? "javascript:void(0)"} className="py-3">{props.linkTitle}</A>
        )}
      </div>
    </article>
  );
};
