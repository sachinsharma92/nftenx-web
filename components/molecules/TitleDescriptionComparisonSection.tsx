import { ElegantSeperator } from "assets/icons";
import { INSPECT_MAX_BYTES } from "buffer";
import { H1, H2, H3 } from "components/atoms";
import React, { useEffect, useRef } from "react";

type PropType = {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  items: ReadonlyArray<Record<string, string | JSX.Element>>;
};

export const TitleDescriptionComparisonSection = (props: PropType) => {
  const customCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window) {
      window.addEventListener("mousemove", (data) => {
        requestAnimationFrame(() => {
          customCursorRef.current!.style.top = `${data.clientY - 160}px`;
          customCursorRef.current!.style.left = `${data.clientX - 160}px`;
        });
      });
    }
  }, []);

  return (
    <article className="relative p-section py-14 text-secondary-1 flex flex-col gap-8 justify-center h-screen overflow-x-hidden">
      <div
        ref={customCursorRef}
        className="absolute transition-all bg-secondary-2 opacity-40 h-80 w-80 rounded-full blur-[200px]"
      ></div>

      {props.title && <H1 className="text-center">{props.title}</H1>}
      {props.description && (
        <p className="text-center font-mono">{props.description}</p>
      )}
      <div className="flex w-full flex-col lg:flex-row lg:mt-8 gap-4 justify-around align-center">
        {props.items.map((element, index) => {
          return (
            <React.Fragment key={index}>
              <div
                className={`select-none lg:max-w-md transition-all lg:opacity-50 lg:hover:opacity-100
                ${index % 2 == 0 ? "text-left" : "text-right"}
                ${
                  index === 0
                    ? "lg:text-left"
                    : index === props.items.length - 1
                    ? "lg:text-right"
                    : "lg:text-center"
                }
              `}
              >
                {element.title && <H2>{element.title}</H2>}
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
