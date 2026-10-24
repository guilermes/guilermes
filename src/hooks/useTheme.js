import { useEffect, useState } from "react";

// Lê o tema já aplicado pelo script do index.html
const getInitial = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export function useTheme() {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("tema", theme);
    } catch {
      /* armazenamento indisponível: ignora */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}
