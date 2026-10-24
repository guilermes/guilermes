import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile } from "../data/profile.js";

const icons = { email: Mail, github: GithubIcon, linkedin: LinkedinIcon };

export default function About() {
  return (
    <PageTransition>
      <section className="mb-14">
        <SectionTitle>Sobre mim</SectionTitle>
        <div className="max-w-2xl space-y-4 text-neutral-600 dark:text-neutral-400">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Contato</SectionTitle>
        <ul className="max-w-2xl divide-y divide-neutral-200 dark:divide-neutral-800">
          {profile.contacts.map(({ type, label, value, href }) => {
            const Icon = icons[type] ?? Mail;
            return (
              <li key={label} className="flex items-center gap-4 py-3">
                <Icon size={20} className="text-brand-600 dark:text-brand-400" />
                <span className="w-24 font-semibold text-neutral-900 dark:text-white">{label}</span>
                <a
                  href={href}
                  className="text-brand-600 hover:underline dark:text-brand-400"
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </PageTransition>
  );
}
