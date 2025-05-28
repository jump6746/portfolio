const Home = () => {
  return (
    <>
      {/* 한 줄 소개  */}
      <section
        style={{ backgroundImage: "url(/image/background.jpg" }}
        className="w-full h-110 relative bg-cover bg-center bg-no-repeat items-center flex"
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
      {/* 내 정보 */}
      <section className="w-full py-15">
        <div className="flex flex-col max-w-6xl px-4 mx-auto gap-10">
          <h2 className="text-4xl font-semibold">ABOUT ME</h2>
          <div className="flex gap-10">
            <div className="bg-blue-200 w-60 h-90"></div>
            <div className="flex text-xl justify-between gap-4 py-3">
              <div className="flex flex-col justify-between font-semibold">
                <span>이름</span>
                <span>생년월일</span>
                <span>거주지</span>
                <span>연락처</span>
                <span>이메일</span>
                <span>학력</span>
              </div>
              <div className="flex flex-col justify-between">
                <span>김종명</span>
                <span>1997.03.04</span>
                <span>경기도 고양시</span>
                <span>010-9466-6746</span>
                <span>jump6746@naver.com</span>
                <div className="flex items-baseline gap-2">
                  <span>서울과학기술대학교</span>
                  <span className="text-lg">(전자IT미디어공학과)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 기술 역량*/}
      <section className="w-full py-15 bg-sky-200">
        <div className="flex flex-col max-w-6xl px-4 mx-auto gap-10">
          <h2 className="text-4xl font-semibold">Skills</h2>
          <div className="flex flex-col w-full bg-white gap-5 px-5 py-8 rounded-xl">
            <div className="flex items-center gap-5">
              <h3 className="w-20 text-lg font-bold">Language</h3>
              <div className="flex gap-3">
                <div className="p-2 bg-yellow-200 rounded-lg font-semibold">
                  <span>Javascript</span>
                </div>
                <div className="p-2 bg-lime-200 rounded-lg font-semibold">
                  <span>Typescript</span>
                </div>
                <div className="p-2 bg-emerald-200 rounded-lg font-semibold">
                  <span>Java</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h3 className="w-20 text-lg font-bold">Frontend</h3>
              <div className="flex gap-3">
                <div className="p-2 bg-cyan-200 rounded-lg font-semibold">
                  <span>React</span>
                </div>
                <div className="p-2 bg-fuchsia-200 rounded-lg font-semibold">
                  <span>Vue</span>
                </div>
                <div className="p-2 bg-emerald-200 rounded-lg font-semibold">
                  <span>Tanstack-Query</span>
                </div>
                <div className="p-2 bg-sky-200 rounded-lg font-semibold">
                  <span>Zustand</span>
                </div>
                <div className="p-2 bg-rose-200 rounded-lg font-semibold">
                  <span>Tailwind CSS</span>
                </div>
                <div className="p-2 bg-amber-200 rounded-lg font-semibold">
                  <span>Styled-Component</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h3 className="w-20 text-lg font-bold">Backend</h3>
              <div className="flex gap-3">
                <div className="p-2 bg-rose-200 rounded-lg font-semibold">
                  <span>Springboot</span>
                </div>
                <div className="p-2 bg-sky-200 rounded-lg font-semibold">
                  <span>Mysql</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h3 className="w-20 text-lg font-bold">Devops</h3>
              <div className="flex gap-3">
                <div className="p-2 bg-emerald-200 rounded-lg font-semibold">
                  <span>Javascript</span>
                </div>
                <div className="p-2 bg-lime-200 rounded-lg font-semibold">
                  <span>Typescript</span>
                </div>
                <div className="p-2 bg-sky-200 rounded-lg font-semibold">
                  <span>Java</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 저장소 */}
      <section className="w-full py-15 bg-gray-200">
        <div className="flex flex-col max-w-6xl px-4 mx-auto gap-10">
          <h2 className="text-4xl font-semibold">Archive</h2>
          <div className="flex w-full gap-10 justify-start">
            <a className="w-100 h-50 bg-white rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 px-4 py-6 flex flex-col gap-5">
              <h3 className="text-3xl font-bold">Github</h3>
              <span className="text-blue-600">/github.com/jump6746</span>
              <span>소스 코드 저장소</span>
            </a>
            <a className="w-100 h-50 bg-white rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 px-4 py-6 flex flex-col gap-5">
              <h3 className="text-3xl font-bold">Velog</h3>
              <span className="text-blue-600">/velog.io/@jump6746</span>
              <span>흥미롭거나 새롭게 배운 것들을 기록하는 블로그</span>
            </a>
          </div>
        </div>
      </section>
      {/* 프로젝트 */}
      <section className="w-full py-15 bg-indigo-200">
        <div className="flex flex-col max-w-6xl px-4 mx-auto">
          <h2 className="text-4xl font-semibold">Projects</h2>
          <div className="flex"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
