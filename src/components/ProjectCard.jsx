import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons.jsx";
import Tag from "./Tag.jsx";

const linkClass =
  "inline-flex items-center gap-1.5 text-brand-600 hover:underline dark:text-brand-400";

export default function ProjectCard({ project }) {
  const { name, description, stack, repo, demo } = project;

  return (
    <article
      className="flex h-full flex-col rounded-xl border border-neutral-200 border-t-4 border-t-brand-600 bg-neutral-50 p-5
        transition hover:-translate-y-0.5 hover:shadow-lg
        dark:border-neutral-800 dark:border-t-brand-500 dark:bg-neutral-900"
    >
      <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white">{name}</h3>
      <p className="mt-2 flex-1 text-neutral-600 dark:text-neutral-400">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologias de ${name}`}>
        {stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </ul>

      {(repo || demo) && (
        <div className="mt-4 flex gap-4 text-sm font-medium">
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className={linkClass}>
              <GithubIcon size={16} /> Código
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className={linkClass}>
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
