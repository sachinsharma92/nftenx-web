/* eslint-disable @next/next/no-img-element */
import { RightArrowSecondary } from "assets/icons";
import { A, Article, H1, H2, H3 } from "components/atoms";
import commentIcon from 'assets/icons/comment.svg';

type PropType = {
  title?: string;
  description?: string;
  items?: ReadonlyArray<Record<string, undefined | string | JSX.Element>>;
};

export const TitleDescriptionImageCardCarousal3DotsCard = ({element, index}: {element?: any; index?: number}) => {
  return <div
  key={index}
  className="relative shrink-0 py-8 px-10 bg-[#BBC3DA] bg-opacity-5 backdrop-blur-2xl border-white border-[1px] border-opacity-20 rounded-3xl text-secondary-1 w-[90vw] lg:w-[600px] max-w-full"
>
  <img src={commentIcon.src} alt="comment icon" className="absolute top-10 right-40" />
  <img src={element.image as string} alt={element.title as string} className="absolute top-16 right-10 w-40 h-40 rounded-full object-cover object-center" />
  <div className="">
    {[...Array(3)].map((e, i) => (
      <span
        key={i}
        className="inline-block w-3 h-3 bg-secondary-1 rounded-full mr-1"
      ></span>
    ))}
  </div>
  <H2 className="mt-16 w-1/2 leading-[3rem] 2xl:leading-[3rem] max-h-[150px] min-h-[150px] overflow-hidden text-[50px]" style={{fontSize: 50}}>{element.title}</H2>
  <p className="font-mono text-primary-light text-base mt-3 text-opacity-60 min-h-[100px] max-h-[100px]">
    {element.description}
  </p>
  <A className="mt-6 flex w-fit" href={(element.linkHref as string) ?? 'javascript:void(0)'}><>{element.linkTitle} <RightArrowSecondary /></></A>
</div>
}

export const TitleDescription_TitleDescriptionImageCardCarousal = (
  props: PropType
) => {
  return (
    <Article>
      <div className="block lg:w-1/2">
        <H1>{props.title}</H1>
        <p className="font-mono text-primary-light text-base mt-2">
          {props.description}
        </p>
      </div>
      <div className="event-scroll -px-section pl-6 lg:px-32 flex flex-row flex-nowrap overflow-x-auto styled-scrollbar mt-16 gap-8 py-5">
        {props.items?.map((element, index) => {
          return <TitleDescriptionImageCardCarousal3DotsCard element={element} key={index} index={index} />;
        })}
      </div>
    </Article>
  );
};
