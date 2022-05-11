/* eslint-disable @next/next/no-img-element */
import { ArticleCetered, H1, H3 } from "components/atoms";

type PropType = {
  title?: string;
  description?: string;
  image?: string;
  items?: ReadonlyArray<Record<string, undefined | string>>;
};

export const LeftImage_RightTitleDescription_ImageTitleDescriptionItems = (
  props: PropType
) => {
  return (
    <ArticleCetered>
      <div className="w-full flex-col gap-5 lg:grid lg:grid-flow-col lg:grid-cols-2">
        <div className="relative grid place-items-center">
          <img
            src={props.image}
            alt={props.title}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/6 blur-[36px]"
          />
          <img src={props.image} alt={props.title} className="lg:w-3/5 z-[1]" />
        </div>
        <div className="relative mt-10 lg:mt-0">
          <H1 className="lg:w-3/4">{props.title}</H1>
          <p className="font-mono text-base text-primary-light mt-6">
            {props.description}
          </p>
          <div className="flex flex-col gap-4 lg:grid lg:grid-flow-col lg:grid-cols-3 mt-8">
            {props.items?.map((element, index) => {
              return (
                <div key={index}>
                  <img src={element.image} alt={element.title} className="inline w-16 h-16 object-contain" />
                  <H3 className="mt-2">{element.title}</H3>
                  <p className="font-mono text-base text-primary-light mt-2">
                    {element.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ArticleCetered>
  );
};
