import { NavLink } from "react-router";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle.jsx";
import { profile } from "../data/profile.js";

const links = [
  { to: "/", label: "Overview" },
  { to: "/projetos", label: "Projetos" },
  { to: "/sobre", label: "Sobre" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-20 border-b-2 border-brand-600 bg-white/85 backdrop-blur
        dark:border-brand-500 dark:bg-neutral-950/85"
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3"
      >
        <NavLink to="/" className="font-display text-lg font-bold text-neutral-900 dark:text-white">
          {'</Nobrega.dev>'}
        </NavLink>

        <ul className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `relative block rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-600 dark:text-brand-400"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="aba-ativa"
                        className="absolute inset-x-3 -bottom-[13px] h-0.5 bg-brand-600 dark:bg-brand-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
