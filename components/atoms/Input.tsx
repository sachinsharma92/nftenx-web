import { HTMLProps } from "react";

type PropType = {
  styletype?: "transparent";
};
type InputPropType = HTMLProps<HTMLInputElement>;

export const PrimaryInput = (props: InputPropType & PropType) => {
  return (
    <input
      {...props}
      className={`text-base text-secondary-1 py-4 px-8 rounded-full ${
        props.styletype === "transparent"
          ? "bg-transparent"
          : "bg-white bg-opacity-5 border-[1px] border-white border-opacity-20"
      } outline-none text-mono ${props.className}`}
    />
  );
};
