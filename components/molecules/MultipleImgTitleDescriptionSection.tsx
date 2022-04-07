/* eslint-disable @next/next/no-img-element */
import { H1, H2, H3 } from "components/atoms";
// import gsap from "gsap";
// import { useEffect } from "react";

type PropType = {
  mainSection?: Record<string, JSX.Element | string>;
  items: ReadonlyArray<Record<string, JSX.Element | string>>;
};

export const MultipleImgTitleDescriptionSection = (props: PropType) => {
  return (
    <article className="MultipleImgTitleDescriptionSection relative p-section lg:py-32 w-full min-h-screen flex flex-col lg:flex-row lg:justify-between text-secondary-1">
      <div className="order-1 lg:w-[50%]">
        <div className="lg:sticky top-16 mb-12">
          {props.mainSection?.image && (
            <div className="relative block after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[30%] after:bg-gradient-to-t after:from-primary-1 after:via-primary-1 after:to-transparent">
              <img
                className="w-full h-auto"
                src={props.mainSection?.image as string}
                alt="image"
              />
            </div>
          )}
          <div className="-mt-32 lg:pl-32">
            {props.mainSection?.title && (
              <H1 className="text-center lg:text-left whitespace-nowrap">
                {props.mainSection?.title}
              </H1>
            )}
            {props.mainSection?.description && (
              <p className="relative font-mono text-lg text-center lg:text-left">
                {props.mainSection?.description}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="order-2 lg:w-[50%]">
        <div className="relative w-full h-full flex flex-col gap-20 items-center lg:pt-[60%] lg:pb-[30%]">
          {props.items?.map((element, index) => {
            return (
              <div
                key={index}
                className="w-80 MultipleImgTitleDescriptionSectionElements"
              >
                {element.image && (
                  <img
                    className="w-28 mb-10"
                    loading="lazy"
                    src={element.image as string}
                    alt="image"
                  />
                )}
                {element.title && <H2>{element.title}</H2>}
                {element.description && (
                  <p className="font-mono text-tertiary-3">
                    {element.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
