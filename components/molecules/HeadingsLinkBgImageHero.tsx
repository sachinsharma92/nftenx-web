/* eslint-disable @next/next/no-img-element */
import { RightArrowSecondary } from "assets/icons";
import { A, H1 } from "components/atoms";

type Props = {
  headings?: string[];
  linkTitle?: string | JSX.Element;
  href?: string;
  image?: string;
};

export const HeadingsLinkBgImageHero = (props: Props) => {
  return (
    <article
      className={`relative p-section w-full h-screen grid content-center pb-[8%] after:absolute after:w-full after:bottom-0 after:left-0 after:h-[100%] lg:after:h-20 after:bg-gradient-to-t after:from-primary-1 after:via-primary-2 lg:after:via-transparent after:to-transparent bg-gradient-to-b from-primary-2 to-primary-1`}
    >
      {props.image && (
        <img
          src={props.image}
          className="image-bg-style"
          alt="NF10X"
        />
      )}
      <div className="z-[1] relative grid grid-flow-row-dense content-center gap-6 w-full lg:w-[90%] xl:w-[70%] 2xl:w-[70%] hero-section-heading">
        {props.headings?.map((element, index) => {
          return (
            <H1
              className={`${index != 0 ? "text-opacity-70" : ""}`}
              key={index}
            >
              {element}
            </H1>
          );
        })}
        <div className="mt-8">
          <A href={props.href ?? "javascript.void(0)"} className="btn-join">
            {props.linkTitle}
          </A>
        </div>
      </div>
    </article>
  );
};
