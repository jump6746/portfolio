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
  | "smile-face"
  | "velog"
  | "close";

interface IconProps extends SVGProps<SVGSVGElement> {
  name?: IconName;
  size?: number;
  src?: string;
}

const Icon = ({
  name,
  className = "fill-current",
  size = 24,
  src,
  ...props
}: IconProps) => {
  const url = src ? src : `/icon/_sprite.svg#${name}`;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <use href={url} />
    </svg>
  );
};

export default Icon;
