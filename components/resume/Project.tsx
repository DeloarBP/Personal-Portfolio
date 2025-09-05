import Badges from "@/components/resume/Badges";

interface Project {
  name: string;
  project_link?: string;
  uses_technology: string[];
  short_description: string;
}

export default function Project({ project }: Project) {
  return (
    <li>
      <div className="flex items-center">
        <h5 className="mb-1.5 text-xl font-medium text-slate-950">
          {project.name}
        </h5>
        <span className="mx-1">-</span>
        <span className="text-sm font-normal text-slate-500">
          Website Development
        </span>
      </div>
      {project.project_link && (
        <a className="text-slate-600" href={project.link} target="_blank">
          {project.project_link}
        </a>
      )}
      <div className="my-1 flex gap-2">
        {project.uses_technology.map((technology) => (
          <Badges key={technology}>{technology}</Badges>
        ))}
      </div>
      <p className="text-slate-600">{project.short_description}</p>
    </li>
  );
}
