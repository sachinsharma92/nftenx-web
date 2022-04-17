/* eslint-disable @next/next/no-img-element */
import { ElegantSeperator } from "assets/icons";
import { H1, H2 } from "components/atoms";
import React, { MouseEventHandler, useRef } from "react";

type PropType = {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  image?: string;
  imageSide?: "left" | "right";
  items: ReadonlyArray<Record<string, string | JSX.Element>>;
};

export const TitleDescriptionComparisonSection = (props: PropType) => {
  const customCursorRef = useRef<HTMLDivElement>(null);

  // Un Comment bellow for mouse move animation
  // useEffect(() => {
  //   if (window) {
  //     window.addEventListener("mousemove", (data) => {
  //       requestAnimationFrame(() => {
  //         customCursorRef.current!.style.top = `${data.clientY - 160}px`;
  //         customCursorRef.current!.style.left = `${data.clientX - 160}px`;
  //       });
  //     });
  //   }
  // }, []);

  const imageSideXPosision = {
    left: "-left-[20px] lg:-left-[100px]",
    right: "-right-[20px] lg:-right-[100px]",
  };

  const handleElementMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    if(customCursorRef.current) {
      customCursorRef.current.style.left = `${e.clientX - 30}px`;
      customCursorRef.current.style.top = `${e.clientY - 30}px`;
    }
  };

  return (
    <article className="relative p-section py-14 text-secondary-1 flex flex-col gap-8 justify-center min-h-screen overflow-x-hidden">
      {props.image && (
        <div
          className={`absolute z-0 top-[30%] lg:top-[50%] lg:-translate-y-[80%] w-1/2 lg:w-2/6 ${
            imageSideXPosision[props.imageSide as "left" | "right"]
          } transition-all lg:hover:scale-[102%]`}
        >
          <img
            src={props.image}
            alt="image"
            className="w-full animate-levitate-slow"
          />
        </div>
      )}

      <div
        ref={customCursorRef}
        className="absolute transition-all bg-secondary-2 opacity-40 h-60 w-60 rounded-full blur-[170px] animate-levitate-slow"
      ></div>

      {props.title && <H1 className="z-[1] text-center">{props.title}</H1>}
      {props.description && (
        <p className="z-[1] text-center font-mono">{props.description}</p>
      )}
      <div className="z-[1] flex w-full flex-col lg:flex-row mt-36 lg:mt-8 gap-4 justify-around align-center">
        {props.items.map((element, index) => {
          return (
            <React.Fragment key={index}>
              <div
                // onMouseEnter={handleElementMouseEnter}
                className={`select-none lg:max-w-md transition-all lg:opacity-50 lg:hover:opacity-100
                ${index % 2 == 0 ? "text-left" : "text-right"}
                ${
                  index === 0
                    ? "lg:text-left"
                    : index === props.items.length - 1
                    ? "lg:text-right"
                    : "lg:text-center"
                }
                  mb-9 lg:mb-0
                `}
              >
                {element.title && <H2 className="shadow-primary-1 drop-shadow-2xl">{element.title}</H2>}
                {element.description && (
                  <p className="font-mono text-lg">{element.description}</p>
                )}
              </div>
              {index != props.items.length - 1 && (
                <ElegantSeperator className="hidden lg:block" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </article>
  );
};
