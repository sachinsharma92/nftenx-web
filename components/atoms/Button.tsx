import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from "react";


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: JSX.Element | string;
    className?: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <button {...props}
            className={`px-8 py-5 rounded-full backdrop-blur-md inline-block bg-secondary-3 bg-opacity-20 text-secondary-1 font-mono transition-all ${props.className}`}
        >
            {props.children}
        </button>
    );
};
