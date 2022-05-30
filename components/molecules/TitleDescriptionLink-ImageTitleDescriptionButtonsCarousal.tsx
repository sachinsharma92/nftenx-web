/* eslint-disable @next/next/no-img-element */
import { GlobePrimary, InstaPrimary, TwitterPrimary } from "assets/icons";
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

type SocialMediaIconProps = {
  link: any;
  image: any;
}

const SocialMediaIcon = ({ link, image }: SocialMediaIconProps) => {
  return <div className="mt-2 flex-flex-row justify-start gap-2 transition-all">
    <A
      transparent
      noPadding
      href={
        (link as string) ?? "javascript:void(0)"
      }
      className="p-2 border-[1px] border-primary-light border-opacity-25"
    >
      {image}
    </A>
  </div>
}

const SocialMediaIcons = ({ element }: { element: any }) => {
  return <div className="flex gap-2 social-media-profiles">
    {element.twitterLink && <SocialMediaIcon link={element.twitterLink} image={<TwitterPrimary />} />}
    {element.websiteLink && <SocialMediaIcon link={element.websiteLink} image={<GlobePrimary />} />}
    {element.socialMediaLink && <SocialMediaIcon link={element.socialMediaLink} image={<InstaPrimary />} />}
  </div>
}

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
            className="px-6 py-2 w-fit mt-5"
          >
            {props.linkTitle}
          </A>
        )}
      </div>
      <div className="flex flex-row flex-nowrap gap-1 carousal overflow-x-auto -px-section px-2 lg:px-24 2xl:px-32 lg:pt-16 no-scrollbar">
        <div className="menter-cards">
          {props.items?.map((element: Record<string, any>, index) => {
            return (
              <div className="image-menter-card" key={index}>
                <div className="hover-card">
                  {element.profileImage && (
                    <div className="img-box">
                      <img
                        src={element.profileImage.mediaUrl as string}
                        alt={element.name as string}
                      />
                    </div>
                  )}
                  {element.name && (
                    <h4 className="title4">
                      {element.name as string}
                    </h4>
                  )}
                  <div className="social-section">
                    <SocialMediaIcons element={element} />
                  </div>

                  <div className="footer-sec">
                    {element.description && (
                      <div className="description">
                        {element.description as string}
                      </div>
                    )}
                    <SocialMediaIcons element={element} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
