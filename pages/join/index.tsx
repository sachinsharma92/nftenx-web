import 'bootstrap/dist/css/bootstrap.css'
import { Footer } from "components/common/Footer";
import AskedQuestionsComponent from "components/askedQuestions";
import HowMintComponent from "components/howMint";
import JoinHeroSection from "components/joinHeroSection";
import JoinNextComponent from "components/joinNext";
import OurMintingComponent from "components/ourMinting";
import UpcomingComponent from "components/upcoming";
import ElligibleComponent from "components/mint/elligible";
import { Seo } from 'components/atoms';
import { useState } from 'react';


const JoinPage = (props: Record<string, any>) => {
  const [addedToWaitlist, setAddedToWaitlist] = useState(false);
  return (
    <main className="join-page-style main-bg">
      <Seo title="Join waitlist"/>
      {addedToWaitlist? <ElligibleComponent/>: <JoinHeroSection onSuccess={(status: boolean)=>{
        setAddedToWaitlist(status);
      }}/>}

      <UpcomingComponent />
      <OurMintingComponent />
      <HowMintComponent />
      <AskedQuestionsComponent />
      <JoinNextComponent />

      {/* Footer here */}
      <Footer />
    </main>
  );
};

export default JoinPage;
