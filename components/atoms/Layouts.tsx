import { forwardRef, HTMLProps, Ref } from "react";

type PropType = HTMLProps<HTMLDivElement>;

const ArticleComponent = (props: PropType, ref: Ref<any>) => {
  return (
    <article
      {...props}
      ref={ref}
      className={`relative p-section py-14 flex flex-col gap-8 overflow-x-hidden ${props.className}`}
      >
      {props.children}
    </article>
  );
};

export const Article = forwardRef<HTMLElement, PropType>(ArticleComponent);

const ArticleCenteredComponent = (props: PropType, ref: Ref<any>) => {
  return (
    <article
      {...props}
      ref={ref}
      className={`relative p-section py-14 flex flex-col gap-8 justify-center items-center min-h-screen overflow-x-hidden ${props.className}`}
      >
      {props.children}
    </article>
  );
};

export const ArticleCetered = forwardRef<HTMLElement, PropType>(ArticleCenteredComponent);
