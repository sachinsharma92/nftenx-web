import { Seo } from "components/atoms";
import { useState } from "react";
import { EmailJoinSection, JoinSuccess } from "components/molecules";

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
