/* eslint-disable @next/next/no-img-element */
import { TwitterPrimaryLight } from "assets/icons";
import { A, H1, H2, H3, H4 } from "components/atoms";

type PropTypes = {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  items?: ReadonlyArray<
    Record<
      string,
      | undefined
      | string
      | JSX.Element
      | ReadonlyArray<Record<string, undefined | string | JSX.Element>>
    >
  >;
  linkTitle?: string | JSX.Element;
  linkHref?: string;
};

export const TitleDescriptionLink_ImageTitleDescriptionButtonsCarousal = (
  props: PropTypes
) => {
  return (
    <article className="relative p-section text-secondary-1 flex flex-col gap-8 justify-center min-h-screen overflow-x-hidden pt-20 md:pt-20">
      <div className="flex flex-col gap-5 lg:w-1/2 text-center lg:text-left items-center lg:items-start">
        {props.title && <H1>{props.title}</H1>}
        {props.description && <p className="font-mono text-primary-light text-opacity-75">{props.description}</p>}
        {props.linkTitle && (
          <A
            href={props.linkHref ?? "javascript.void(0)"}
            className="px-8 py-3 w-fit mt-5"
          >
            {props.linkTitle}
          </A>
        )}
      </div>
      <div className="flex flex-row flex-nowrap gap-1 carousal overflow-x-auto -px-section px-2 lg:px-28 2xl:px-32 lg:pt-16 no-scrollbar">
        {props.items?.map((element, index) => {
          return (
            <div
              className="relative flex flex-col shrink-0 px-1 pb-6 w-40 lg:w-72 transition-all group lg:hover:w-80"
              key={index}
              style={{ textShadow: "0 0 12px rgba(0,0,0,1)" }}
            >
              {element.profileImage && (
                <img
                  src={element.profileImage.mediaUrl as string}
                  alt={element.name as string}
                  className="hidden lg:block blur-3xl absolute top-1/2 -translate-y-1/2 z-[0] w-11/12 lg:max-h-72 object-cover object-center opacity-0 lg:group-hover:opacity-50 transition-all"
                />
              )}
              {element.profileImage && (
                <img
                  src={element.profileImage.mediaUrl as string}
                  alt={element.name as string}
                  className="z-[1] w-full h-52 lg:h-80 object-cover object-center lg:group-hover:h-60 lg:group-hover:lg:h-96 lg:group-hover:-mt-8 lg:group-hover:lg:-mt-16 transition-all"
                />
              )}
              {element.name && (
                <H4 className="z-[1] lg:group-hover:opacity-0 transition-all lg:group-hover:-translate-y-9 text-secondary-2">
                  {element.name as string}
                </H4>
              )}
              {element.name && (
                <H2 className="z-[1] hidden lg:block leading-[0] 2xl:leading-[1] opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-24 transition-all">
                  {element.name as string}
                </H2>
              )}
              {element.description && (
                <div className="z-[1] hidden lg:block text-mono opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-20 transition-all">
                  <p className="opacity-70 transition-all text-primary-light-2">
                  {element.description as string}
                  </p>
                </div>
              )}
              <div className="flex social-media-profiles">
                {element.twitterLink && <div className="mt-2 flex-flex-row justify-start gap-2 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-20 transition-all">
                  <A
                      transparent
                      noPadding
                      href={
                        (element.twitterLink as string) ?? "javascript:void(0)"
                      }
                      className="p-2 border-[1px] border-primary-light border-opacity-25"
                    >
                      <TwitterPrimaryLight />
                    </A>
                </div>
              }
              {element.websiteLink && <div className="mt-2 flex-flex-row justify-start gap-2 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-20 transition-all">
                  <A
                      transparent
                      noPadding
                      href={
                        (element.websiteLink as string) ?? "javascript:void(0)"
                      }
                      className="p-2 border-[1px] border-primary-light border-opacity-25"
                    >
                      <TwitterPrimaryLight />
                    </A>
                </div>
              }
              {element.socialMediaLink && <div className="mt-2 flex-flex-row justify-start gap-2 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-20 transition-all">
                  <A
                      transparent
                      noPadding
                      href={
                        (element.socialMediaLink as string) ?? "javascript:void(0)"
                      }
                      className="p-2 border-[1px] border-primary-light border-opacity-25"
                    >
                      <TwitterPrimaryLight />
                    </A>
                </div>
              }
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
