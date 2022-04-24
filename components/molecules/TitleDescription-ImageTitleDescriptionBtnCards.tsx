import { H1 } from "components/atoms";

type PropTypes = {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  items?: ReadonlyArray<
    | JSX.Element
    | Record<
        string,
        | undefined
        | string
        | JSX.Element
        | ReadonlyArray<
            | string
            | JSX.Element
            | Record<string, undefined | string | JSX.Element>
          >
      >
  >;
};

export const TitleDescription_ImageTitleDescriptionBtnCards = (
  props: PropTypes
) => {
  const chunkedArray = [];
  if (Array.isArray(props.items)) {
    const chunkSize = Math.ceil(
      (props.items as ReadonlyArray<unknown>).length / 3
    );

    // for (let i = 0; i <= chunkSize; i++) chunkedArray.push([]);

    // for (let i = 0; i < (props.items as ReadonlyArray<unknown>).length; i++) {
    //     if (i % 6 == 0) chunkedArray[2].push((props.items as Array<never>)[i])
    //     else if (i % 3 == 0) chunkedArray[1].push((props.items as Array<never>)[i])
    //     else if (i % 2 == 0) chunkedArray[0].push((props.items as Array<never>)[i])
    // }

    for (
      let i = 0;
      i < (props.items as ReadonlyArray<unknown>).length;
      i += chunkSize
    ) {
      chunkedArray.push(
        (props.items as ReadonlyArray<unknown>).slice(i, i + chunkSize)
      );
    }
  }
  return (
    <article className="relative p-section py-14 text-secondary-1 flex flex-col gap-8 justify-center min-h-screen overflow-x-hidden">
      <div className="lg:w-3/5">
        {props.title && <H1>{props.title}</H1>}
        {props.description && (
          <p className="font-mono opacity-70">{props.description}</p>
        )}
      </div>

      <div className="hidden lg:flex flex-row justify-end gap-4 -mt-24">
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
      </div>
    </article>
  );
};
