import Link, { LinkProps } from "next/link";

interface AProps extends LinkProps {
  children?: JSX.Element | string;
  className?: string;
  transparent?: boolean;
  noPadding?: boolean;
}

export const A = (props: AProps) => {
  return (
    <Link {...props} passHref>
      <a
        className={`${
          !props.noPadding ? "px-8 py-5" : ""
        } rounded-full backdrop-blur-md inline-block ${
          props.transparent ? "transparent" : "bg-secondary-3"
        } bg-opacity-20 text-secondary-1 font-mono transition-all ${
          props.className
        }`}
      >
        {props.children}
      </a>
    </Link>
  );
};
