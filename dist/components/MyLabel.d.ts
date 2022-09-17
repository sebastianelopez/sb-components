/// <reference types="react" />
import "./mylabel.css";
export interface Props {
    /**
     * Label text.
     */
    label?: string;
    /**
     * Default size of text.
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * Font color.
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * is the text capitalized?
     */
    allCaps?: boolean;
    /**
     * Custom font color.
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: Props) => JSX.Element;
