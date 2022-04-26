import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from "react";


interface ButtonOutlineProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: JSX.Element | string;
    className?: string;
}

export const ButtonOutline = (props: ButtonOutlineProps) => {
    return (
        <button {...props}
            className={`button-outline ${props.className}`}
        >
            {props.children}
        </button>
    );
};
