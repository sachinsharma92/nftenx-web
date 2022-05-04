import 'bootstrap/dist/css/bootstrap.css'
import { Footer } from "components/common/Footer";
import AskedQuestionsComponent from "components/askedQuestions";
import HowMintComponent from "components/howMint";
import JoinHeroSection from "components/joinHeroSection";
import JoinNextComponent from "components/joinNext";
import OurMintingComponent from "components/ourMinting";
import UpcomingComponent from "components/upcoming";
import { Seo } from 'components/atoms';


const JoinPage = (props: Record<string, any>) => {
  return (
    <main className="join-page-style main-bg">
      <Seo title="Join waitlist"/>
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
