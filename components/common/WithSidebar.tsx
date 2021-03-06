/* eslint-disable @next/next/no-img-element */
import { Logo } from "assets/icons";
import { A } from "components/atoms";
import { socialLinks } from "constants/sidebar";
import Link from "next/link";
import nf10XTextLogo from "/assets/images/NF10X-text-vertical.svg";

type WithSidebarProps = {
  children?: JSX.Element | JSX.Element[] | string;
};

export const WithSidebar = (props: WithSidebarProps) => {
  return (
    <>
      <div
        className="z-[110] hidden lg:flex lg:flex-col justify-between
        items-center fixed top-0 left-0 h-screen w-[72px]
      bg-primary-1 bg-opacity-20 backdrop-blur-md text-secondary-1
        py-6 border-r-2 border-secondary-1 border-opacity-5"
      >
        <Link passHref href="/">
          <a className="pointer hover:animate-spin-slow">
            <Logo className="h-10 w-auto" />
          </a>
        </Link>
        <img className="w-6" src={nf10XTextLogo.src} alt="NF10X" />
        <div className="flex flex-col gap-3 justify-center items-center">
          {socialLinks.map((element, index) => {
            return (
              <A
                key={index}
                href={element.href ?? "javascript.void(0)"}
                className="social-side-icons"
              >
                {element.image}
              </A>
            );
          })}
        </div>
      </div>
      {props.children}
    </>
  );
};
