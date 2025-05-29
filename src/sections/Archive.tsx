import { Icon } from "@/components";

const Archive = () => {
  return (
    <section id="Archive" className="w-full py-15 bg-gray-200">
      <div className="flex flex-col max-w-6xl px-4 mx-auto gap-10">
        <h2 className="text-4xl font-semibold text-center">저장소</h2>
        <div className="flex w-full gap-10 justify-center">
          <a
            className="w-100 h-50 bg-white rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 px-4 py-6 flex flex-col gap-5"
            href="https://github.com/jump6746"
          >
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <Icon name="github" size={40} />
              <span>Github</span>
            </h3>
            <span className="text-blue-600">/github.com/jump6746</span>
            <span>소스 코드 저장소</span>
          </a>
          <a
            className="w-100 h-50 bg-white rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 px-4 py-6 flex flex-col gap-5"
            href="https://velog.io/@jump6746"
          >
            <h3 className="text-3xl font-bold">Blog</h3>
            <span className="text-blue-600">/velog.io/@jump6746</span>
            <span>흥미롭거나 새롭게 배운 것들을 기록하는 블로그</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Archive;
