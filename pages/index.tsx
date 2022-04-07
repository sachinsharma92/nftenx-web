import { A, Seo } from "components/atoms";
import { Header, WithSidebar } from "components/common";
import {
  HeadingDescriptionLinkImgSection,
  HeadingsLinkBgImageHero,
  TitleDescriptionComparisonSection,
  JoinTheCommunity
} from "components/molecules";
import { section1, section2 } from "constants/landing";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="bg-primary-1 min-h-screen">
      <Seo title="Home" />
      <WithSidebar>
        <Header />
        <HeadingsLinkBgImageHero
          headings={section1.headings}
          image={section1.image}
          linkTitle={section1.linkTitle}
          href={section1.href}
        />
        <HeadingDescriptionLinkImgSection
          heading={section2.heading}
          description={section2.description}
          image={section2.image}
          bgImage={section2.bgImage}
          linkTitle={section2.linkTitle}
          href={section2.href}
        />
        <TitleDescriptionComparisonSection
          title="Who is NF10X For?"
          description="Web3 isn’t the next frontier. It’s a new paradigm."
          items={[
            {
              title: "Disruptors",
              description:
                "Entrepreneurs and leaders actively building in Web3 that want to learn with and from a productive, insight-filled community",
            },
            {
              title: "Catalysts",
              description:
                "Entrepreneurs and leaders actively building in Web3 that want to learn with and from a productive, insight-filled community",
            },
          ]}
        />
        <JoinTheCommunity />
      </WithSidebar>
    </main>
  );
};

export default Home;
