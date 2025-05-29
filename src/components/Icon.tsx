import { SVGProps } from "react";

type IconName =
  | "academy-cap"
  | "arrow-down"
  | "book"
  | "calendar"
  | "edit"
  | "github"
  | "home"
  | "message"
  | "phone-call"
  | "smile-face";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const Icon = ({
  name,
  className = "fill-current",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <use href={`/icon/_sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
