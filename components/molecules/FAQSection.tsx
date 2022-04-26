import { H1, H3 } from "components/atoms";
import { useCallback, useState } from "react";

type PropTypes = {
  title?: string;
  items?: ReadonlyArray<Record<string, string | JSX.Element>>;
};
export const FAQSection = (props: PropTypes) => {

  const getFaqs = () => {
    let output = props.items?.map((element, index) => {
      return <FAQCard key={index} element={element} index={index} />
    });
    return output;
  };

  return (
    <article className="relative p-section py-16 lg:py-32 w-full text-secondary-1 flex flex-col lg:flex-row gap-10 lg:gap-4">
      {props.title && (
        <div className="lg:w-2/5 shrink-0">
          <H1>{props.title}</H1>
        </div>
      )}
      <div className="w-full flex flex-col gap-5 lg:pt-40">{getFaqs()}</div>
    </article>
  );
};

const FAQCard = ({element, index}: {element: Record<string, JSX.Element | string>; index: number}) => {
  const [active, setActive] = useState(index == 0);
  const handleClick = () => {
    setActive(!active);
  }
  return (
    <div
      className="w-full rounded-3xl bg-secondary-1 bg-opacity-5 border-secondary-1 border-[1px] border-opacity-10 p-4 lg:py-6 lg:px-16 flex flex-row gap-6"
    >
      <div className="font-mono">
        <H3 className="opacity-30">
          <span className="font-mono">{(index + 1 < 10 ? `0${index + 1}` : index + 1).toString()}</span>
        </H3>
      </div>
      <div className="flex flex-col gap-2">
        <H3 className="relative">
          <>{element.title} <button onClick={handleClick} className="absolute top-1/2 right-0 -translate-y-1/2 -mt-1 text-secondary-2 opacity-30">+</button></>
        </H3>
        <p className={`font-mono text-secondary-2 opacity-60 overflow-hidden transition-all ${!active ? 'h-0' : 'h-auto'}`}>{element.description}</p>
      </div>
    </div>
  );
}