import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme.js";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
      title={isDark ? "Tema claro" : "Tema escuro"}
      className="grid h-9 w-9 place-items-center rounded-lg border border-neutral-300 text-neutral-700
        transition hover:border-brand-500 hover:text-brand-600
        dark:border-neutral-700 dark:text-neutral-300 dark:hover:text-brand-400"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
