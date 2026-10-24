import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500 dark:border-neutral-800">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
