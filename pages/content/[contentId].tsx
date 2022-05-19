/* eslint-disable @next/next/no-img-element */
import { Logo, RightArrowSecondary } from "assets/icons";
import { Article, ArticleCentered, H1, P, Seo } from "components/atoms";
import {
  HeadingToggleCards,
  ImageTitleDescriptionLinkHero,
  RichText,
} from "components/molecules";
import { section12 } from "constants/landing";
import { Api } from "services/api";
import moment from "moment";

const Content = (props: any) => {
  const {
    title,
    createdAt,
    updatedAt,
    content,
    author,
    isPublished,
    articleImage
  } = props;

  return (
    <>
      <Seo title={title} />
      <main className="bg-primary-1 min-h-screen">
        <Article className="items-center">
          <img
            src={articleImage || "/images/content-image.png"}
            alt={title}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-10/12 opacity-50 blur-[100px]"
          />
          <Logo />
          <H1>{title}</H1>
          <P>{moment(updatedAt).format('DD MMMM YYYY')}</P>
          <img
            src="/images/content-image.png"
            alt={title}
            className="w-10/12 rounded-xl"
          />
        </Article>
        <div className="p-0 lg:px-40 xl:px-40 2xl:px-56">
          <RichText
            section
            data={content}
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
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { query } = ctx;
  const { contentId } = query;

  const response = await Api.getArticleDetail(contentId);

  if(response.success) {
    const {
      title,
      createdAt,
      updatedAt,
      content,
      author,
      isPublished,
      postImage
    } = response.data.entity;
    return {
      props: {
        title,
        createdAt,
        updatedAt,
        content,
        author,
        isPublished,
        articleImage: postImage.mediaUrl || null
      },
    };
  }
  return {
    redirect: {
        permanent: false,
        destination: "/404"
      }
  };
};

export default Content;
