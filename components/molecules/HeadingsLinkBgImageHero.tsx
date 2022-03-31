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
    <article className="relative px-ws-section w-full h-screen grid content-end pb-[8%]">
      {props.image && <img src={props.image} className="absolute top-0 left-0 w-full h-full object-cover" alt="NF10X" />}
      <div className="relative grid grid-flow-row-dense content-center gap-6 w-full lg:w-[90%] xl:w-[60%] 2xl:w-[60%]">
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
          <A href="/join" className="px-8 py-3">
            <span className="group text-secondary-1 text-mono whitespace-nowrap flex items-center text-lg">
              Join the Waitlist
              <span role="img" className="transition-all pl-2 group-hover:pl-5">
                <RightArrowSecondary className="h-10 w-auto" />
              </span>
            </span>
          </A>
        </div>
      </div>
    </article>
  );
};
