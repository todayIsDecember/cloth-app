import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ButtonProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    appearance: "danger" | "black";
    size: "m" | "l";
    type?: "button" | "submit" | "delete" | "buy";

}