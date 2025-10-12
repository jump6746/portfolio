import { ProjectCard } from "@/components";

const Projects = () => {
  return (
    <section id="project" className="w-full py-15">
      <div className="flex flex-col max-w-6xl px-4 mx-auto gap-10">
        <h2 className="text-brand font-semibold text-xl text-center">
          프로젝트
        </h2>
        <div className="grid-cols-1 md:grid-cols-2 grid">
          <ProjectCard
            id={1}
            title="PixmeUp"
            term="2025.04 ~ 2025.05"
            people={6}
            summary="SSAFY 내에서 Pixelro 기업과 연계한 내눈 키오스크 기반 AI 눈 건강 플랫폼"
            explain={[
              "키오스크에서 얻은 데이터를 바탕으로 AI 진단과 눈 운동 서비스 제공",
              "SSE 기반 비동기 AI 처리 결과 실시간 업데이트 시스템 개발",
              "shadcn/ui Chart 컴포넌트를 활용한 데이터 시각화 차트 구현",
            ]}
            tech={[
              "React",
              "Typescript",
              "Kotlin",
              "Tailwind CSS",
              "Tanstack Query",
              "Zustand",
            ]}
          />
          <ProjectCard
            id={2}
            title="HoneyKeep"
            term="2025.02 ~ 2025.04"
            people={6}
            summary="계획적인 소비 습관을 만드는 자산관리 서비스"
            explain={[
              "SSE를 활용한 실시간 AI 챗봇 스트리밍 시스템 구현",
              "WebAuthn API 기반 패스키 인증으로 간편 로그인 경험 제공",
              "다중 모달 플로우를 통한 직관적이고 단계적인 사용자 인증 단계 설계",
              "팀 개발 효율성 향상을 위한 커스텀 API 클라이언트 설계 및 도입",
            ]}
            tech={[
              "React",
              "Typescript",
              "Tailwind CSS",
              "Tanstack Query",
              "Zustand",
            ]}
          />
          <ProjectCard
            id={3}
            title="MIMO"
            term="2025.01 ~ 2025.02"
            people={6}
            summary="모임 관리 플랫폼 서비스"
            explain={[
              "회비 관리부터 실시간 채팅까지, 모임 운영을 위한 통합 디지털 워크스페이스",
              "PG사 API 연동을 통한 안전한 결제 시스템 구축 및 결제 플로우 end-to-end 테스트",
              "WebSocket 연결 관리, 메시지 큐잉, 재연결 로직을 포함한 안정적인 채팅 인프라 구축",
            ]}
            tech={[
              "React",
              "Typescript",
              "Tailwind CSS",
              "Tanstack Query",
              "Zustand",
            ]}
          />
          <ProjectCard
            id={4}
            title="Honeyboard"
            term="2024.12 ~ 2025.02"
            people={12}
            summary="IT 강사님들의 효율적인 수업 운영을 위한 올인원 수업 관리
                웹사이트"
            explain={[
              "수업 자료부터 학생 관리까지 통합된 교육 관리 시스템으로 강사 워크플로우 최적화 제공",
              "TanStack Query의 백그라운드 동기화로 실시간 팀 프로젝트 현황 대시보드 구축",
            ]}
            url="https://honeyboard.site"
            tech={[
              "React",
              "Typescript",
              "Tailwind CSS",
              "Tanstack Query",
              "Zustand",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
