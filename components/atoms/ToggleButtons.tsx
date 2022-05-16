import { useState } from "react";
import { Button } from "./Button";

type PropType = {
  items?: ReadonlyArray<Record<string, string>>;
  onChange?: Function;
};

export const ToggleButtons = (props: PropType) => {
  const [active, setActive] = useState(0);

  const handleClick = (index: number, value: string) => {
    console.log("skfnskfn");
    setActive(index);
    if (props.onChange) props.onChange(value);
  };

  return (
    <div className="flex flex-row flex-nowrap overflow-x-auto gap-5 no-scrollbar">
      {props.items?.map((element, index) => {
        return (
          <Button
            key={index}
            onClick={() => handleClick(index, element.value)}
            className={`whitespace-nowrap bg-transparent border-[2px] border-[#C7DA96] opacity-30 ${
              active == index ? "opacity-100" : ""
            }`}
          >
            {element.title}
          </Button>
        );
      })}
    </div>
  );
};
