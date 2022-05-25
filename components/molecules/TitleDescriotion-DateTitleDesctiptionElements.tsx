import { H1 } from "components/atoms";

type PropType = {
  title?: string;
  description?: string;
  items?: ReadonlyArray<
    Record<
      string,
      undefined | string | JSX.Element | Record<string, undefined | string>
    >
  >;
};

export const TitleDescriotion_DateTitleDesctiptionElements = (
  props: PropType
) => {
  return (
    <article className="relative p-section py-14 lg:py-28 text-secondary-1 flex flex-col gap-8 justify-center items-center min-h-screen overflow-x-hidden">
      <div className="flex flex-col w-full gap-5 items-center">
        {props.title && <H1 className="text-center">{props.title}</H1>}
        {props.description && (
          <p className="font-mono text-primary-light text-center lg:w-4/5">
            {props.description}
          </p>
        )}
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-5 justify-start">
        {props.items?.map((element, index) => {
          return (
            <div
              key={index}
              className={`relative shrink-0 lg:w-[32%] lg:p-12 flex flex-col gap-10 border-b-[2px] border-white border-opacity-10 py-10 lg:border-0 after:hidden lg:after:block after:content=[''] after:absolute after:bottom-12 after:right-0 after:w-[1px] p-[1px] after:bg-white after:bg-opacity-10 after:h-44 last:after:hidden ${
                (index + 1) % 3 === 0 ? "lg:after:hidden" : ""
              }`}
            >
              <div className="flex flex-row items-baseline">
                <span className="font-recife text-8xl font-extralight">
                  {(element.date as Record<string, string>).day}
                </span>{" "}
                <span className="font-mono text-primary-light text-2xl ml-2">
                  {(element.date as Record<string, string>).month}
                </span>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="font-mono uppercase text-primary-light text-2xl">
                  {element.title}
                </div>
                <div className="font-mono uppercase text-3xl text-secondary-1 text-opacity-50">
                  {(element.date as Record<string, string>).time}
                </div>
                <div className="font-mono uppercase text-primary-light text-sm opacity-70 leading-6">
                  {element.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
