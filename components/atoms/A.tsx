import Link, { LinkProps } from "next/link";

interface AProps extends LinkProps {
  children?: JSX.Element | string;
  className?: string;
}

export const A = (props: AProps) => {
  return (
    <Link {...props} passHref>
      <a
        className={`px-8 py-5 rounded-full backdrop-blur-md inline-block bg-secondary bg-opacity-20 text-secondary font-mono transition-all ${props.className}`}
      >
        {props.children}
      </a>
    </Link>
  );
};
