import JoinHeroSection from "components/join/heroSection";
import UpcomingComponent from "components/upcoming";

const JoinPage = (props: Record<string, any>) => {
  return (
    <main className="join-page-style main-bg">
      <JoinHeroSection />
      <UpcomingComponent />
    </main>
  );
};

export default JoinPage;
