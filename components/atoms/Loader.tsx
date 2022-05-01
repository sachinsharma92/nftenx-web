import { Logo } from "assets/icons";

type PropType = {
  active?: boolean;
  text?: null | JSX.Element | string;
};

export const Loader = (props: PropType) => {
  const handleScroll = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  if (!props.active) return null;
  return (
    <div
      onScroll={handleScroll}
      className="z-[1000] fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-primary-3 via-primary-1 to-primary-1 p-6 flex flex-col gap-8 justify-center items-center"
      style={{ overscrollBehavior: "contain" }}
    >
      <Logo className="animate-spin-slow" />
      {props.text && (
        <p className="font-mono text-base text-secondary-2">{props.text}</p>
      )}
    </div>
  );
};
