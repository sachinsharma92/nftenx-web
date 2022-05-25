import { CSSProperties, forwardRef, Ref } from "react";

type HeadingProps = {
  className?: string;
  children?: JSX.Element | string;
  style?: CSSProperties;
};

const H1component = (props: HeadingProps, ref: Ref<any>) => (
  <h1
    className={`${props.className} drop-shadow-sm 2xl:leading-snug text-5xl lg:text-6xl 2xl:text-7xl text-secondary-1 font-heading-serif font-extralight`}
    ref={ref}
  >
    {props.children}
  </h1>
);
export const H1 = forwardRef(H1component);

const H2component = (props: HeadingProps, ref: Ref<any>) => (
  <h2
    {...props}
    className={`${props.className} drop-shadow-sm 2xl:leading-snug text-4xl lg:text-5xl 2xl:text-6xl text-secondary-1 font-heading-serif font-extralight`}
    ref={ref}
  >
    {props.children}
  </h2>
);
export const H2 = forwardRef(H2component);

const H3component = (props: HeadingProps, ref: Ref<any>) => (
  <h2
    className={`${props.className} drop-shadow-sm 2xl:leading-snug text-3xl lg:text-4xl 2xl:text-4xl text-secondary-1 font-heading-serif font-extralight`}
    ref={ref}
  >
    {props.children}
  </h2>
);
export const H3 = forwardRef(H3component);

const H4component = (props: HeadingProps, ref: Ref<any>) => (
  <h4
    className={`${props.className} drop-shadow-sm 2xl:leading-snug text-2xl lg:text-3xl 2xl:text-3xl text-secondary-1 font-heading-serif font-extralight`}
    ref={ref}
  >
    {props.children}
  </h4>
);
export const H4 = forwardRef(H4component);
