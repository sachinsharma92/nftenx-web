import { Footer } from "components/common";
import AskedQuestionsComponent from "components/askedQuestions";
import HowMintComponent from "components/howMint";
import JoinNextComponent from "components/joinNext";
import OurMintingComponent from "components/ourMinting";
import UpcomingComponent from "components/upcoming";
import VerifyHeroSection from "components/verifyHeroSection";
import CommunityDrivenComponent from "components/communityDriven";

const VerifyEmail = (props: Record<string, any>) => {
  return (
    <main className="verify-email-page-style join-page-style main-bg">
      <VerifyHeroSection />
      <UpcomingComponent />
      <OurMintingComponent />
      {/* <CommunityDrivenComponent/> */}
      <HowMintComponent />
      <AskedQuestionsComponent />
      <JoinNextComponent />

      {/* Footer here */}
      <Footer />
    </main>
  );
};

export default VerifyEmail;
