const Education = () => {
  return (
    <section
      id="career"
      className="flex flex-col items-start py-20 px-5 w-fit gap-10 mx-auto"
    >
      <h3 className="text-brand font-semibold text-xl mx-auto">
        교육 및 자격증
      </h3>
      <div className="flex flex-col gap-10 items-start">
        <div className="flex justify-center gap-5 sm:gap-15">
          <span className="text-third text-base sm:text-lg">2024 - 2025</span>
          <div className="flex flex-col gap-1">
            <h4 className="text-base sm:text-lg font-semibold">
              삼성 청소년 SW 아카데미 (SSAFY)
            </h4>
            <span className="text-sm sm:text-base text-fourth font-medium">
              삼성 주관
            </span>
            <ul className="list-disc text-secondary text-xs sm:text-sm space-y-2 px-5 py-2">
              <li>Java 지식 및 Spring 관련 백엔드 지식 학습</li>
              <li>MySQL 활용한 데이터베이스 지식 학습</li>
              <li>개발 관련 CS 지식 학습</li>
              <li>Javascript 및 React, Vuew 관련 프론트엔드 지식 학습</li>
              <li>풀스택 지식을 기반으로 팀프로젝트 진행</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-5 sm:gap-15">
          <span className="text-third text-base sm:text-lg">2023 - 2024</span>
          <div className="flex flex-col gap-1">
            <h4 className="text-base sm:text-lg font-semibold">
              프론트엔드 스쿨
            </h4>
            <span className="text-sm sm:text-base text-fourth font-medium">
              멋쟁이 사자처럼 주관
            </span>
            <ul className="list-disc text-secondary text-xs sm:text-sm space-y-2 px-5 py-2">
              <li>웹 표준과 웹 접근성, 시맨틱 마크업 학습</li>
              <li>
                반응형 웹 디자인, Javascript 학습 및 활용한 바닐라 프로젝트 진행
              </li>
              <li>React, Typescript, Tailwind 관련 학습 및 프로젝트 진행</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-5 sm:gap-15">
          <span className="text-third text-base sm:text-lg">2016 - 2023</span>
          <div className="flex flex-col gap-1">
            <h4 className="text-base sm:text-lg font-semibold">
              서울과학기술대학교
            </h4>
            <span className="text-sm sm:text-base text-fourth font-medium">
              전자IT미디어공학 전공
            </span>
            <ul className="list-disc text-secondary text-xs sm:text-sm space-y-2 px-5 py-2">
              <li>
                영상, 음성, 데이터 등 다양한 정보를 네트워크로 주고받는 방법
                학습
              </li>
              <li>
                C, Java 기초 지식 학습 <br />
                Python 기반 컴퓨터 비전 및 빅데이터 프로그래밍 학습
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-1 max-w-xl min-w-2xs w-full bg-fourth/25"></div>
      <div className="flex flex-col gap-10 items-start">
        <div className="flex justify-center gap-10 sm:gap-17">
          <span className="text-third text-base sm:text-lg whitespace-pre-wrap sm:whitespace-nowrap">
            {`2025\n09.12`}
          </span>
          <div className="flex flex-col gap-1">
            <h4 className="text-base sm:text-lg font-semibold">정보처리기사</h4>
          </div>
        </div>
        <div className="flex justify-center gap-10 sm:gap-17">
          <span className="text-third text-base sm:text-lg whitespace-pre-wrap sm:whitespace-nowrap">
            {`2025\n03.09`}
          </span>
          <div className="flex flex-col gap-1">
            <h4 className="text-base sm:text-lg font-semibold">OPIc</h4>
            <span className="text-sm sm:text-md text-fourth font-medium">
              Intermediate High
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
