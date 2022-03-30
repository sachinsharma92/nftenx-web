import { Logo } from "assets/icons";
import { A } from "components/atoms";
import { socialLinks } from "constants/sidebar";

type WithSidebarProps = {
  children?: JSX.Element | JSX.Element[] | string;
};

export const WithSidebar = (props: WithSidebarProps) => {
  return (
    <>
      <div
        className="hidden lg:flex lg:flex-col justify-between
        items-center fixed top-0 left-0 h-screen w-20
      bg-primary-1 bg-opacity-20 backdrop-blur-md text-secondary-1
        py-6 border-r-2 border-secondary-1 border-opacity-5"
      >
        <Logo className="h-10 w-auto" />
        <div className="flex flex-col gap-3 justify-center items-center">
          {socialLinks.map((element, index) => {
            return (
              <A
                key={index}
                href={element.href ?? "javascript.void(0)"}
                className="px-2 py-2"
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
