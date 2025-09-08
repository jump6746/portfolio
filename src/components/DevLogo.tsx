import Icon from "./Icon";

export type DevTitle =
  | "Javascript"
  | "Typescript"
  | "React"
  | "Next.js"
  | "Vue.js"
  | "Zustand"
  | "Tanstack Query"
  | "AWS"
  | "Docker"
  | "Github"
  | "Java"
  | "Spring"
  | "MySQL"
  | "Redis"
  | "Storybook"
  | "Styled Component"
  | "Tailwind CSS"
  | "Kotlin";

interface Props {
  size?: number;
  title: DevTitle;
}

const DevSrc = {
  Javascript: "/logo/skill-icons_javascript.svg",
  Typescript: "/logo/skill-icons_typescript.svg",
  React: "/logo/skill-icons_react-light.svg",
  "Next.js": "/logo/skill-icons_nextjs-light.svg",
  "Vue.js": "/logo/skill-icons_vuejs-light.svg",
  Zustand: "/logo/skill-icons_zustand-light.svg",
  "Tanstack Query": "/logo/skill-icons_tanstack-light.svg",
  AWS: "/logo/skill-icons_aws-light.svg",
  Docker: "/logo/skill-icons_docker.svg",
  Github: "/logo/skill-icons_github-light.svg",
  Java: "/logo/skill-icons_java-light.svg",
  Spring: "/logo/skill-icons_spring-light.svg",
  MySQL: "/logo/skill-icons_mysql-light.svg",
  Redis: "/logo/skill-icons_redis-light.svg",
  Storybook: "/logo/skill-icons_storybook-light.svg",
  "Styled Component": "/logo/skill-icons_styledcomponents.svg",
  "Tailwind CSS": "/logo/skill-icons_tailwindcss-light.svg",
  Kotlin: "/logo/skill-icons_kotlin-light.svg",
};

const DevLogo = ({ size = 48, title }: Props) => {
  return (
    <div className="relative group">
      <Icon src={DevSrc[title]} size={size} />
      <span className="text-xs absolute bottom-0 whitespace-nowrap left-0 bg-white text-blue-700 translate-y-full hidden group-hover:block">
        {title}
      </span>
    </div>
  );
};

export default DevLogo;
