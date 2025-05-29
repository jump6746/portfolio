import { Icon } from "@/components";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="w-full py-15">
      <div className="flex flex-col max-w-6xl px-4 mx-auto gap-10">
        <h2 className="text-4xl font-semibold text-center">내 정보</h2>
        <div className="flex gap-10">
          <div className="bg-blue-200 w-60 h-90 rounded-xl"></div>
          <div className="flex text-xl justify-between gap-4 py-3">
            <div className="flex flex-col justify-between font-semibold">
              <div className="flex gap-4 items-center">
                <Icon name="smile-face" />
                <span>이름</span>
              </div>
              <div className="flex gap-4 items-center">
                <Icon name="calendar" />
                <span>생년월일</span>
              </div>
              <div className="flex gap-4 items-center">
                <Icon name="home" />
                <span>거주지</span>
              </div>
              <div className="flex gap-4 items-center">
                <Icon name="phone-call" />
                <span>연락처</span>
              </div>
              <div className="flex gap-4 items-center">
                <Icon name="message" />
                <span>이메일</span>
              </div>
              <div className="flex gap-4 items-center">
                <Icon name="academy-cap" />
                <span>학력</span>
              </div>
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
  );
};

export default AboutMe;
