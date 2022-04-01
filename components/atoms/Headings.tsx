import { forwardRef, Ref } from "react";

type HeadingProps = {
  className?: string;
  children?: JSX.Element | string;
};

const H1component = (props: HeadingProps, ref: Ref<any>) => (
  <h1
    className={`${props.className} drop-shadow-sm leading-normal 2xl:leading-snug text-4xl lg:text-5xl 2xl:text-6xl text-secondary-1 font-heading-serif font-extralight`}
    ref={ref}
  >
    {props.children}
  </h1>
);
export const H1 = forwardRef(H1component);