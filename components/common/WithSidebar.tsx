import { DiscordPrimary, InstaPrimary, Logo, TwitterPrimary } from "assets/icons";
import { A } from "components/atoms";

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
        <div className="flex flex-col gap-2 justify-center items-center">
          <A href="https://www.instagram.com" className="px-2 py-2">
            <InstaPrimary />
          </A>
          <A href="https://www.instagram.com" className="px-2 py-2">
            <DiscordPrimary />
          </A>
          <A href="https://www.instagram.com" className="px-2 py-2">
            <TwitterPrimary />
          </A>
        </div>
      </div>
      {props.children}
    </>
  );
};
