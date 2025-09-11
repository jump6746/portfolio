import { DevLogo } from "@/components";

const Skill = () => {
  return (
    <section
      id="skill"
      className="w-full py-15 flex flex-col items-center gap-10"
    >
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-blue-600 font-semibold text-center mx-auto text-xl">
          기술 스택
        </h2>
        <span className="text-gray-600 text-lg font-medium">
          해당 기술들을 사용할 수 있습니다.
        </span>
      </div>
      <div className="grid-cols-4 grid gap-5">
        <DevLogo title="Javascript" />
        <DevLogo title="Typescript" />
        <DevLogo title="React" />
        <DevLogo title="Next.js" />
        <DevLogo title="Vue.js" />
        <DevLogo title="Zustand" />
        <DevLogo title="Tanstack Query" />
        <DevLogo title="AWS" />
        <DevLogo title="Docker" />
        <DevLogo title="Github" />
        <DevLogo title="Java" />
        <DevLogo title="Spring" />
        <DevLogo title="MySQL" />
        <DevLogo title="Redis" />
        <DevLogo title="Storybook" />
        <DevLogo title="Styled Component" />
        <DevLogo title="Tailwind CSS" />
      </div>
    </section>
  );
};

export default Skill;
