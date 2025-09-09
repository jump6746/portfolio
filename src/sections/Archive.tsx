import { Icon } from "@/components";

const Archive = () => {
  return (
    <section id="archive" className="w-full py-15">
      <div className="flex flex-col max-w-6xl px-4 mx-auto gap-10 w-fit items-start">
        <h2 className="text-xl text-blue-600 font-semibold text-center mx-auto">
          저장소
        </h2>
        <a
          className="bg-white rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 px-4 py-6 flex flex-col gap-5"
          href="https://github.com/jump6746"
        >
          <h3 className="text-xl font-bold flex items-center gap-3">
            <Icon name="github" size={24} />
            <span>Github</span>
          </h3>
          <span className="text-gray-400 font-medium">
            프로젝트 및 개인 공부 소스 코드 저장소입니다.
          </span>
        </a>
        <a
          className="bg-white rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 px-4 py-6 flex flex-col gap-5"
          href="https://velog.io/@jump6746"
        >
          <h3 className="text-xl font-bold flex items-center gap-3">
            <Icon name="velog" size={24} />
            <span>Blog</span>
          </h3>
          <span className="text-gray-400 font-medium">
            흥미롭거나 새롭게 배운 것들을 기록하는 공간입니다.
          </span>
        </a>
      </div>
    </section>
  );
};

export default Archive;
