import { Logo } from "assets/icons";
import { A } from "components/atoms";
import { socialLinks } from "constants/sidebar";
import Link from "next/link";

export const InputPrimary = (props:any) => {
  return (
    <div className="input-main-style">
      <input className="input-style" type={props.type} name={props.name} placeholder={props.placeholder} />
    </div>
  );
};
