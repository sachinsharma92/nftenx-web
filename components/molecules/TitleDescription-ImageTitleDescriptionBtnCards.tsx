/* eslint-disable @next/next/no-img-element */
import { H1 } from "components/atoms";
import React, { MouseEventHandler } from "react";

type PropTypes = {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  items?: ReadonlyArray<
    Record<string, undefined | string | JSX.Element | MouseEventHandler>
  >;
};

export const TitleDescription_ImageTitleDescriptionBtnCards = (
  props: PropTypes
) => {
  // const chunkedArray = [];
  // if (Array.isArray(props.items)) {
  //   const chunkSize = Math.ceil(
  //     (props.items as ReadonlyArray<unknown>).length / 3
  //   );

  //   for (
  //     let i = 0;
  //     i < (props.items as ReadonlyArray<unknown>).length;
  //     i += chunkSize
  //   ) {
  //     chunkedArray.push(
  //       (props.items as ReadonlyArray<unknown>).slice(i, i + chunkSize)
  //     );
  //   }
  // }

  const getOneCard = (
    element: Record<
      string,
      undefined | JSX.Element | string | MouseEventHandler
    >
  ) => {
    return <div className="shrink-0 w-72 lg:w-72 3xl:w-96 bg-[#bbc3da] bg-opacity-5 backdrop-blur-md p-5 border-secondary-1 border-opacity-10 border-[1px] rounded-3xl flex flex-col gap-2 items-center">
      {element.image && (
        <img
          src={element.image as string}
          alt={(element.description as string) ?? "NF10X event"}
          className="w-full h-auto"
        />
      )}
      {element.description && (
        <p className="-mt-8 font-mono text-primary-light text-center">
          {element.description}
        </p>
      )}
      {element.buttonTitle && (
        <button
          onClick={(element.buttonAction as MouseEventHandler) ?? null}
          className="text-sm font-mono mt-4 bg-secondary-2 bg-opacity-20 border-secondary-1 border-opacity-20 border-[1px] py-2 px-4 rounded-full"
        >
          {element.buttonTitle}
        </button>
      )}
    </div>;
  };

  const getAllCards = () => {
    const output = props.items?.map(
      (
        element: Record<
          string,
          undefined | JSX.Element | string | MouseEventHandler
        >,
        index
      ) => {
        return (
          <React.Fragment key={index}>{getOneCard(element)}</React.Fragment>
        );
      }
    );
    return output;
  }

  return (
    <article className="relative p-section py-14 lg:py-28 text-secondary-1 flex flex-col gap-8 justify-center items-center min-h-screen overflow-x-hidden">
      <div className="lg:w-3/5">
        {props.title && <H1 className="text-center">{props.title}</H1>}
        {props.description && (
          <p className="font-mono text-primary-light text-center pt-4">
            {props.description}
          </p>
        )}
      </div>

      <div className="hidden md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-16">
        {getAllCards()}
      </div>

      <div className="w-full md:hidden -p-section flex flex-row flex-nowrap gap-5 overflow-x-auto pb-3 no-scrollbar">
        {getAllCards()}
      </div>

      {/* <div className="hidden lg:flex flex-row justify-end gap-4 -mt-24">
        {chunkedArray.map((element, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-start gap-4`}
              style={{
                paddingTop: `${(chunkedArray.length - 1 - index) * 100}px`,
              }}
            >
              {element.map((childElement, childIndex) => {
                return (
                  <div key={childIndex}>
                    {childElement as JSX.Element | string}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div> */}
    </article>
  );
};
