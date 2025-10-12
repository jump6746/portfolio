"use client";

import { Icon } from "@/components";
import DevLogo, { DevTitle } from "@/components/DevLogo";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  projectTerm: string;
  members: number;
  membersRole: string;
  myRole: string;
  description: string;
  github: string;
  skills: DevTitle[];
  projectHighlights: { id: number; highlight: string }[];
  functionResponsibles: { id: number; function: string; detail: string[] }[];
  functionReasons: { id: number; function: string; reason: string }[];
  error: string;
  solved: string;
  study: string;
}

const Page = () => {
  const [data, setData] = useState<Project | null>(null);
  const [error, setError] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/projects/project_${id}.json`);

        if (response.ok) {
          const data = await response.json();

          setData(data.items);
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    getData();
  }, [id]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) {
    return (
      <div className="max-w-6xl h-full mx-auto sm:pt-20 pt-15">
        <div className="w-full h-full flex flex-col items-center justify-between px-10 py-10">
          <span className="md:text-xl sm:text-lg text-base text-fourth font-semibold">
            {"해당 내용을 가진 프로젝트는 존재하지 않거나 작성중입니다."}
          </span>
          <Link href={"/#project"} className="mt-auto ml-auto flex gap-2">
            <Icon name="arrow-down" className="rotate-90" />
            <span>이전으로</span>
          </Link>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-6xl h-full mx-auto sm:pt-20 pt-15">
        <div className="w-full h-full flex flex-col items-center justify-between px-10 py-10">
          <span className="md:text-xl sm:text-lg text-base text-fourth font-semibold">
            {"데이터를 불러오는 중입니다..."}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto sm:mt-20 mt-15">
      <div className="w-full h-fit px-10 py-5 flex flex-col items-start gap-4">
        <h2 className="md:text-4xl sm:text-3xl text-2xl text-accent font-semibold">
          {data.title}
        </h2>
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col items-start gap-1 text-third sm:text-base text-sm font-medium">
            <span>기간 : {data.projectTerm}</span>
            <span>인원 : {data.members}인 프로젝트</span>
            <span>팀원 : {data.membersRole}</span>
            <span>역할 : {data.myRole}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="sm:text-xl text-lg font-semibold text-brand">
            저장소
          </h3>
          <a href={data.github} className="hover:scale-110">
            <DevLogo title={"Github"} size={36} />
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="sm:text-xl text-lg font-semibold text-brand">
            기술 스택
          </h3>
          <div className="flex gap-3">
            {data.skills.map((item) => (
              <DevLogo key={item} title={item as DevTitle} size={36} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="sm:text-xl text-lg font-semibold text-brand">
            기여 역할
          </h3>
          <ul className="flex flex-col gap-2 list-disc px-5 text-secondary sm:text-base text-sm font-medium">
            {data.projectHighlights.map((item) => (
              <li key={item.id}>{item.highlight}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="sm:text-xl text-lg font-semibold text-brand">
            담당 기능 설명
          </h3>
          <ul className="flex flex-col gap-2 text-secondary font-medium">
            {data.functionResponsibles.map((item) => (
              <li key={item.id}>
                <h4 className="sm:text-lg text-base font-medium my-2">
                  {item.function}
                </h4>
                <ul className="py-2 px-8 bg-blue-50 list-disc rounded-lg w-full">
                  {item.detail.map((str, index) => (
                    <li
                      key={index}
                      className="text-secondary sm:text-base text-sm py-1.5"
                    >
                      {str}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="sm:text-xl text-lg font-semibold text-brand">
            기술 선택 이유
          </h3>
          <ul>
            {data.functionReasons.map((item) => (
              <li key={item.id}>
                <h4 className="sm:text-lg text-base font-medium my-2">
                  {item.function}
                </h4>
                <p className="py-4 px-6 bg-gray-50 sm:text-base text-sm leading-relaxed w-full rounded-lg">
                  {item.reason}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {data.error && (
          <>
            <h3 className="text-brand sm:text-lg text-base font-medium">
              겪은 문제
            </h3>
            <p className="py-4 px-6 bg-red-50 sm:text-base text-sm leading-relaxed w-full rounded-lg">
              {data.error}
            </p>
          </>
        )}
        {data.solved && (
          <>
            <h3 className="text-brand sm:text-lg text-base font-medium">
              해결 과정
            </h3>
            <p className="py-4 px-6 bg-green-50 sm:text-base text-sm leading-relaxed w-full rounded-lg">
              {data.solved}
            </p>
          </>
        )}
        {data.study && (
          <>
            <h3 className="text-brand sm:text-lg text-base font-medium">
              알게된 점
            </h3>
            <p className="py-4 px-6 bg-yellow-50 sm:text-base text-sm leading-relaxed w-full rounded-lg">
              {data.study}
            </p>
          </>
        )}
        <Link href={"/#project"} className="ml-auto my-4 flex gap-2">
          <Icon name="arrow-down" className="rotate-90" />
          <span>이전으로</span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
