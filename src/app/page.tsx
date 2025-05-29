import { AboutMe, Archive, Career, Projects, Skill } from "@/sections";

const Home = () => {
  return (
    <>
      {/* 한 줄 소개  */}
      <section
        style={{ backgroundImage: "url(/image/background.jpg" }}
        className="w-full h-100 relative bg-cover bg-center bg-no-repeat items-center flex"
      >
        <div className="absolute inset-0 bg-gray-200/85"></div>
        <div className="z-10 w-full mt-10">
          <div className="flex flex-col gap-4 leading-normal max-w-6xl mx-auto text-4xl px-4 text-black font-semibold">
            <span>안녕하세요.</span>
            <p className="">
              <strong className="text-sky-800">사용자</strong>와{" "}
              <strong className="text-sky-800">동료</strong> 모두를 생각하는{" "}
              <br />
              프론트엔드 개발자 <br />
              김종명입니다.
            </p>
          </div>
        </div>
      </section>
      <AboutMe />
      <Skill />
      <Archive />
      <Projects />
      <Career />
    </>
  );
};

export default Home;
