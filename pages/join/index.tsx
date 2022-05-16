import { Seo } from "components/atoms";
import { useState } from "react";
import {
  EmailJoinSection,
  FAQSection,
  ImageTitleDescriptionLinkHero,
  JoinSuccess,
  LeftImage_RightTitleDescription_ImageTitleDescriptionItems,
  MultipleImgTitleDescriptionSection,
  TitleDescription_TitleDescriptionImageCardCarousal,
} from "components/molecules";

import { section2, section3, section4, section5 } from "constants/joinPage";
import { section12 } from "constants/landing";
import { RightArrowSecondary } from "assets/icons";

const JoinPage = (props: Record<string, any>) => {
  const {success} = props;

  return (
    <main className="join-page-style main-bg">
      <Seo title="Join Waitlist" />

      {success ? (
        <JoinSuccess />
      ) : (
        <EmailJoinSection
          title="Join our tight-knit community of Founders and Operators"
          description="Enter the NF10x general token waitlist by sharing your email below, and we'll be in touch when your turn arrives."
        />
      )}

      <TitleDescription_TitleDescriptionImageCardCarousal
        title={section2.title}
        description={section2.description}
        items={section2.items}
      />

      <LeftImage_RightTitleDescription_ImageTitleDescriptionItems
        title={section3.title}
        description={section3.description}
        image={section3.image}
        items={section3.items}
      />

      <MultipleImgTitleDescriptionSection
        mainSection={{
          title: section4.title,
          description: section4.description,
        }}
        items={section4.items}
      />

      <FAQSection title={section5.title} items={section5.items} />

      <ImageTitleDescriptionLinkHero
          title={section12.title}
          description={section12.description}
          linkHref={section12.linkHref}
          image={section12.image}
          linkTitle={
            <span className="group text-secondary-1 text-mono whitespace-nowrap flex items-center text-lg">
              Join the Community
              <span role="img" className="transition-all pl-2 group-hover:pl-5">
                <RightArrowSecondary className="h-10 w-auto" />
              </span>
            </span>
          }
        />
    </main>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { query } = ctx;
  const success = query.success;

  return {
    props: {
      success: success || '',
    },
  };
};

export default JoinPage;
