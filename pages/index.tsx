import { A, Seo } from "components/atoms";
import { Header, WithSidebar } from "components/common";
import {
  HeadingDescriptionLinkImgSection,
  HeadingsLinkBgImageHero,
  MultipleImgTitleDescriptionSection,
  TitleDescriptionComparisonSection,
} from "components/molecules";
import { section1, section2, section3, section4 } from "constants/landing";
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
          title={section3.title}
          description={section3.description}
          items={section3.items}
        />
        <MultipleImgTitleDescriptionSection
          mainSection={{
            title: section4.title,
            description: section4.description,
            image: section4.image,
          }}
          items={section4.items}
        />

        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
        <section className="grid place-items-center p-40 text-tertiary-2">Section</section>
      </WithSidebar>
    </main>
  );
};

export default Home;
