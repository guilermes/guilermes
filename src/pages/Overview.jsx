import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Tag from "../components/Tag.jsx";
import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";

export default function Overview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <PageTransition>
      <section className="mb-16">
        <h1 className="font-display text-4xl font-bold leading-tight text-neutral-900 sm:text-6xl dark:text-white">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl font-semibold text-brand-600 dark:text-brand-400">{profile.role}</p>
        <p className="mt-5 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">{profile.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias">
          {profile.skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </ul>

        <Link
          to="/projetos"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 font-semibold text-white
            transition hover:bg-brand-700 dark:bg-brand-500 dark:text-neutral-950 dark:hover:bg-brand-400"
        >
          Ver projetos <ArrowRight size={18} />
        </Link>
      </section>

      <section>
        <SectionTitle>Projetos em destaque</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
