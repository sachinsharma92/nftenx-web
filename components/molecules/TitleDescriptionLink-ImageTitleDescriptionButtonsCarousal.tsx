/* eslint-disable @next/next/no-img-element */
import { A, H1, H2, H3, H4 } from "components/atoms";

type PropTypes = {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  items?: ReadonlyArray<
    Record<
      string,
      | undefined
      | string
      | JSX.Element
      | ReadonlyArray<Record<string, undefined | string | JSX.Element>>
    >
  >;
  linkTitle?: string | JSX.Element;
  linkHref?: string;
};

export const TitleDescriptionLink_ImageTitleDescriptionButtonsCarousal = (
  props: PropTypes
) => {
  return (
    <article className="relative p-section text-secondary-1 flex flex-col gap-8 justify-center min-h-screen overflow-x-hidden pt-20 md:pt-20">
      <div className="flex flex-col gap-5 lg:w-1/2 text-center lg:text-left items-center lg:items-start">
        {props.title && <H1>{props.title}</H1>}
        {props.description && <p className="font-mono">{props.description}</p>}
        {props.linkTitle && (
          <A
            href={props.linkHref ?? "javascript.void(0)"}
            className="px-8 py-3 w-fit mt-5"
          >
            {props.linkTitle}
          </A>
        )}
      </div>
      <div className="flex flex-row flex-nowrap gap-2 carousal overflow-x-auto -px-section px-2 lg:px-28 2xl:px-32 lg:pt-16">
        {props.items?.map((element, index) => {
          return (
            <div
              className="flex flex-col shrink-0 pb-6 w-40 lg:w-72 transition-all group lg:hover:w-80"
              key={index}
            >
              {/* {JSON.stringify(element)} */}
              {element.image && (
                <img
                  src={element.image as string}
                  alt={element.title as string}
                  className="w-full h-52 lg:h-80 object-cover object-center lg:group-hover:h-60 lg:group-hover:lg:h-96 lg:group-hover:-mt-8 lg:group-hover:lg:-mt-16 transition-all"
                />
              )}
              {element.title && <H4 className="lg:group-hover:opacity-0 transition-all lg:group-hover:-translate-y-9">{element.title as string}</H4>}
              {element.title && <H2 className="leading-[0] 2xl:leading-[1] lg:group-hover:lg:block opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-24 transition-all">{element.title as string}</H2>}
              {element.description && <p className="lg:group-hover:lg:block text-mono opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-24 transition-all">{element.description as string}</p>}
            </div>
          );
        })}
      </div>
    </article>
  );
};
