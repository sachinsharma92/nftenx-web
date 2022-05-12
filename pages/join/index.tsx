import { Seo } from "components/atoms";
import { useState } from "react";
import {
  EmailJoinSection,
  FAQSection,
  JoinSuccess,
  LeftImage_RightTitleDescription_ImageTitleDescriptionItems,
  MultipleImgTitleDescriptionSection,
  TitleDescription_TitleDescriptionImageCardCarousal,
} from "components/molecules";

import { section2, section3, section4, section5 } from "constants/joinPage";

const JoinPage = (props: Record<string, any>) => {
  const [addedToWaitlist, setAddedToWaitlist] = useState(false);

  return (
    <main className="join-page-style main-bg">
      <Seo title="Join Waitlist" />

      {/* <EmailJoinSection
        title="Join our tight-knit community of Founders and Operators"
        description="Enter the NF10x general token waitlist by sharing your email below, and we'll be in touch when your turn arrives."
        onSuccess={(status: boolean) => {
          setAddedToWaitlist(status);
        }}
      />
      <JoinSuccess
        type="event-available"
        timeTillMint={new Date("Wed May 20 2022 01:17:46 GMT+0530")}
      /> */}

      {addedToWaitlist ? (
        <JoinSuccess
        // type="event-available"
        // timeTillMint={new Date("Wed May 20 2022 01:17:46 GMT+0530")}
        />
      ) : (
        <EmailJoinSection
          title="Join our tight-knit community of Founders and Operators"
          description="Enter the NF10x general token waitlist by sharing your email below, and we'll be in touch when your turn arrives."
          onSuccess={(status: boolean) => {
            setAddedToWaitlist(status);
          }}
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

      {/* {addedToWaitlist? <ElligibleComponent/>: <JoinHeroSection onSuccess={(status: boolean)=>{
        setAddedToWaitlist(status);
      }}/>}

      <UpcomingComponent />
      <OurMintingComponent />
      <HowMintComponent />
      <AskedQuestionsComponent />
      <JoinNextComponent />


      <Footer /> */}
    </main>
  );
};

export default JoinPage;
