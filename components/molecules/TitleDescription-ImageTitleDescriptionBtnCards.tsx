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
  return (
    <article className="relative p-section py-14 lg:py-28 text-secondary-1 flex flex-col gap-8 justify-center items-center min-h-screen overflow-x-hidden">
      <div className="lg:w-3/5">
        {props.title && <H1 className="text-center">{props.title}</H1>}
        {props.description && (
          <p className="font-mono text-secondary-2 text-center">
            {props.description}
          </p>
        )}
      </div>

      <div className="grid grid-flow-row-dense grid-cols-3 gap-10 2xl:gap-16">
        {props.items?.map(
          (
            element: Record<
              string,
              undefined | JSX.Element | string | MouseEventHandler
            >,
            index
          ) => {
            return (
              <div
                key={index}
                className="w-full lg:w-72 3xl:w-96 bg-gray-200 bg-opacity-5 backdrop-blur-md p-5 border-secondary-1 border-opacity-10 border-[1px] rounded-3xl flex flex-col gap-2 items-center"
              >
                {element.image && (
                  <img
                    src={element.image as string}
                    alt={(element.description as string) ?? "NF10X event"}
                    className="w-full h-auto"
                  />
                )}
                {element.description && (
                  <p className="-mt-8 font-mono text-secondary-2 text-center">
                    {element.description}
                  </p>
                )}
                {element.buttonTitle && (
                  <button
                    onClick={
                      (element.buttonAction as MouseEventHandler) ?? null
                    }
                    className="text-sm font-mono mt-4 bg-secondary-2 bg-opacity-20 border-secondary-1 border-opacity-20 border-[1px] py-2 px-4 rounded-full"
                  >{element.buttonTitle}</button>
                )}
              </div>
            );
          }
        )}
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
