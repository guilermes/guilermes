export default function SectionTitle({ children }) {
  return (
    <h2 className="mb-6 border-l-4 border-brand-600 pl-3 font-display text-2xl font-bold text-neutral-900 dark:border-brand-500 dark:text-white">
      {children}
    </h2>
  );
}
