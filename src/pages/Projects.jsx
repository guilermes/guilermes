import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <PageTransition>
      <SectionTitle>Projetos</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </PageTransition>
  );
}
