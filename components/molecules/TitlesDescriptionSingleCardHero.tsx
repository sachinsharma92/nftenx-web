/* eslint-disable @next/next/no-img-element */
import { Article, H1 } from "components/atoms";
import { TitleDescriptionImageCardCarousal3DotsCard } from ".";

import bubbleImg from "assets/images/illustrations/bubble-gradient.png";

type PropType = {
  title?: string;
  titleSecondary?: string;
  description?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardImage?: string;
  cardlinkTitle?: string | JSX.Element;
  cardLinkHref?: string;
};

export const TitlesDescriptionSingleCardHero = (props: PropType) => {
  return (
    <Article className="min-h-screen justify-center lg:pt-36">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="shrink-0 flex flex-col gap-5 w-full lg:w-1/2">
            <H1 className="font-[400] 2xl:w-5/6">{props.title}</H1>
            <H1 className="font-[400] 2xl:w-5/6">{props.titleSecondary}</H1>
            <p className="font-mono text-base text-primary-light mt-5 lg:mt-14 lg:w-4/5">
              {props.description}
            </p>
        </div>
        <div className="relative shrink-0 flex flex-col w-full lg:w-1/2">
          <img
            src={bubbleImg.src}
            alt="bubbles"
            className="absolute -top-20 -right-20 -px-section w-full"
          />
          <div className="lg:mt-20 2xl:mt-36">
            <TitleDescriptionImageCardCarousal3DotsCard
              element={{
                image: props.cardImage,
                title: props.cardTitle,
                description: props.cardDescription,
                linkTitle: props.cardlinkTitle,
                linkHref: props.cardLinkHref,
              }}
            />
          </div>
        </div>
      </div>
    </Article>
  );
};
