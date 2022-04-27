import { Footer } from "components/common";
import AskedQuestionsComponent from "components/askedQuestions";
import HowMintComponent from "components/howMint";
import JoinHeroSection from "components/join/heroSection";
import JoinNextComponent from "components/joinNext";
import OurMintingComponent from "components/ourMinting";
import UpcomingComponent from "components/upcoming";

const JoinPage = (props: Record<string, any>) => {
  return (
    <main className="join-page-style main-bg">
      <JoinHeroSection />
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
