const Skill = () => {
  return (
    <section id="Skill" className="w-full py-15 bg-sky-200">
      <div className="flex flex-col max-w-6xl px-4 mx-auto gap-10">
        <h2 className="text-4xl font-semibold text-center">기술 스택</h2>
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
              <div className="p-2 bg-pink-200 rounded-lg font-semibold">
                <span>Storybook</span>
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
                <span>AWS</span>
              </div>
              <div className="p-2 bg-lime-200 rounded-lg font-semibold">
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
