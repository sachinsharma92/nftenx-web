/* eslint-disable @next/next/no-img-element */
import { Logo, RightArrowSecondary } from "assets/icons";
import { Article, ArticleCentered, H1 } from "components/atoms";
import {
  HeadingToggleCards,
  ImageTitleDescriptionLinkHero,
  RichText,
} from "components/molecules";
import { section12 } from "constants/landing";

const Content = (props: any) => {
  return (
    <main className="bg-primary-1 min-h-screen">
      <Article className="items-center">
        <img
          src="/images/content-image.png"
          alt="Design Thinking for Blockchains"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-10/12 opacity-50 blur-[100px]"
        />
        <Logo />
        <H1>Design Thinking for Blockchains</H1>
        <img
          src="/images/content-image.png"
          alt="Design Thinking for Blockchains"
          className="w-10/12 rounded-xl"
        />
      </Article>
      <div className="p-0 lg:px-40 xl:px-40 2xl:px-56">
        <RichText
          section
          data={`
        <h1>This is H1</h1>
        <h2>This is H2</h2>
        <h3>This is H3</h3>
        <h4>This is H4</h4>
        <h5>This is H5</h5>
        <h6>This is H6</h6>

        <p>This is a paragraph</p>

        <ul>
          <li>This is</li>
          <li>an unordered</li>
          <li>list.</li>
        </ul>
        
        <ol>
          <li>This is</li>
          <li>an unordered</li>
          <li>list.</li>
        </ol>

        <a href="https://www.google.com">And this is a Link</a>
      `}
        />
      </div>

      <HeadingToggleCards title="More like this" toggleButtons={false} />

      <ImageTitleDescriptionLinkHero
        title={section12.title}
        description={section12.description}
        image={section12.image}
        linkHref={section12.linkHref}
        linkTitle={
          <span className="group text-secondary-1 text-mono whitespace-nowrap flex items-center text-lg">
            Join the Community
            <span role="img" className="transition-all pl-2 group-hover:pl-5">
              <RightArrowSecondary className="h-10 w-auto" />
            </span>
          </span>
        }
      />
    </main>
  );
};

export default Content;
