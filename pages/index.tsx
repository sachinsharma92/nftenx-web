import { A, Seo } from "components/atoms";
import { Header, WithSidebar } from "components/common";
import { HeadingsLinkBgImageHero } from "components/molecules";
import { section1 } from "constants/landing";
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
        />
      </WithSidebar>
    </main>
  );
};

export default Home;
