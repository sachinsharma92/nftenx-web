/* eslint-disable @next/next/no-img-element */
import { H1, H4 } from "components/atoms";
import { useState } from "react";
import leftBlob from 'assets/images/illustrations/green-blue-light-blob-to-bottom-right.png';


type PropTypes = {
  title?: string;
  items?: ReadonlyArray<Record<string, string | JSX.Element>>;
  gradient?: boolean
};
export const FAQSection = (props: PropTypes) => {

  const getFaqs = () => {
    let output = props.items?.map((element, index) => {
      return <FAQCard key={index} element={element} index={index} />
    });
    return output;
  };

  return (
    <article className="relative p-section lg:py-32 w-full text-secondary-1 flex flex-col lg:flex-row gap-10 lg:gap-4 faq-page-section">
      {props.gradient && <img src={leftBlob.src} alt="blob" className="absolute -top-[100px] lg:-top-[500px] left-0 -px-section pointer-events-none" />}

      {props.title && (
        <div className="lg:w-2/5 shrink-0 text-gradient-style">
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
      className="w-full rounded-3xl bg-[#757FBD] bg-opacity-10 border-secondary-1 border-[1px] border-opacity-10 p-4 lg:py-4 lg:px-10 flex flex-row gap-6 faq-card-item"
    >
      <div className="">
        <H4 className="opacity-30">
          <span className=" text-primary-light-2">{(index + 1 < 10 ? `0${index + 1}` : index + 1).toString()}</span>
        </H4>
      </div>
      <div className="flex flex-col cursor-pointer" onClick={handleClick}>
        <H4 className="relative">
          <>{element.title} <button onClick={handleClick} className="absolute top-1/2 right-0 -translate-y-1/2 -mt-1 text-secondary-2 opacity-30">+</button></>
        </H4>
        <p className={`text-primary-light-2 opacity-60 mt-3 overflow-hidden transition-all ${!active ? 'h-0' : 'h-auto'}`}>{element.description}</p>
      </div>
    </div>
  );
}