import Link, { LinkProps } from "next/link";

interface AProps extends LinkProps {
  children?: JSX.Element | string;
  className?: string;
  transparent?: boolean;
  noPadding?: boolean;
  gradientType?: boolean;
}

export const A = (props: AProps) => {
  return (
    <Link {...props} passHref>
      <a
        className={`${
          !props.noPadding ? "px-8 py-5" : ""
        } rounded-full backdrop-blur-md inline-block ${
          props.transparent ? "transparent" : "bg-secondary-2"
        } bg-opacity-10 text-secondary-2 font-mono transition-all ${
          props.className
        }`}
      >
        {props.children}
      </a>
    </Link>
  );
};
