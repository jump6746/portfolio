import DevLogo, { DevTitle } from "./DevLogo";
import ProjectModal from "./ProjectModal";

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
    <div className="flex flex-col bg-white px-3 py-5 rounded-xl gap-3 w-125">
      <h3 className="font-semibold text-xl w-fit rounded-lg">{summary}</h3>
      <div className="flex gap-2 text-gray-400">
        <span>{term}</span>
        <span>{people}인 팀프로젝트</span>
      </div>
      <span className="text-md">{title}</span>
      {url ? (
        <a href={url} className="text-blue-600">
          {url}
        </a>
      ) : null}
      <ul className="list-disc px-4 space-y-2 text-sm">
        {explain.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-4 w-fit py-2">
        {tech.map((item) => (
          <DevLogo key={item} title={item as DevTitle} size={36} />
        ))}
      </div>
      <ProjectModal id={id} />
    </div>
  );
};

export default ProjectCard;
