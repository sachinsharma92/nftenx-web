import { A, Seo } from "components/atoms";
import { Header, WithSidebar } from "components/common";
import {
  HeadingDescriptionLinkImgSection,
  HeadingsLinkBgImageHero,
  MultipleImgTitleDescriptionSection,
  TitleDescriptionComparisonSection,
  JoinTheCommunity,
  TitleDescriptionLink_ImageTitleDescriptionButtonsCarousal,
  InfiniteScroller
} from "components/molecules";
import { section1, section2, section3, section4, section6, section7, section8 } from "constants/landing";
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
          image={section3.image}
          imageSide="right"
          title={section3.title}
          description={section3.description}
          items={section3.items}
        />
        <TitleDescriptionComparisonSection
          image={section4.image}
          imageSide="left"
          title={section4.title}
          description={section4.description}
          items={section4.items}
        />
        <JoinTheCommunity />
        <MultipleImgTitleDescriptionSection
          mainSection={{
            title: section6.title,
            description: section6.description,
            image: section6.image,
          }}
          items={section6.items}
        />
        <TitleDescriptionLink_ImageTitleDescriptionButtonsCarousal
          title={section7.title}
          description={section7.description}
          linkTitle={section7.linkTitle}
          linkHref={section7.linkHref}
          items={section7.items}
        />
        <InfiniteScroller items={section8} />

        {/* <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section> */}
      </WithSidebar>
    </main>
  );
};

export default Home;
