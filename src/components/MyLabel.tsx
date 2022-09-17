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

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;