const AboutMe = () => {
  return (
    <section className="flex flex-col items-center gap-20 py-20 px-15">
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-blue-600 font-semibold text-xl">핵심 역량</h3>
        <span className="text-lg text-center font-medium text-gray-400 whitespace-pre-wrap md:whitespace-normal">
          {`팀원과 같이 성장하는\n효율적인 개발을 합니다.`}
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <div className="flex flex-col gap-8 p-5">
          <h4 className="text-blue-600 font-semibold text-lg sm:text-xl md:text-2xl text-center">
            프론트엔드 역량
          </h4>
          <p className="font-medium text-gray-800 text-sm sm:text-base whitespace-nowrap text-center">
            React와 Vue 기반의 프론트엔드 개발 경험이 있으며, <br />
            Javascript와 Typescript에 능숙합니다. <br /> Next.js와 다양한 React
            라이브러리를 활용한 <br /> 프로젝트 경험이 있습니다.
          </p>
        </div>
        <div className="flex flex-col gap-8 p-5">
          <h4 className="text-blue-600 font-semibold text-lg sm:text-xl md:text-2xl text-center">
            협업 및 커뮤니케이션
          </h4>
          <p className="font-medium text-gray-800 text-sm sm:text-base whitespace-nowrap text-center">
            GitHub, GitLab을 활용한 협업 경험이 있으며, <br /> Jira, Notion 등
            협업 도구에도 익숙합니다. <br /> 기획, 디자인, 백엔드 직무 경험을
            바탕으로 <br /> 원활한 크로스 직군 협업이 가능합니다.
          </p>
        </div>
        <div className="flex flex-col gap-8 p-5">
          <h4 className="text-blue-600 font-semibold text-lg sm:text-xl md:text-2xl text-center">
            효율적인 웹 아키텍처 설계
          </h4>
          <p className="font-medium text-gray-800 text-sm sm:text-base whitespace-nowrap text-center">
            API 호출 전략을 수립하고 Web Worker를 적용해 <br /> 서버 리소스를
            절감했습니다. <br /> 프로젝트 전반에서 활용 가능한 유틸 함수들을
            정리하여 <br /> 유지보수성과 가독성을 높였습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
