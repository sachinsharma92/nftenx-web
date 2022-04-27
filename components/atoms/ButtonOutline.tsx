import Image from "next/image";
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from "react";
import ArrowNext from "../../assets/icons/arrow-next.svg"


interface ButtonOutlineProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: JSX.Element | string;
    className?: string;
    arrowActive?: any
}

export const ButtonOutline = (props: ButtonOutlineProps) => {
    return (
        <button {...props}
            className={`button-outline ${props.className}`}
        >
            {props.children} {!props.arrowActive && <div className="icon"><Image src={ArrowNext}/></div>}
        </button>
    );
};
