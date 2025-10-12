import Link from "next/link";
import DevLogo, { DevTitle } from "./DevLogo";

interface Props {
  id: number;
  title: string;
  term: string;
  people: number;
  summary: string;
  explain: string[];
  tech: string[];
  url?: string;
}

const ProjectCard = ({
  id,
  title,
  term,
  people,
  summary,
  explain,
  tech,
  url,
}: Props) => {
  return (
    <div className="flex flex-col bg-background px-3 py-5 gap-3">
      <h3 className="font-semibold text-lg sm:text-xl w-fit rounded-lg">
        {summary}
      </h3>
      <div className="flex gap-2 text-fourth">
        <span>{term}</span>
        <span>{people}인 팀프로젝트</span>
      </div>
      <span className="text-sm sm:text-md font-medium">{title}</span>
      {url ? (
        <a href={url} className="text-brand">
          {url}
        </a>
      ) : null}
      <ul className="list-disc px-4 space-y-2 text-sm">
        {explain.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 w-fit py-2">
        {tech.map((item) => (
          <DevLogo key={item} title={item as DevTitle} size={36} />
        ))}
      </div>
      <Link
        href={`/project/${id}`}
        className="text-fourth hover:font-semibold mx-auto hover:text-third mt-auto w-fit cursor-pointer text-sm sm:text-md"
      >
        상세보기
      </Link>
    </div>
  );
};

export default ProjectCard;
