import ProjectModal from "./ProjectModal";

interface Props {
  title: string;
  term: string;
  people: number;
  summary: string;
  explain: string[];
  tech: string[];
  url?: string;
}

const ProjectCard = ({
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
      <h3 className="text-white font-semibold bg-sky-600 px-3 py-2 w-fit rounded-lg">
        {title}
      </h3>
      <div className="flex gap-2 text-gray-500">
        <span>{term}</span>
        <span>{people}인 팀프로젝트</span>
      </div>
      <span>{summary}</span>
      <ul className="list-disc px-4 space-y-2 text-sm">
        {explain.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {url ? (
        <a href={url} className="text-blue-600">
          {url}
        </a>
      ) : null}
      <div className="bg-green-200 px-4 py-2 w-fit rounded-xl border border-green-400">
        <span>{tech.join(", ")}</span>
      </div>
      <ProjectModal id={1} />
    </div>
  );
};

export default ProjectCard;
