export default function Tag({ children }) {
  return (
    <li
      className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-0.5 text-sm text-neutral-700
        dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
    >
      {children}
    </li>
  );
}
