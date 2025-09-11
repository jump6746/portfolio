import { AboutMe, Archive, Education, Projects, Skill } from "@/sections";

const Home = () => {
  return (
    <>
      {/* 한 줄 소개  */}
      <section className="w-full h-fit relative bg-cover bg-center bg-no-repeat items-center flex">
        <div className="z-10 w-full mt-10">
          <div className="flex flex-col gap-5 leading-normal max-w-6xl mx-auto px-4 py-30 text-black font-semibold items-center">
            <div className="flex flex-col gap-4 text-3xl sm:text-4xl md:text-5xl items-center">
              <span>안녕하세요.</span>
              <span>프론트엔드 개발자 </span>
              <span>
                <strong className="font-semibold text-blue-700">김종명</strong>
                입니다.
              </span>
            </div>
            <div className="flex flex-col gap-1 text-md sm:text-lg md:text-xl text-gray-600 items-center">
              <span>새로운 가능성을 탐구하며 성장하는</span>
              <span>웹 개발의 매력에 빠져 있습니다.</span>
              <span>사용자에게는 최적의 경험을</span>
              <span>동료에게는 함께 성장할 수 있는</span>
              <span>코드를 지향하고 있습니다.</span>
            </div>
          </div>
        </div>
      </section>
      <AboutMe />
      <Skill />
      <Archive />
      <Projects />
      <Education />
      <section></section>
    </>
  );
};

export default Home;
